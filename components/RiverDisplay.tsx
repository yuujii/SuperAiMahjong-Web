import React from 'react';
import { MahjongTile, TileName } from './MahjongTile';
import { AreaType } from '@/types/mahjong';

interface RiverDisplayProps {
  area: AreaType;
  tiles: TileName[];
}

const areaConfig = {
  RT: { rotation: 90, tilesPerRow: 3 },
  TOP: { rotation: 0, tilesPerRow: 6 },
  BTM: { rotation: 0, tilesPerRow: 6 },
  LT: { rotation: -90, tilesPerRow: 3 }
};

export const RiverDisplay: React.FC<RiverDisplayProps> = ({ area, tiles }) => {
  const config = areaConfig[area];
  const isVertical = area === 'RT' || area === 'LT';

  return (
    <div className={`
      flex ${isVertical ? 'flex-col' : 'flex-row'}
      flex-wrap gap-0.5
      ${isVertical ? 'max-h-64' : 'max-w-xs'}
    `}>
      {tiles.map((tile, index) => (
        <MahjongTile
          key={`${area}-${index}`}
          tile={tile}
          size="small"
          rotation={config.rotation}
        />
      ))}
    </div>
  );
};
