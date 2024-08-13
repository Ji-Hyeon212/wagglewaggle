import React, { useState } from 'react';
import { StepProps } from '../../app/types/types';

  const Step2: React.FC<StepProps> = ({ setFormData, formData, nextStep, prevStep }) => {
  const [location, setLocation] = useState(formData.location || '');

  const handleNext = () => {
    setFormData({
      ...formData,
      location
    });
    if (nextStep) {
        nextStep();
      }
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">숙소의 위치를 입력해주세요!</h2>

      <div className="mb-4">
        <label className="block text-gray-700">주소를 입력하세요.</label>
        <input
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="mt-2 p-2 border border-gray-300 rounded w-full"
        />
      </div>

      <div className="flex justify-between">
        <button onClick={prevStep} className="bg-gray-300 text-black p-2 rounded">
          이전
        </button>
        <button onClick={handleNext} className="bg-orange-500 text-white p-2 rounded">
          다음
        </button>
      </div>
    </div>
  );
};

export default Step2;
