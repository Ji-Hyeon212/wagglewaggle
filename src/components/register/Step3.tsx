import React, { useState } from 'react';
import { StepProps } from '../../app/types/types';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const Step3: React.FC<StepProps> = ({ setFormData, formData, nextStep, prevStep }) => {
  const [startDate, setStartDate] = useState<Date | undefined>(formData.startDate ?? undefined);
  const [endDate, setEndDate] = useState<Date | undefined>(formData.endDate ?? undefined);
  const [checkInTime, setCheckInTime] = useState(formData.checkInTime || '14:00');
  const [checkOutTime, setCheckOutTime] = useState(formData.checkOutTime || '11:00');
  const [price, setPrice] = useState(formData.price || '');

  const handleNext = () => {
    setFormData({
      ...formData,
      startDate,
      endDate,
      checkInTime,
      checkOutTime,
      price
    });
    if (nextStep) {
      nextStep();
    }
  };

  return (
    <div className="p-6">
      <h2 className="text-4xl font-black mb-12 text-center">숙소를 운영할 날짜와 가격을 입력해주세요.</h2>

      <div className="mb-4 w-1/2 mx-auto">
        <label className="block text-xl font-bold mb-2 text-center">
          <span className="inline-block rounded-md bg-orange-300 bg-opacity-50 px-2">
            운영 날짜를 골라주세요
          </span>
        </label>
        <div className="mt-2 p-2 border border-gray-300 rounded">
          <DatePicker
            selected={startDate}
            onChange={(dates: [Date | null, Date | null]) => {
              const [start, end] = dates;
              setStartDate(start ?? undefined);
              setEndDate(end ?? undefined);
            }}
            startDate={startDate}
            endDate={endDate}
            selectsRange
            dateFormat="yyyy-MM-dd"
            placeholderText="2024-08-14 ~ 2024-08-15"
            className="w-full"
            isClearable
          />
        </div>
      </div>

      <div className="mb-4 w-1/2 mx-auto">
        <label className="block text-xl font-bold mb-2 text-center">
          <span className="inline-block rounded-md bg-orange-300 bg-opacity-50 px-2">
            체크인 시간을 입력해주세요
          </span>
        </label>
        <select
          value={checkInTime}
          onChange={(e) => setCheckInTime(e.target.value)}
          className="mt-2 p-2 border border-gray-300 rounded w-full"
        >
          {Array.from({ length: 24 }).map((_, hour) => (
            <option key={hour} value={`${hour}:00`}>{`${hour}:00`}</option>
          ))}
        </select>
      </div>

      <div className="mb-4 w-1/2 mx-auto">
        <label className="block text-xl font-bold mb-2 text-center">
          <span className="inline-block rounded-md bg-orange-300 bg-opacity-50 px-2">
            체크아웃 시간을 입력해주세요
          </span>
        </label>
        <select
          value={checkOutTime}
          onChange={(e) => setCheckOutTime(e.target.value)}
          className="mt-2 p-2 border border-gray-300 rounded w-full"
        >
          {Array.from({ length: 24 }).map((_, hour) => (
            <option key={hour} value={`${hour}:00`}>{`${hour}:00`}</option>
          ))}
        </select>
      </div>

      <div className="mb-12 w-1/2 mx-auto">
        <label className="block text-xl font-bold mb-2 text-center">
          <span className="inline-block rounded-md bg-orange-300 bg-opacity-50 px-2">
            하루 숙박비를 입력해주세요
          </span>
        </label>
        <input
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          className="mt-2 p-2 border border-gray-300 rounded w-full"
          placeholder="20000"
        />
      </div>

      <div className="flex justify-center space-x-2 mx-150">
        <button onClick={prevStep} className="bg-gray-300 text-black font-bold p-3 rounded-lg w-1/4">
          뒤로
        </button>
        <button onClick={handleNext} className="bg-customColor text-black font-bold p-3 rounded-lg w-1/4">
          다음
        </button>
      </div>
    </div>
  );
};

export default Step3;
