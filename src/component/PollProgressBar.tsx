import { useState } from "react";

type PollBarProps = {
  label: string;
  percent: number;
  color: string;
  hovered: string | null;
  setHovered: (label: string | null) => void;
  textColor?: string; // Add this line
};

const PollBar: React.FC<PollBarProps> = ({
  label,
  percent,
  color,
  hovered,
  setHovered,
  textColor = "white", // Default to white
}) => (
  <div
    className="w-full bg-white rounded-[16px] h-[48px] mb-2 relative cursor-pointer overflow-hidden border border-[#0000001A]"
    onMouseEnter={() => setHovered(label)}
    onMouseLeave={() => setHovered(null)}
  >
    {/* Voted percentage bar */}
    <div
      className={`h-[48px] flex items-center transition-all duration-300 pl-3`}
      style={{
        width: `${percent}%`,
        backgroundColor: color,
      }}
    >
      <span
        className={`font-700 text-sm flex items-center w-full`}
        style={{ color: textColor }} // Set text color here
      >
        {label}
        {hovered === label && (
          <div className="flex bg-white rounded-full h-6 w-8 ml-2 items-center justify-center m-auto">
            <svg
              className="w-5 h-5 text-black m-auto"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
        )}
        <span className="ml-auto pr-2">{percent}%</span>
      </span>
    </div>
    {/* Remaining percentage bar */}
    {percent < 100 && (
      <div
        className="absolute top-0 right-0 h-[48px] flex items-center pr-3 text-[#757575] font-500"
        style={{
          left: `${percent}%`,
          backgroundColor: "transparent",
          width: `${100 - percent}%`,
        }}
      >
        <span className="text-gray-700 font-500 text-sm ml-auto">
          {100 - percent}%
        </span>
      </div>
    )}
  </div>
);

const PollBarCompact = ({ yesVotes = 70, noVotes = 30 }) => {
  const total = yesVotes + noVotes;
  const yesPercent = Math.round((yesVotes / total) * 100);
  const noPercent = 100 - yesPercent;
  const [hovered, setHovered] = useState(null);

  return (
    <div className="w-full">
      <h2 className="text-lg font-700 mb-4">
        Would you like to get a new pole in discounted price?
      </h2>
      <PollBar
        label="Yes"
        percent={yesPercent}
        color="#F5207C"
        hovered={hovered}
        setHovered={setHovered}
        textColor="white"
      />
      <PollBar
        label="No"
        percent={noPercent}
        color="#E6E6E6"
        hovered={hovered}
        setHovered={setHovered}
        textColor="black" // Set text color to black for "No"
      />
    </div>
  );
};

export default PollBarCompact;
