import React from 'react';
import { AreaType } from '@/types/mahjong';

interface PlayerInfoProps {
  position: AreaType;
  name?: string;
  score?: number;
  wind?: string;
}

const positionNames: Record<AreaType, string> = {
  'BTM': '自分',
  'RT': '下家',
  'TOP': '対面',
  'LT': '上家',
};

const windDisplay: Record<string, string> = {
  '東': '東',
  '南': '南',
  '西': '西',
  '北': '北',
};

export const PlayerInfo: React.FC<PlayerInfoProps> = ({
  position,
  name,
  score = 25000,
  wind = '東',
}) => {
  const displayName = name || positionNames[position];

  return (
    <div className="bg-black/40 backdrop-blur-sm rounded-lg px-4 py-2 border border-white/20">
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg">
          {windDisplay[wind]}
        </div>
        <div className="flex flex-col">
          <span className="text-white font-semibold text-sm">{displayName}</span>
          <span className="text-yellow-300 text-xs font-mono">{score.toLocaleString()}点</span>
        </div>
      </div>
    </div>
  );
};
