import React, { useState } from 'react';
import { StepProps } from '../../app/types/types';

const Step4: React.FC<StepProps> = ({ setFormData, formData, prevStep, submitForm }) => {
  const [location, setLocation] = useState('');

  const handleSubmit = () => {
    setFormData({
      ...formData,
      location,
    });
    if (submitForm) {
      submitForm();
    }
  };

  const playAudio = (audioId: string) => {
    const audioElement = document.getElementById(audioId) as HTMLAudioElement;
    if (audioElement) {
      audioElement.play();
    }
  };

  return (
    <div className="p-6">
      <h2 className="text-7xl font-black mb-4 text-center">다 끝났어요.</h2>
      <h2 className="text-7xl font-black mb-12 text-center">마지막으로 숙소 위치를 입력해주세요!</h2>
      <label className="block text-4xl font-bold mb-2 text-center">
          <span className="inline-block rounded-md bg-orange-300 bg-opacity-50 px-2">
            숙소의 정확한 주소를 알려주세요
          </span>
          <button onClick={() => playAudio('step4-1')} className="ml-4">
            <img src="/images/register/audio-icon.png" alt="Play audio" className="w-6 h-6" />
          </button>
        </label>
      <div className="mb-8">
        <input
          type="text"
          placeholder="주소를 입력하세요."
          className="w-full p-4 text-xl border border-gray-300 rounded-lg"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
        <div className="mt-4 flex justify-center">
            <img src="/images/register/map.png" alt="Map image" className='w-1/2 h-full'/>
        </div>
        <audio id="step4-1" src="audio/step4-1.mp3"></audio>
      </div>

      <div className="flex justify-center space-x-2 mx-150 text-3xl">
        <button onClick={prevStep} className="bg-gray-300 text-black font-bold p-3 rounded-lg w-1/4">
          이전
        </button>
        <button onClick={handleSubmit} className="bg-customColor text-black font-bold p-3 rounded-lg w-1/4">
          완료
        </button>
      </div>
    </div>
  );
};

export default Step4;
