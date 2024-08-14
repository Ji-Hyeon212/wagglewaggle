import React, { useState } from 'react';
import { StepProps } from '../../app/types/types';

const Step1: React.FC<StepProps> = ({ setFormData, formData, nextStep }) => {
  const [maxOccupancy, setMaxOccupancy] = useState<number>(formData.maxOccupancy ? Number(formData.maxOccupancy) : 1);
  const [bedCount, setBedCount] = useState<number>(formData.bedCount || 1);
  const [phone, setPhone] = useState<string>(formData.phone || '');

  const handleNext = () => {
    setFormData({
      ...formData,
      maxOccupancy,
      bedCount,
      phone
    });
    if (nextStep) {
      nextStep();
    }
  };

  const handleIncrement = () => {
    setMaxOccupancy(maxOccupancy + 1);
  };

  const handleDecrement = () => {
    if (maxOccupancy > 1) {
      setMaxOccupancy(maxOccupancy - 1);
    }
  };

  const playAudio = (audioId: string) => {
    const audioElement = document.getElementById(audioId) as HTMLAudioElement;
    if (audioElement) {
      audioElement.play();
    }
  };

  return (
    <div className="p-6 flex flex-col items-center">
      <h2 className="text-7xl font-bold mb-12 text-center">숙소의 기본정보를 입력해주세요</h2>
      <div className="w-3/4 mb-4">
        <label className="block text-4xl font-bold mb-2 text-center">
          <span className="inline-block rounded-md bg-orange-300 bg-opacity-50 px-2">
            숙박 가능한 인원 수를 입력해주세요
          </span>
          <button onClick={() => playAudio('maxOccupancyAudio')} className="ml-4">
            <img src="/images/register/audio-icon.png" alt="Play audio" className="w-6 h-6" />
          </button>
        </label>
        <div className="flex justify-between items-center bg-gray-100 p-2 rounded w-full max-w-sm mx-auto">
          <span className="text-2xl font-bold">최대 인원</span>
          <div className="flex items-center">
            <button onClick={handleDecrement} className="p-2">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </button>
            <span className="text-3xl mx-4">{maxOccupancy === Infinity ? '∞' : maxOccupancy}</span>
            <button onClick={handleIncrement} className="p-2">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </button>
          </div>
        </div>
        <audio id="maxOccupancyAudio" src="audio/step1-1.mp3"></audio>
      </div>
      <br />
      <div className="w-3/4 mb-4">
        <label className="block text-4xl font-bold mb-2 text-center">
          <span className="inline-block rounded-md bg-orange-300 bg-opacity-50 px-2">
            구비되어 있는 침구 수를 입력해주세요
          </span>
          <button onClick={() => playAudio('bedCountAudio')} className="ml-4">
            <img src="/images/register/audio-icon.png" alt="Play audio" className="w-6 h-6" />
          </button>
        </label>
        <div className="flex justify-between items-center bg-gray-100 p-2 rounded w-full max-w-sm mx-auto">
          <span className="text-2xl font-bold">침구 갯수</span>
          <div className="flex items-center">
            <button onClick={() => setBedCount(bedCount > 0 ? bedCount - 1 : 0)} className="p-2">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </button>
            <span className="text-3xl mx-4">{bedCount}</span>
            <button onClick={() => setBedCount(bedCount + 1)} className="p-2">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </button>
          </div>
        </div>
        <audio id="bedCountAudio" src="audio/step1-2.mp3"></audio>
      </div>
      <br />
      <div className="w-3/4 mb-6">
        <label className="block text-4xl font-bold mb-2 text-center">
          <span className="inline-block rounded-md bg-orange-300 bg-opacity-50 px-2">
            운영자분의 전화번호를 입력해주세요
          </span>
          <button onClick={() => playAudio('phoneAudio')} className="ml-4">
            <img src="/images/register/audio-icon.png" alt="Play audio" className="w-6 h-6" />
          </button>
        </label>
        <div className="flex justify-center">
          <input
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder='전화번호를 입력해주세요. (ex. 010-1234-5678)'
            className="text-center p-2 border border-gray-300 rounded w-1/2 text-2xl"
          />
        </div>
        <audio id="phoneAudio" src="audio/step1-3.mp3"></audio>
      </div>
      <br />
      <button onClick={handleNext} className="bg-customColor text-3xl text-black font-bold p-3 rounded-lg w-1/2">
        다음
      </button>
    </div>
  );
};

export default Step1;
