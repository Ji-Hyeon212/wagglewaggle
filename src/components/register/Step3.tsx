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

  const playAudio = (audioId: string) => {
    const audioElement = document.getElementById(audioId) as HTMLAudioElement;
    if (audioElement) {
      audioElement.play();
    }
  };

  return (
    <div className="p-6">
      <h2 className="text-7xl font-black mb-12 text-center">숙소를 운영할 날짜와 가격을 입력해주세요.</h2>

      <div className="mb-12 w-1/2 mx-auto">
        <label className="block text-4xl font-bold mb-2 text-center">
          <span className="inline-block rounded-md bg-orange-300 bg-opacity-50 px-2">
            운영 날짜를 골라주세요
          </span>
          <button onClick={() => playAudio('step3-1')} className="ml-4">
            <img src="/images/register/audio-icon.png" alt="Play audio" className="w-6 h-6" />
          </button>
        </label>
        <div className="mt-2 p-2 border text-3xl border-gray-300 rounded text-center">
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
        <audio id="step3-1" src="audio/step3-1.mp3"></audio>
      </div>
      <div className="mb-12 w-1/2 mx-auto">
        <label className="block text-4xl font-bold mb-2 text-center">
          <span className="inline-block rounded-md bg-orange-300 bg-opacity-50 px-2">
            손님받는 시간을 설정해주세요
          </span>
          <button onClick={() => playAudio('step3-2')} className="ml-4">
            <img src="/images/register/audio-icon.png" alt="Play audio" className="w-6 h-6" />
          </button>
        </label>
        <div className="flex space-x-2">
          <div className="w-1/2">
            <label className="block text-xl font-medium mb-1 text-center">
              입실 시간을 골라주세요
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

          <div className="w-1/2">
            <label className="block text-xl font-medium mb-1 text-center">
              퇴실 시간을 설정해주세요
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
        </div>
        <audio id="step3-2" src="audio/step3-2.mp3"></audio>
      </div>



      <div className="mb-12 w-1/2 mx-auto">
        <label className="block text-4xl font-bold mb-2 text-center">
          <span className="inline-block rounded-md bg-orange-300 bg-opacity-50 px-2">
            하루 숙박비를 입력해주세요
          </span>
          <button onClick={() => playAudio('step3-3')} className="ml-4">
            <img src="/images/register/audio-icon.png" alt="Play audio" className="w-6 h-6" />
          </button>
        </label>
        <input
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          className="mt-2 p-2 border border-gray-300 rounded w-full"
          placeholder="예시) 20,000"
        />
        <audio id="step3-3" src="audio/step3-3.mp3"></audio>
      </div>

      <div className="flex justify-center space-x-2 mx-150 text-3xl">
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
