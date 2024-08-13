import React, { useState } from 'react';
import { StepProps } from '../../app/types/types';

const Step3: React.FC<StepProps> = ({ setFormData, formData, nextStep, prevStep }) => {
  const [dates, setDates] = useState(formData.dates || '');
  const [price, setPrice] = useState(formData.price || '');

  const handleNext = () => {
    setFormData({
      ...formData,
      dates,
      price
    });
    if (nextStep) {
        nextStep();
      }
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">숙소를 운영할 날짜와 가격을 입력해주세요.</h2>

      <div className="mb-4">
        <label className="block text-gray-700">운영 날짜</label>
        <input
          type="text"
          value={dates}
          onChange={(e) => setDates(e.target.value)}
          className="mt-2 p-2 border border-gray-300 rounded w-full"
          placeholder="2024-08-14 ~ 2024-08-15"
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700">가격 (원)</label>
        <input
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          className="mt-2 p-2 border border-gray-300 rounded w-full"
          placeholder="20000"
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

export default Step3;
