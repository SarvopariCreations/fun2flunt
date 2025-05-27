import React from "react";

interface CardProps {
  image: string;
  label?: string;
  name: string;
  time: string;
  timeIcon?: string; // optional icon path
}

const Card: React.FC<CardProps> = ({
  image,
  label = "Beginner",
  name,
  time,
  timeIcon,
}) => (
  <div className="relative w-[100%] h-[180.83px] rounded-[6.95px] overflow-hidden">
    {/* Image */}
    <img src={image} alt={name} className="w-full h-full object-cover" />
    {/* Overlay */}
    <div
      className="absolute left-0 top-0 w-full h-full"
      style={{
        background:
          "linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.25) 49.18%, rgba(0,0,0,0.5) 100%)",
        borderRadius: "6.95px",
      }}
    />
    {/* Top Label */}
    <div
      className="experience-level-tag absolute left-0 top-[13.33px] w-[69px] h-[28.33px] flex flex-col items-start px-[10px] py-[6.67px] gap-[1.67px] bg-[rgba(0,0,0,0.2)] backdrop-blur-[3.33px] rounded-r-[16.67px] rounded-l-none z-10"
      style={{
        borderRadius: "0 16.95px 16.95px 0",
        backdropFilter: "blur(3.33333px)",
      }}
    >
      <div className="text-xs font-500 text-white">{label}</div>
    </div>
    {/* Bottom Info */}
    <div className="absolute bottom-3 left-0 w-full flex flex-col items-start px-3 z-10">
      <div className="text-white font-500 text-base">{name}</div>
      <div className="flex items-start gap-1 text-white text-xs mt-1">
        {timeIcon && <img src={timeIcon} alt="time" className="w-4 h-4" />}
        <span>{time}</span>
      </div>
    </div>
  </div>
);

export default Card;
