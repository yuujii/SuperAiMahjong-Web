'use client';

import React from 'react';
import { RiverDisplay } from './RiverDisplay';
import { MeldDisplay } from './MeldDisplay';
import { DoraIndicator } from './DoraIndicator';
import { HandDisplay } from './HandDisplay';
import { MahjongGameData } from '@/types/mahjong';

interface MahjongBoardProps {
  data: MahjongGameData;
}

export const MahjongBoard: React.FC<MahjongBoardProps> = ({ data }) => {
  const topRiver = data.rivers.find(r => r.area === 'TOP');
  const bottomRiver = data.rivers.find(r => r.area === 'BTM');
  const leftRiver = data.rivers.find(r => r.area === 'LT');
  const rightRiver = data.rivers.find(r => r.area === 'RT');

  const topMeld = data.melds.find(m => m.area === 'M-TOP');
  const bottomMeld = data.melds.find(m => m.area === 'M-BTM');
  const leftMeld = data.melds.find(m => m.area === 'M-LT');
  const rightMeld = data.melds.find(m => m.area === 'M-RT');

  return (
    <div className="w-full min-h-screen p-8 bg-gradient-to-br from-green-800 to-green-900">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-8 text-white">
          雀魂牌譜ビューア
        </h1>

        {/* Dora Indicator */}
        <div className="flex justify-center mb-8">
          <DoraIndicator dora={data.dora} />
        </div>

        {/* Main Game Board */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
          {/* Left Player */}
          <div className="flex flex-col items-center justify-center gap-4">
            {leftRiver && <RiverDisplay area={leftRiver.area} tiles={leftRiver.tiles} />}
            {leftMeld && leftMeld.tiles.length > 0 && (
              <MeldDisplay area={leftMeld.area} tiles={leftMeld.tiles} />
            )}
          </div>

          {/* Center - Top and Bottom Players */}
          <div className="flex flex-col gap-8">
            {/* Top Player */}
            <div className="flex flex-col items-center gap-4">
              {topRiver && <RiverDisplay area={topRiver.area} tiles={topRiver.tiles} />}
              {topMeld && topMeld.tiles.length > 0 && (
                <MeldDisplay area={topMeld.area} tiles={topMeld.tiles} />
              )}
            </div>

            {/* Bottom Player */}
            <div className="flex flex-col items-center gap-4">
              {bottomRiver && <RiverDisplay area={bottomRiver.area} tiles={bottomRiver.tiles} />}
              {bottomMeld && bottomMeld.tiles.length > 0 && (
                <MeldDisplay area={bottomMeld.area} tiles={bottomMeld.tiles} />
              )}
            </div>
          </div>

          {/* Right Player */}
          <div className="flex flex-col items-center justify-center gap-4">
            {rightRiver && <RiverDisplay area={rightRiver.area} tiles={rightRiver.tiles} />}
            {rightMeld && rightMeld.tiles.length > 0 && (
              <MeldDisplay area={rightMeld.area} tiles={rightMeld.tiles} />
            )}
          </div>
        </div>

        {/* Hand Display */}
        <div className="flex justify-center mt-8">
          <HandDisplay hand={data.hand} />
        </div>
      </div>
    </div>
  );
};
