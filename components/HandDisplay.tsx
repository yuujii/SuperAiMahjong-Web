import React from 'react';
import { MahjongTile, TileName } from './MahjongTile';

interface HandDisplayProps {
  hand: TileName[];
}

export const HandDisplay: React.FC<HandDisplayProps> = ({ hand }) => {
  return (
    <div className="flex flex-col items-center gap-2">
      <div className="text-sm text-white/70 font-semibold">手牌</div>
      <div className="flex gap-1 p-3 bg-black/30 rounded-lg border-2 border-blue-600/50">
        {hand.map((tile, index) => (
          <MahjongTile
            key={`hand-${index}`}
            tile={tile}
            size="medium"
          />
        ))}
      </div>
    </div>
  );
};
