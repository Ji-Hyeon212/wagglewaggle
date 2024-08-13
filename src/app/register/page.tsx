//숙소 등록하기
"use client"; 

import React, { useState } from 'react';
import Header from '../../components/common/Header';
import Step1 from '../../components/register/Step1';
import Step2 from '../../components/register/Step2';
import Step3 from '../../components/register/Step3';
import Step4 from '../../components/register/Step4';
import ProgressBar from '../../components/register/ProgressBar';
import { FormDataType } from '../types/types';


const RegisterPage: React.FC = () => {
  const [step, setStep] = useState<number>(1);
  const [formData, setFormData] = useState<FormDataType>({});

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);
  const submitForm = () => {
    console.log('Form data submitted:', formData);
    //백엔드로 전달
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return <Step1 setFormData={setFormData} formData={formData} nextStep={nextStep} />;
      case 2:
        return <Step2 setFormData={setFormData} formData={formData} nextStep={nextStep} prevStep={prevStep} />;
      case 3:
        return <Step3 setFormData={setFormData} formData={formData} nextStep={nextStep} prevStep={prevStep} />;
      case 4:
        return <Step4 setFormData={setFormData} formData={formData} prevStep={prevStep} submitForm={submitForm} />;
      default:
        return <Step1 setFormData={setFormData} formData={formData} nextStep={nextStep} />;
    }
  };

  return (
    <div className='bg-white'>
        <Header/>
        <ProgressBar step={step} totalSteps={4} />
      {renderStep()}
    </div>
  );
};

export default RegisterPage;
