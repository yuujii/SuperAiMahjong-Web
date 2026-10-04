import type { MahjongGameData } from '@/types/mahjong';

const riverAreas = new Set(['RT', 'TOP', 'BTM', 'LT']);
const meldAreas = new Set(['M-RT', 'M-TOP', 'M-BTM', 'M-LT']);

const isRecord = (value: unknown): value is Record<string, unknown> =>
  typeof value === 'object' && value !== null && !Array.isArray(value);

function isTileList(value: unknown, maxLength: number): value is string[] {
  return Array.isArray(value) && value.length <= maxLength &&
    value.every(tile => typeof tile === 'string' && tile.trim().length > 0 && tile.length <= 64);
}

function isAreaList(value: unknown, areas: Set<string>): boolean {
  if (!Array.isArray(value) || value.length > areas.size) return false;
  const seen = new Set<string>();
  return value.every(entry => {
    if (!isRecord(entry) || typeof entry.area !== 'string' ||
        !areas.has(entry.area) || seen.has(entry.area) || !isTileList(entry.tiles, 136)) {
      return false;
    }
    seen.add(entry.area);
    return true;
  });
}

/** Validate the fields consumed by the viewer before updating React state or accepting an upload. */
export function isMahjongGameData(value: unknown): value is MahjongGameData {
  if (!isRecord(value) || !isAreaList(value.rivers, riverAreas) ||
      !isAreaList(value.melds, meldAreas) || !isTileList(value.dora, 10) ||
      !isTileList(value.hand, 14)) return false;

  // Timeline construction stores a snapshot per discard; bound its input size.
  const rivers = value.rivers as Array<{ tiles: string[] }>;
  return rivers.reduce((sum, river) => sum + river.tiles.length, 0) <= 136;
}
