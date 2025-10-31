import { MahjongGameData, TileName } from '@/types/mahjong';

export interface GameStep {
  step: number;
  rivers: {
    RT: TileName[];
    TOP: TileName[];
    BTM: TileName[];
    LT: TileName[];
  };
  melds: {
    'M-RT': TileName[];
    'M-TOP': TileName[];
    'M-BTM': TileName[];
    'M-LT': TileName[];
  };
  dora: TileName[];
  hand: TileName[];
}

export function parseGameTimeline(data: MahjongGameData): GameStep[] {
  const steps: GameStep[] = [];

  // Calculate total number of tiles across all rivers
  const totalTiles = data.rivers.reduce((sum, river) => sum + river.tiles.length, 0);

  // Create steps from 0 to totalTiles
  for (let step = 0; step <= totalTiles; step++) {
    const gameStep: GameStep = {
      step,
      rivers: {
        RT: [],
        TOP: [],
        BTM: [],
        LT: []
      },
      melds: {
        'M-RT': data.melds.find(m => m.area === 'M-RT')?.tiles || [],
        'M-TOP': data.melds.find(m => m.area === 'M-TOP')?.tiles || [],
        'M-BTM': data.melds.find(m => m.area === 'M-BTM')?.tiles || [],
        'M-LT': data.melds.find(m => m.area === 'M-LT')?.tiles || []
      },
      dora: data.dora,
      hand: data.hand
    };

    // Distribute tiles to each player's river based on step
    let currentTileIndex = 0;

    for (const river of data.rivers) {
      const tilesForThisPlayer = Math.min(
        Math.max(0, step - currentTileIndex),
        river.tiles.length
      );

      gameStep.rivers[river.area] = river.tiles.slice(0, tilesForThisPlayer);
      currentTileIndex += river.tiles.length;
    }

    steps.push(gameStep);
  }

  return steps;
}
