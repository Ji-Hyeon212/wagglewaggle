export interface FormDataType {
  maxOccupancy?: number;
  bedCount?: number;
  phone?: string;
  location?: string;
  startDate?: Date | null | undefined; 
  endDate?: Date | null | undefined;   
  checkInTime?: string;
  checkOutTime?: string;
  price?: number | string;
  description?: string;
  photos?: File[] | null;
}

export interface StepProps {
  setFormData: (data: FormDataType) => void;
  formData: FormDataType;
  nextStep?: () => void;
  prevStep?: () => void;
  submitForm?: () => void;
}
