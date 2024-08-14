import React, { useState } from 'react';
import {useRouter} from "next/navigation";

const Step5 = () => {
    const router = useRouter()

  return (
    <div className="p-6 flex flex-col items-center">
        <h2 className="text-4xl font-black mb-12 text-center">숙소 등록이 완료되었습니다!!</h2>

        <button className="bg-customColor text-black font-bold p-3 rounded-lg w-1/2"
                onClick={() =>router.push('/')}>
            메인으로 돌아가기
        </button>
    </div>
  );
};

export default Step5;
