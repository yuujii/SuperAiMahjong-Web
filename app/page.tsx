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
  "rivers_ex": [
    {
      "area": "RT",
      "tiles_ex": [
        {
          "label": "六筒",
          "score": 0.8899999856948853,
          "classId": -1,
          "rect": {
            "serializedVersion": "2",
            "x": 842.1805419921875,
            "y": 865.0010375976563,
            "width": 53.42486572265625,
            "height": 51.78765869140625
          },
          "corners": [
            {
              "x": 842.1805419921875,
              "y": 865.0010375976563
            },
            {
              "x": 895.6054077148438,
              "y": 865.0010375976563
            },
            {
              "x": 895.6054077148438,
              "y": 916.7886962890625
            },
            {
              "x": 842.1805419921875,
              "y": 916.7886962890625
            }
          ]
        },
        {
          "label": "七筒",
          "score": 0.8999999761581421,
          "classId": -1,
          "rect": {
            "serializedVersion": "2",
            "x": 842.0396118164063,
            "y": 812.6854858398438,
            "width": 52.80419921875,
            "height": 52.03955078125
          },
          "corners": [
            {
              "x": 842.0396118164063,
              "y": 812.6854858398438
            },
            {
              "x": 894.8438110351563,
              "y": 812.6854858398438
            },
            {
              "x": 894.8438110351563,
              "y": 864.7250366210938
            },
            {
              "x": 842.0396118164063,
              "y": 864.7250366210938
            }
          ]
        },
        {
          "label": "東",
          "score": 0.8899999856948853,
          "classId": -1,
          "rect": {
            "serializedVersion": "2",
            "x": 839.5769653320313,
            "y": 761.6608276367188,
            "width": 52.1507568359375,
            "height": 50.400634765625
          },
          "corners": [
            {
              "x": 839.5769653320313,
              "y": 761.6608276367188
            },
            {
              "x": 891.7277221679688,
              "y": 761.6608276367188
            },
            {
              "x": 891.7277221679688,
              "y": 812.0614624023438
            },
            {
              "x": 839.5769653320313,
              "y": 812.0614624023438
            }
          ]
        }
      ]
    },
    {
      "area": "TOP",
      "tiles_ex": [
        {
          "label": "三萬",
          "score": 0.8999999761581421,
          "classId": -1,
          "rect": {
            "serializedVersion": "2",
            "x": 685.14697265625,
            "y": 471.9787292480469,
            "width": 39.66387939453125,
            "height": 71.79364013671875
          },
          "corners": [
            {
              "x": 685.14697265625,
              "y": 471.9787292480469
            },
            {
              "x": 724.8108520507813,
              "y": 471.9787292480469
            },
            {
              "x": 724.8108520507813,
              "y": 543.7723388671875
            },
            {
              "x": 685.14697265625,
              "y": 543.7723388671875
            }
          ]
        },
        {
          "label": "三萬",
          "score": 0.8999999761581421,
          "classId": -1,
          "rect": {
            "serializedVersion": "2",
            "x": 645.283935546875,
            "y": 472.6087646484375,
            "width": 38.7978515625,
            "height": 72.328857421875
          },
          "corners": [
            {
              "x": 645.283935546875,
              "y": 472.6087646484375
            },
            {
              "x": 684.081787109375,
              "y": 472.6087646484375
            },
            {
              "x": 684.081787109375,
              "y": 544.9376220703125
            },
            {
              "x": 645.283935546875,
              "y": 544.9376220703125
            }
          ]
        },
        {
          "label": "三萬",
          "score": 0.8799999952316284,
          "classId": -1,
          "rect": {
            "serializedVersion": "2",
            "x": 604.52001953125,
            "y": 469.6689147949219,
            "width": 40.18695068359375,
            "height": 73.8927001953125
          },
          "corners": [
            {
              "x": 604.52001953125,
              "y": 469.6689147949219
            },
            {
              "x": 644.7069702148438,
              "y": 469.6689147949219
            },
            {
              "x": 644.7069702148438,
              "y": 543.5616455078125
            },
            {
              "x": 604.52001953125,
              "y": 543.5616455078125
            }
          ]
        }
      ]
    },
    {
      "area": "BTM",
      "tiles_ex": [
        {
          "label": "八索",
          "score": 0.8600000143051148,
          "classId": -1,
          "rect": {
            "serializedVersion": "2",
            "x": 597.5650634765625,
            "y": 995.4360961914063,
            "width": 39.90313720703125,
            "height": 70.3978271484375
          },
          "corners": [
            {
              "x": 597.5650634765625,
              "y": 995.4360961914063
            },
            {
              "x": 637.4682006835938,
              "y": 995.4360961914063
            },
            {
              "x": 637.4682006835938,
              "y": 1065.833984375
            },
            {
              "x": 597.5650634765625,
              "y": 1065.833984375
            }
          ]
        },
        {
          "label": "西",
          "score": 0.8600000143051148,
          "classId": -1,
          "rect": {
            "serializedVersion": "2",
            "x": 636.5425415039063,
            "y": 995.1088256835938,
            "width": 40.753665924072269,
            "height": 73.26959228515625
          },
          "corners": [
            {
              "x": 636.5425415039063,
              "y": 995.1088256835938
            },
            {
              "x": 677.2962036132813,
              "y": 995.1088256835938
            },
            {
              "x": 677.2962036132813,
              "y": 1068.37841796875
            },
            {
              "x": 636.5425415039063,
              "y": 1068.37841796875
            }
          ]
        },
        {
          "label": "六索",
          "score": 0.8799999952316284,
          "classId": -1,
          "rect": {
            "serializedVersion": "2",
            "x": 677.68310546875,
            "y": 994.7741088867188,
            "width": 38.70904541015625,
            "height": 70.57064819335938
          },
          "corners": [
            {
              "x": 677.68310546875,
              "y": 994.7741088867188
            },
            {
              "x": 716.3921508789063,
              "y": 994.7741088867188
            },
            {
              "x": 716.3921508789063,
              "y": 1065.3447265625
            },
            {
              "x": 677.68310546875,
              "y": 1065.3447265625
            }
          ]
        },
        {
          "label": "白",
          "score": 0.8199999928474426,
          "classId": -1,
          "rect": {
            "serializedVersion": "2",
            "x": 715.6824951171875,
            "y": 995.3743896484375,
            "width": 39.2779541015625,
            "height": 72.00381469726563
          },
          "corners": [
            {
              "x": 715.6824951171875,
              "y": 995.3743896484375
            },
            {
              "x": 754.96044921875,
              "y": 995.3743896484375
            },
            {
              "x": 754.96044921875,
              "y": 1067.378173828125
            },
            {
              "x": 715.6824951171875,
              "y": 1067.378173828125
            }
          ]
        }
      ]
    },
    {
      "area": "LT",
      "tiles_ex": [
        {
          "label": "一索",
          "score": 0.8899999856948853,
          "classId": -1,
          "rect": {
            "serializedVersion": "2",
            "x": 544.197509765625,
            "y": 606.6522827148438,
            "width": 53.58514404296875,
            "height": 53.12261962890625
          },
          "corners": [
            {
              "x": 544.197509765625,
              "y": 606.6522827148438
            },
            {
              "x": 597.7826538085938,
              "y": 606.6522827148438
            },
            {
              "x": 597.7826538085938,
              "y": 659.77490234375
            },
            {
              "x": 544.197509765625,
              "y": 659.77490234375
            }
          ]
        },
        {
          "label": "一索",
          "score": 0.9300000071525574,
          "classId": -1,
          "rect": {
            "serializedVersion": "2",
            "x": 541.0595703125,
            "y": 659.8961791992188,
            "width": 53.5972900390625,
            "height": 52.75616455078125
          },
          "corners": [
            {
              "x": 541.0595703125,
              "y": 659.8961791992188
            },
            {
              "x": 594.6568603515625,
              "y": 659.8961791992188
            },
            {
              "x": 594.6568603515625,
              "y": 712.65234375
            },
            {
              "x": 541.0595703125,
              "y": 712.65234375
            }
          ]
        },
        {
          "label": "一索",
          "score": 0.8999999761581421,
          "classId": -1,
          "rect": {
            "serializedVersion": "2",
            "x": 540.447021484375,
            "y": 712.3833618164063,
            "width": 54.12628173828125,
            "height": 52.61224365234375
          },
          "corners": [
            {
              "x": 540.447021484375,
              "y": 712.3833618164063
            },
            {
              "x": 594.5733032226563,
              "y": 712.3833618164063
            },
            {
              "x": 594.5733032226563,
              "y": 764.99560546875
            },
            {
              "x": 540.447021484375,
              "y": 764.99560546875
            }
          ]
        }
      ]
    }
  ],
  "melds_ex": [
    {
      "area": "M-RT",
      "tiles_ex": []
    },
    {
      "area": "M-TOP",
      "tiles_ex": []
    },
    {
      "area": "M-BTM",
      "tiles_ex": [
        {
          "label": "發",
          "score": 0.8799999952316284,
          "classId": -1,
          "rect": {
            "serializedVersion": "2",
            "x": 1120.555908203125,
            "y": 1466.805419921875,
            "width": 48.2908935546875,
            "height": 69.05288696289063
          },
          "corners": [
            {
              "x": 1120.555908203125,
              "y": 1466.805419921875
            },
            {
              "x": 1168.8468017578125,
              "y": 1466.805419921875
            },
            {
              "x": 1168.8468017578125,
              "y": 1535.8582763671875
            },
            {
              "x": 1120.555908203125,
              "y": 1535.8582763671875
            }
          ]
        }
      ]
    },
    {
      "area": "M-LT",
      "tiles_ex": []
    }
  ],
  "imageSize": 1536,
  "hand": ["一萬", "二萬", "三萬", "四萬", "五萬", "二筒", "三筒", "四筒", "二索", "三索", "四索", "東", "東"]
};

export default function Home() {
  const [gameData, setGameData] = useState<MahjongGameData>(sampleData);
  const [jsonInput, setJsonInput] = useState('');
  const [showInput, setShowInput] = useState(false);

  const handleShowInput = () => {
    setJsonInput(JSON.stringify(gameData, null, 2));
    setShowInput(true);
  };

  const handleLoadJson = () => {
    try {
      const parsed = JSON.parse(jsonInput);
      setGameData(parsed);
      setShowInput(false);
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
          onClick={handleShowInput}
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
        >
          Edit JSON
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
