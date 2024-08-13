import React from 'react';

interface ProgressBarProps {
  step: number;
  totalSteps: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ step, totalSteps }) => {
  const sections = Array.from({ length: totalSteps }, (_, index) => index + 1);

  return (
    <div className='mx-4'>
    <div style={{ marginBottom: '20px', display: 'flex', justifyContent: 'space-around', width: '100%' }}>
      {sections.map((section) => (
        <div
          key={section}
          style={{
            backgroundColor: section <= step ? '#F69E4D' : '#e0e0e0',
            height: '6px',
            width: `${(100 / totalSteps) - 1}%`, // 섹션 사이에 간격을 주기 위해 너비를 조정합니다.
            borderRadius: '5px',
            transition: 'background-color 0.3s ease-in-out',
            marginRight: section < totalSteps ? '4px' : '0', // 마지막 섹션 제외한 모든 섹션에 간격 추가
          }}
        />
      ))}
    </div>
    </div>
  );
};

export default ProgressBar;
