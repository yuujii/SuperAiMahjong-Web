import React from 'react';
import { MahjongTile, TileName } from './MahjongTile';

interface DoraIndicatorProps {
  dora: TileName[];
}

export const DoraIndicator: React.FC<DoraIndicatorProps> = ({ dora }) => {
  return (
    <div className="flex flex-col items-center gap-2">
      <div className="text-sm text-white/70 font-semibold">ドラ表示牌</div>
      <div className="flex gap-1 p-3 bg-black/30 rounded-lg border-2 border-yellow-600/50">
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
