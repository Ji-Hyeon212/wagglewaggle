import React, { useState } from 'react';
import { StepProps } from '../../types/types';

const Step1: React.FC<StepProps> = ({ setFormData, formData, nextStep }) => {
  const [maxOccupancy, setMaxOccupancy] = useState<number>(formData.maxOccupancy ? Number(formData.maxOccupancy) : 0);
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

  return (
    <div className="p-6 flex flex-col items-center">
      <h2 className="text-xl font-bold mb-6 text-center">숙소의 기본정보를 입력해주세요.</h2>

      <div className="w-full mb-4">
        <label className="block text-sm text-gray-700 mb-2 text-center">숙박 가능한 인원은 몇 명인가요?</label>
        <div className="flex justify-center">
          <input
            type="number"
            value={maxOccupancy}
            onChange={(e) => setMaxOccupancy(Number(e.target.value))}
            className="text-center p-2 border border-gray-300 rounded w-1/2"
          />
        </div>
      </div>

      <div className="w-full mb-4">
        <label className="block text-sm text-gray-700 mb-2 text-center">구비되어 있는 침구는 얼마나 되나요?</label>
        <div className="flex justify-center">
          <input
            type="number"
            value={bedCount}
            onChange={(e) => setBedCount(Number(e.target.value))}
            className="text-center p-2 border border-gray-300 rounded w-1/2"
          />
        </div>
      </div>

      <div className="w-full mb-6">
        <label className="block text-sm text-gray-700 mb-2 text-center">운영자분의 전화번호를 알려주세요!</label>
        <div className="flex justify-center">
          <input
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="text-center p-2 border border-gray-300 rounded w-1/2"
          />
        </div>
      </div>

      <button onClick={handleNext} className="bg-orange-500 text-white p-3 rounded-full w-full max-w-xs">
        다음
      </button>
    </div>
  );
};

export default Step1;
