import { TileName } from '@/components/MahjongTile';

export type { TileName };
export type AreaType = 'RT' | 'TOP' | 'BTM' | 'LT';
export type MeldAreaType = 'M-RT' | 'M-TOP' | 'M-BTM' | 'M-LT';

export interface TileRect {
  serializedVersion: string;
  x: number;
  y: number;
  width: number;
  height: number;
}

export interface TileCorner {
  x: number;
  y: number;
}

export interface TileEx {
  label: TileName;
  score: number;
  classId: number;
  rect: TileRect;
  corners: TileCorner[];
}

export interface River {
  area: AreaType;
  tiles: TileName[];
}

export interface RiverEx {
  area: AreaType;
  tiles_ex: TileEx[];
}

export interface Meld {
  area: MeldAreaType;
  tiles: TileName[];
}

export interface MeldEx {
  area: MeldAreaType;
  tiles_ex: TileEx[];
}

export interface MahjongGameData {
  rivers: River[];
  melds: Meld[];
  dora: TileName[];
  rivers_ex: RiverEx[];
  melds_ex: MeldEx[];
  imageSize: number;
  hand: TileName[];
}
