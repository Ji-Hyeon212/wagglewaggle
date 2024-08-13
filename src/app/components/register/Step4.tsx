import React, { useState } from 'react';
import { StepProps } from '../../types/types';

const Step4: React.FC<StepProps> = ({ setFormData, formData, prevStep, submitForm }) => {
  const [description, setDescription] = useState<string>(formData.description || '');
  const [photos, setPhotos] = useState<FileList | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setPhotos(e.target.files);
    }
  };

  const handleSubmit = () => {
    // Convert FileList to an array if needed for further processing
    const photosArray = photos ? Array.from(photos) : null;

    setFormData({
      ...formData,
      description,
      photos,
    });
    if (submitForm) {
      submitForm();
    }
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">숙소의 기본정보를 입력해주세요.</h2>

      <div className="mb-4">
        <label className="block text-gray-700">숙소를 잘 나타내는 사진을 등록해주세요.</label>
        <input
          type="file"
          multiple
          onChange={handleFileChange}
          className="mt-2 p-2 border border-gray-300 rounded w-full"
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700">숙소를 간단하게 소개해주세요.</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="mt-2 p-2 border border-gray-300 rounded w-full"
          placeholder="어떤 내용이든 자유롭게 작성해주세요 :)"
        ></textarea>
      </div>

      <div className="flex justify-between">
        <button onClick={prevStep} className="bg-gray-300 text-black p-2 rounded">
          이전
        </button>
        <button onClick={handleSubmit} className="bg-orange-500 text-white p-2 rounded">
          완료
        </button>
      </div>
    </div>
  );
};

export default Step4;
