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

const tileDisplay: Record<TileName, string> = {
  '一萬': '🀇', '二萬': '🀈', '三萬': '🀉', '四萬': '🀊', '五萬': '🀋',
  '六萬': '🀌', '七萬': '🀍', '八萬': '🀎', '九萬': '🀏',
  '一筒': '🀙', '二筒': '🀚', '三筒': '🀛', '四筒': '🀜', '五筒': '🀝',
  '六筒': '🀞', '七筒': '🀟', '八筒': '🀠', '九筒': '🀡',
  '一索': '🀐', '二索': '🀑', '三索': '🀒', '四索': '🀓', '五索': '🀔',
  '六索': '🀕', '七索': '🀖', '八索': '🀗', '九索': '🀘',
  '東': '🀀', '南': '🀁', '西': '🀂', '北': '🀃',
  '白': '🀆', '發': '🀅', '中': '🀄',
};

const sizeClasses = {
  small: 'w-7 h-9 text-xl',
  medium: 'w-10 h-14 text-3xl',
  large: 'w-14 h-20 text-5xl',
};

export const MahjongTile: React.FC<MahjongTileProps> = ({
  tile,
  size = 'medium',
  rotation = 0,
  className = ''
}) => {
  return (
    <div
      className={`
        ${sizeClasses[size]}
        bg-gradient-to-b from-gray-50 to-gray-100
        rounded-sm
        tile-3d
        flex items-center justify-center
        border-2 border-gray-200
        relative
        ${className}
      `}
      style={{ transform: `rotate(${rotation}deg)` }}
    >
      <span className="select-none drop-shadow-sm">{tileDisplay[tile]}</span>
    </div>
  );
};
