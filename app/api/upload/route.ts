import { NextRequest, NextResponse } from 'next/server';
import { isMahjongGameData } from '@/utils/validateGameData';

export async function POST(request: NextRequest) {
  try {
    const data: unknown = await request.json();

    // Validate basic structure
    if (!isMahjongGameData(data)) {
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
    if (error instanceof SyntaxError) {
      return NextResponse.json({ error: 'Invalid JSON format' }, { status: 400 });
    }
    console.error('Error processing upload:', error);
    return NextResponse.json(
      { error: 'Failed to process game data' },
      { status: 500 }
    );
  }
}
