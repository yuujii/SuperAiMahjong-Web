import React from 'react';
import { MahjongTile, TileName } from './MahjongTile';

interface HandDisplayProps {
  hand: TileName[];
}

export const HandDisplay: React.FC<HandDisplayProps> = ({ hand }) => {
  return (
    <div className="flex flex-col items-center gap-3">
      <div className="text-xs text-cyan-400 font-semibold tracking-wider">手牌</div>
      <div className="flex gap-1 p-4 bg-black/50 backdrop-blur-sm rounded-lg border border-cyan-500/30 shadow-2xl">
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
