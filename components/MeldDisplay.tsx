import React from 'react';
import { MahjongTile, TileName } from './MahjongTile';
import { MeldAreaType } from '@/types/mahjong';

interface MeldDisplayProps {
  area: MeldAreaType;
  tiles: TileName[];
}

const areaConfig = {
  'M-RT': { rotation: 90, label: '右家副露' },
  'M-TOP': { rotation: 0, label: '対面副露' },
  'M-BTM': { rotation: 0, label: '自分副露' },
  'M-LT': { rotation: -90, label: '左家副露' }
};

export const MeldDisplay: React.FC<MeldDisplayProps> = ({ area, tiles }) => {
  const config = areaConfig[area];

  if (tiles.length === 0) return null;

  return (
    <div className="flex flex-col items-center gap-2">
      <div className="text-xs text-white/50">{config.label}</div>
      <div className="flex gap-1 p-2 bg-black/20 rounded">
        {tiles.map((tile, index) => (
          <MahjongTile
            key={`${area}-${index}`}
            tile={tile}
            size="small"
            rotation={config.rotation}
          />
        ))}
      </div>
    </div>
  );
};
