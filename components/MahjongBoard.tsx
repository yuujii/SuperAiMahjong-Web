'use client';

import React from 'react';
import { RiverDisplay } from './RiverDisplay';
import { MeldDisplay } from './MeldDisplay';
import { DoraIndicator } from './DoraIndicator';
import { HandDisplay } from './HandDisplay';
import { PlayerInfo } from './PlayerInfo';
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
    <div className="w-full min-h-screen mahjong-bg flex flex-col">
      {/* Header */}
      <div className="p-6 text-center">
        <h1 className="text-4xl font-bold text-white drop-shadow-lg">
          スーパーAI麻雀ビューア
        </h1>
      </div>

      {/* Main Game Area */}
      <div className="flex-1 flex items-center justify-center p-4">
        <div className="relative w-full max-w-6xl aspect-square max-h-[90vh]">

          {/* 中央の卓 */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="table-surface rounded-lg" style={{ width: '60%', height: '60%' }}>
              {/* ドラ表示牌 */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <DoraIndicator dora={data.dora} />
              </div>
            </div>
          </div>

          {/* TOP Player - 対面 */}
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2">
            <PlayerInfo position="TOP" wind="北" />
            {topMeld && topMeld.tiles.length > 0 && (
              <MeldDisplay area={topMeld.area} tiles={topMeld.tiles} />
            )}
            {topRiver && <RiverDisplay area={topRiver.area} tiles={topRiver.tiles} />}
          </div>

          {/* RIGHT Player - 下家 */}
          <div className="absolute right-0 top-1/2 transform -translate-y-1/2 flex flex-col items-center gap-2">
            <PlayerInfo position="RT" wind="西" />
            {rightMeld && rightMeld.tiles.length > 0 && (
              <MeldDisplay area={rightMeld.area} tiles={rightMeld.tiles} />
            )}
            {rightRiver && <RiverDisplay area={rightRiver.area} tiles={rightRiver.tiles} />}
          </div>

          {/* BOTTOM Player - 自分 */}
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 flex flex-col-reverse items-center gap-2">
            {bottomRiver && <RiverDisplay area={bottomRiver.area} tiles={bottomRiver.tiles} />}
            {bottomMeld && bottomMeld.tiles.length > 0 && (
              <MeldDisplay area={bottomMeld.area} tiles={bottomMeld.tiles} />
            )}
            <PlayerInfo position="BTM" wind="東" />
          </div>

          {/* LEFT Player - 上家 */}
          <div className="absolute left-0 top-1/2 transform -translate-y-1/2 flex flex-col items-center gap-2">
            <PlayerInfo position="LT" wind="南" />
            {leftMeld && leftMeld.tiles.length > 0 && (
              <MeldDisplay area={leftMeld.area} tiles={leftMeld.tiles} />
            )}
            {leftRiver && <RiverDisplay area={leftRiver.area} tiles={leftRiver.tiles} />}
          </div>
        </div>
      </div>

      {/* Hand Display - 固定位置 */}
      <div className="p-6 flex justify-center">
        <HandDisplay hand={data.hand} />
      </div>
    </div>
  );
};
