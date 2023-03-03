import { useEffect, useState } from 'react';

interface ProgressBarProps {
  progress: number;
  color: string;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ progress, color }) => {
 if(progress>100){
    progress = 100
 }
  
  return (
    <div className={`w-full h-[9px] `+ color + "/20"}>
      <div
        className={`h-full `+ color}
        style={{ width: `${progress}%` }}
      ></div>
    </div>
  );
};

export default ProgressBar;
