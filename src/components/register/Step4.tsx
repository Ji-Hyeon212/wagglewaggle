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

  return (
    <div className="p-6">
      <h2 className="text-4xl font-black mb-4 text-center">다 끝났어요.</h2>
      <h2 className="text-4xl font-black mb-12 text-center">마지막으로 숙소 위치를 입력해주세요!</h2>

      <div className="mb-8">
        <input
          type="text"
          placeholder="주소를 입력하세요."
          className="w-full p-4 text-lg border border-gray-300 rounded-lg"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
        <div className="mt-4">
          {/* Placeholder for the map component */}
          <div className="w-full h-64 bg-gray-200 rounded-lg">
            {/* You can replace this with an actual map component like Google Maps or Kakao Maps */}
            <span className="text-gray-500 flex items-center justify-center h-full">Map Component Placeholder</span>
          </div>
        </div>
      </div>

      <div className="flex justify-center space-x-2 mx-150">
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
