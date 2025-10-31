'use client';

import React from 'react';

interface GameControlsProps {
  currentStep: number;
  totalSteps: number;
  onStepChange: (step: number) => void;
  isPlaying: boolean;
  onPlayPause: () => void;
}

export const GameControls: React.FC<GameControlsProps> = ({
  currentStep,
  totalSteps,
  onStepChange,
  isPlaying,
  onPlayPause,
}) => {
  const handlePrevious = () => {
    if (currentStep > 0) {
      onStepChange(currentStep - 1);
    }
  };

  const handleNext = () => {
    if (currentStep < totalSteps - 1) {
      onStepChange(currentStep + 1);
    }
  };

  const handleFirst = () => {
    onStepChange(0);
  };

  const handleLast = () => {
    onStepChange(totalSteps - 1);
  };

  return (
    <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-20">
      <div className="bg-black/80 backdrop-blur-md rounded-lg p-4 shadow-2xl border border-white/20">
        <div className="flex flex-col gap-3">
          {/* Step indicator */}
          <div className="text-center text-white font-mono">
            <span className="text-lg font-bold">{currentStep}</span>
            <span className="text-sm text-white/60"> / {totalSteps - 1}</span>
          </div>

          {/* Slider */}
          <input
            type="range"
            min="0"
            max={totalSteps - 1}
            value={currentStep}
            onChange={(e) => onStepChange(parseInt(e.target.value))}
            className="w-80 h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer slider"
            style={{
              background: `linear-gradient(to right, #3b82f6 0%, #3b82f6 ${(currentStep / (totalSteps - 1)) * 100}%, #374151 ${(currentStep / (totalSteps - 1)) * 100}%, #374151 100%)`
            }}
          />

          {/* Control buttons */}
          <div className="flex gap-2 justify-center">
            <button
              onClick={handleFirst}
              disabled={currentStep === 0}
              className="px-3 py-2 bg-gray-700 text-white rounded hover:bg-gray-600 disabled:opacity-50 disabled:cursor-not-allowed transition"
              title="最初へ"
            >
              ⏮
            </button>
            <button
              onClick={handlePrevious}
              disabled={currentStep === 0}
              className="px-3 py-2 bg-gray-700 text-white rounded hover:bg-gray-600 disabled:opacity-50 disabled:cursor-not-allowed transition"
              title="前へ"
            >
              ◀
            </button>
            <button
              onClick={onPlayPause}
              className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition font-semibold"
              title={isPlaying ? '一時停止' : '再生'}
            >
              {isPlaying ? '⏸' : '▶'}
            </button>
            <button
              onClick={handleNext}
              disabled={currentStep === totalSteps - 1}
              className="px-3 py-2 bg-gray-700 text-white rounded hover:bg-gray-600 disabled:opacity-50 disabled:cursor-not-allowed transition"
              title="次へ"
            >
              ▶
            </button>
            <button
              onClick={handleLast}
              disabled={currentStep === totalSteps - 1}
              className="px-3 py-2 bg-gray-700 text-white rounded hover:bg-gray-600 disabled:opacity-50 disabled:cursor-not-allowed transition"
              title="最後へ"
            >
              ⏭
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
