import { NextRequest, NextResponse } from 'next/server';
import { MahjongGameData } from '@/types/mahjong';

export async function POST(request: NextRequest) {
  try {
    const data: MahjongGameData = await request.json();

    // Validate basic structure
    if (!data.rivers || !data.melds || !data.dora || !data.hand) {
      return NextResponse.json(
        { error: 'Invalid data structure' },
        { status: 400 }
      );
    }

    // Store in session or database (for now, just return success)
    // In a real application, you would save this to a database with a unique ID
    const gameId = Date.now().toString();

    return NextResponse.json({
      success: true,
      gameId,
      message: 'Game data uploaded successfully'
    });
  } catch (error) {
    console.error('Error processing upload:', error);
    return NextResponse.json(
      { error: 'Failed to process game data' },
      { status: 500 }
    );
  }
}
