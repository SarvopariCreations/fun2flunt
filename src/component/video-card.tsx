import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

interface CardProps {
  image: string;
  name: string;
  time: string;
  timeIcon?: string;
  playIcon: string;
  progress: number; // 0-100
  label?: string; // e.g., "Beginner", "Intermediate"
}

const VideoCard: React.FC<CardProps> = ({
  image,
  name,
  time,
  timeIcon,
  playIcon,
  progress,
  label,
}) => (
  <div className="relative w-full h-[190px] rounded-[6.95px] overflow-hidden">
    <img src={image} alt={name} className="w-full h-full object-cover" />
    <div
      className="experience-level-tag absolute left-0 top-[13.33px] w-[auto] h-[28.33px] flex flex-col items-start px-[10px] py-[6.67px] gap-[1.67px] bg-[rgba(0,0,0,0.2)] backdrop-blur-[3.33px] rounded-r-[16.67px] rounded-l-none z-10"
      style={{
        borderRadius: "0 16.95px 16.95px 0",
        backdropFilter: "blur(3.33333px)",
        zIndex: 1,
      }}
    >
      <div className="text-xs font-500 text-white">{label}</div>
    </div>
    <div
      className="absolute left-0 top-0 w-full h-full pointer-events-none"
      style={{
        background:
          "linear-gradient(0deg, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.0) 70%)",
        borderRadius: "6.95px",
      }}
    />

    <div className="absolute bottom-0 left-0 w-full flex justify-between items-end px-4 py-3 z-10">
      <div>
        <div className="text-white font-700 text-base">{name}</div>
        <div className="flex items-center gap-1 text-white text-xs mt-1">
          {timeIcon && (
            <img src={timeIcon} alt="time" className="w-[14px] h-[14px]" />
          )}
          <span className="font-500 text-[14px]">{time}</span>
        </div>
      </div>

      <div className="w-10 h-10 relative flex items-center justify-center">
        <CircularProgressbar
          value={progress}
          strokeWidth={5}
          background
          styles={buildStyles({
            pathColor: "#F5207C",
            trailColor: "#FFFFFFB2",
            backgroundColor: "#FFFFFFB2",
          })}
        />
        <img
          src={playIcon}
          alt="Play"
          className="absolute top-1/2 left-1/2 w-5 h-5 -translate-x-1/2 -translate-y-1/2"
        />
      </div>
    </div>
  </div>
);

export default VideoCard;
