// types.ts

export interface FormDataType {
  maxOccupancy?: number;
  bedCount?: number;
  phone?: string;
  location?: string;
  dates?: string;
  price?: number | string;
  description?: string;
  photos?: FileList | null;
}

export interface StepProps {
  setFormData: (data: FormDataType) => void;
  formData: FormDataType;
  nextStep?: () => void;
  prevStep?: () => void;
  submitForm?: () => void;
}
