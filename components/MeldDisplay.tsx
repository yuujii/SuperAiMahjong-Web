import React from 'react';
import { MahjongTile, TileName } from './MahjongTile';
import { MeldAreaType } from '@/types/mahjong';

interface MeldDisplayProps {
  area: MeldAreaType;
  tiles: TileName[];
}

const areaConfig = {
  'M-RT': { rotation: 90 },
  'M-TOP': { rotation: 0 },
  'M-BTM': { rotation: 0 },
  'M-LT': { rotation: -90 }
};

export const MeldDisplay: React.FC<MeldDisplayProps> = ({ area, tiles }) => {
  const config = areaConfig[area];

  if (tiles.length === 0) return null;

  return (
    <div className="flex gap-0.5">
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
