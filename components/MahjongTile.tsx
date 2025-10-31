import React from 'react';

export type TileName =
  | '一萬' | '二萬' | '三萬' | '四萬' | '五萬' | '六萬' | '七萬' | '八萬' | '九萬'
  | '一筒' | '二筒' | '三筒' | '四筒' | '五筒' | '六筒' | '七筒' | '八筒' | '九筒'
  | '一索' | '二索' | '三索' | '四索' | '五索' | '六索' | '七索' | '八索' | '九索'
  | '東' | '南' | '西' | '北' | '白' | '發' | '中';

interface MahjongTileProps {
  tile: TileName;
  size?: 'small' | 'medium' | 'large';
  rotation?: number;
  className?: string;
}

// 萬子・筒子・索子を色分け
const getTileColor = (tile: TileName): string => {
  if (tile.includes('萬')) return 'text-red-600';
  if (tile.includes('筒')) return 'text-blue-600';
  if (tile.includes('索')) return 'text-green-600';
  if (['東', '南', '西', '北'].includes(tile)) return 'text-gray-700';
  if (['白', '發', '中'].includes(tile)) return 'text-gray-800';
  return 'text-gray-800';
};

// 牌の表示用スタイル
const getTileDisplay = (tile: TileName): { main: string; sub?: string } => {
  const char = tile.charAt(0);
  const suit = tile.slice(1);

  if (suit === '萬') return { main: char, sub: 'M' };
  if (suit === '筒') return { main: char, sub: 'P' };
  if (suit === '索') return { main: char, sub: 'S' };
  return { main: tile };
};

const sizeClasses = {
  small: {
    container: 'w-7 h-10',
    text: 'text-base',
    subText: 'text-[8px]'
  },
  medium: {
    container: 'w-11 h-16',
    text: 'text-2xl',
    subText: 'text-xs'
  },
  large: {
    container: 'w-16 h-24',
    text: 'text-4xl',
    subText: 'text-sm'
  },
};

export const MahjongTile: React.FC<MahjongTileProps> = ({
  tile,
  size = 'medium',
  rotation = 0,
  className = ''
}) => {
  const display = getTileDisplay(tile);
  const colorClass = getTileColor(tile);
  const sizeClass = sizeClasses[size];

  return (
    <div
      className={`
        ${sizeClass.container}
        bg-gradient-to-b from-white to-gray-50
        rounded-sm
        tile-3d
        flex flex-col items-center justify-center
        border-2 border-gray-300
        relative
        ${className}
      `}
      style={{ transform: `rotate(${rotation}deg)` }}
    >
      <div className={`${sizeClass.text} ${colorClass} font-bold leading-none`}>
        {display.main}
      </div>
      {display.sub && (
        <div className={`${sizeClass.subText} text-gray-500 font-semibold mt-0.5`}>
          {display.sub}
        </div>
      )}
    </div>
  );
};
