'use client';

import React, { useState } from 'react';
import { MahjongBoard } from '@/components/MahjongBoard';
import { MahjongGameData } from '@/types/mahjong';

const sampleData: MahjongGameData = {
  "rivers": [
    {
      "area": "RT",
      "tiles": [
        "六筒",
        "七筒",
        "東"
      ]
    },
    {
      "area": "TOP",
      "tiles": [
        "三萬",
        "三萬",
        "三萬"
      ]
    },
    {
      "area": "BTM",
      "tiles": [
        "八索",
        "西",
        "六索",
        "白"
      ]
    },
    {
      "area": "LT",
      "tiles": [
        "一索",
        "一索",
        "一索"
      ]
    }
  ],
  "melds": [
    {
      "area": "M-RT",
      "tiles": []
    },
    {
      "area": "M-TOP",
      "tiles": []
    },
    {
      "area": "M-BTM",
      "tiles": [
        "發"
      ]
    },
    {
      "area": "M-LT",
      "tiles": []
    }
  ],
  "dora": [
    "白",
    "五萬",
    "西",
    "八筒"
  ],
  "rivers_ex": [],
  "melds_ex": [],
  "imageSize": 1536,
  "hand": ["一萬", "二萬", "三萬", "四萬", "五萬", "二筒", "三筒", "四筒", "二索", "三索", "四索", "東", "東"]
};

export default function Home() {
  const [gameData, setGameData] = useState<MahjongGameData>(sampleData);
  const [jsonInput, setJsonInput] = useState('');
  const [showInput, setShowInput] = useState(false);

  const handleLoadJson = () => {
    try {
      const parsed = JSON.parse(jsonInput);
      setGameData(parsed);
      setShowInput(false);
      setJsonInput('');
    } catch (error) {
      alert('Invalid JSON format');
    }
  };

  const handleUploadToApi = async () => {
    try {
      const response = await fetch('/api/upload', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(gameData),
      });

      const result = await response.json();

      if (result.success) {
        alert(`Game uploaded successfully! Game ID: ${result.gameId}`);
      } else {
        alert('Failed to upload game data');
      }
    } catch (error) {
      alert('Error uploading game data');
    }
  };

  return (
    <div className="min-h-screen">
      {/* Control Panel */}
      <div className="fixed top-4 right-4 z-10 flex gap-2">
        <button
          onClick={() => setShowInput(!showInput)}
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
        >
          {showInput ? 'Hide Input' : 'Load JSON'}
        </button>
        <button
          onClick={handleUploadToApi}
          className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition"
        >
          Upload to API
        </button>
      </div>

      {/* JSON Input Modal */}
      {showInput && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-20 p-4">
          <div className="bg-white rounded-lg p-6 max-w-2xl w-full">
            <h2 className="text-xl font-bold mb-4 text-gray-800">Load Game Data</h2>
            <textarea
              value={jsonInput}
              onChange={(e) => setJsonInput(e.target.value)}
              className="w-full h-96 p-4 border border-gray-300 rounded font-mono text-sm text-gray-800"
              placeholder="Paste your JSON data here..."
            />
            <div className="flex gap-2 mt-4">
              <button
                onClick={handleLoadJson}
                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
              >
                Load
              </button>
              <button
                onClick={() => setShowInput(false)}
                className="px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700 transition"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Game Board */}
      <MahjongBoard data={gameData} />
    </div>
  );
}
