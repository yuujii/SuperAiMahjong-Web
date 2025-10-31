import React from 'react';
import { MahjongTile, TileName } from './MahjongTile';
import { AreaType } from '@/types/mahjong';

interface RiverDisplayProps {
  area: AreaType;
  tiles: TileName[];
}

const areaConfig = {
  RT: { rotation: 90, label: '右家' },
  TOP: { rotation: 0, label: '対面' },
  BTM: { rotation: 0, label: '自分' },
  LT: { rotation: -90, label: '左家' }
};

export const RiverDisplay: React.FC<RiverDisplayProps> = ({ area, tiles }) => {
  const config = areaConfig[area];
  const isVertical = area === 'RT' || area === 'LT';

  return (
    <div className="flex flex-col items-center gap-2">
      <div className="text-sm text-white/70 font-semibold">{config.label}</div>
      <div className={`
        flex ${isVertical ? 'flex-col' : 'flex-row'}
        flex-wrap gap-1 p-2
        bg-black/20 rounded
        ${isVertical ? 'max-h-96' : 'max-w-md'}
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
    </div>
  );
};
