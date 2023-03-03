import { useEffect, useRef } from "react";
import {
  CircularProgressbar,
  CircularProgressbarWithChildren,
  buildStyles
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";


interface CircularProgressBarProps {
  percentage: number;
}

const CircularProgressBar = ({ percentage }: CircularProgressBarProps) => {
  
  return (
    <div className="w-[70px] h-[70px] relative">
      <CircularProgressbar
        value={percentage}
        text={`${percentage}%`}
        background
        backgroundPadding={6}
        styles={buildStyles({
          backgroundColor: "#fff",
          textColor: "#000",
          pathColor: "#000",
          strokeLinecap: "round",
        })}
      />
    </div>
  );
};

export default CircularProgressBar;
