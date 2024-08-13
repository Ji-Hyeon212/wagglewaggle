import React, { useState } from 'react';
import { StepProps } from '../../app/types/types';

const Step2: React.FC<StepProps> = ({ setFormData, formData, prevStep, nextStep }) => {
  const [description, setDescription] = useState<string>(formData.description || '');
  const [photos, setPhotos] = useState<File[]>([]);
  const [preview, setPreview] = useState<string[]>([]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const selectedFiles = Array.from(e.target.files); // FileList를 File[]로 변환
      setPhotos((prevPhotos) => [...prevPhotos, ...selectedFiles]);

      const selectedPreviews = selectedFiles.map((file) => URL.createObjectURL(file));
      setPreview((prevPreview) => [...prevPreview, ...selectedPreviews]);

      // Revoke object URLs after component unmount
      return () => selectedPreviews.forEach((file) => URL.revokeObjectURL(file));
    }
  };

  const handleRemoveImage = (index: number) => {
    setPhotos((prevPhotos) => prevPhotos.filter((_, i) => i !== index));
    setPreview((prevPreview) => prevPreview.filter((_, i) => i !== index));
  };

  const handleNext = () => {
    setFormData({
      ...formData,
      description,
      photos,
    });
    if (nextStep) {
      nextStep();
    }
  };

  return (
    <div className="p-6">
      <h2 className="text-4xl font-black mb-12 text-center">숙소의 기본정보를 이어서 입력해주세요</h2>

      <div className="mb-4 flex flex-col items-center">
        <label className="block text-xl font-bold mb-2 text-center">
          <span className="inline-block rounded-md bg-orange-300 bg-opacity-50 px-2">
            숙소를 잘 나타내는 사진을 등록해주세요
          </span>
        </label>
        <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center relative w-full max-w-lg">
          <input
            type="file"
            multiple
            onChange={handleFileChange}
            className="absolute inset-0 opacity-0 cursor-pointer"
          />
          <div className="flex flex-col items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-12 h-12 text-gray-500"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 16.5v-9m-4.5 4.5H9m6 0h1.5m-7.5 4.5h6M4.5 3h15a2.25 2.25 0 012.25 2.25v13.5A2.25 2.25 0 0119.5 21H4.5A2.25 2.25 0 012.25 18.75V5.25A2.25 2.25 0 014.5 3z"
              />
            </svg>
            <p className="text-gray-500 mt-2">여기에 파일을 끌어다 놓거나 클릭하여 파일을 선택하세요</p>
          </div>
        </div>
        <div className="mt-4 flex flex-wrap gap-4">
          {preview.map((src, index) => (
            <div key={index} className="relative">
              <img src={src} alt={`Preview ${index}`} className="w-32 h-32 object-cover rounded-md" />
              <button
                onClick={() => handleRemoveImage(index)}
                className="absolute top-0 right-0 bg-red-500 text-white rounded-full px-2.5 py-1"
              >
                X
              </button>

            </div>
          ))}
        </div>
      </div>

      <div className="mb-4 flex flex-col items-center">
        <label className="block text-xl font-bold mb-2 text-center">
          <span className="inline-block rounded-md bg-orange-300 bg-opacity-50 px-2">
            숙소를 간단하게 소개해주세요
          </span>
        </label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="mt-2 p-4 w-full max-w-lg h-64 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent transition-shadow shadow-md placeholder-gray-400 resize-none"
          placeholder="어떤 내용이든 자유롭게 작성해주세요 :)"
        ></textarea>
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

export default Step2;
