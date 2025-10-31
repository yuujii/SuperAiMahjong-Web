import React from 'react';
import { MahjongTile, TileName } from './MahjongTile';

interface DoraIndicatorProps {
  dora: TileName[];
}

export const DoraIndicator: React.FC<DoraIndicatorProps> = ({ dora }) => {
  return (
    <div className="flex flex-col items-center gap-2 p-3 bg-black/50 backdrop-blur-sm rounded-lg border border-amber-500/30 shadow-xl">
      <div className="text-xs text-amber-400 font-semibold tracking-wider">ドラ表示牌</div>
      <div className="flex gap-1">
        {dora.map((tile, index) => (
          <MahjongTile
            key={`dora-${index}`}
            tile={tile}
            size="small"
          />
        ))}
      </div>
    </div>
  );
};
