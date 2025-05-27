import React from "react";
import fillHeart from "../assets/images/heart-fill.svg";
import blankHeart from "../assets/images/heart-blank.svg";

interface Skill {
  name: string;
  icon: string;
}

interface Equipment {
  name: string;
  icon: string;
}

interface Instructor {
  name: string;
  avatar: string;
}

interface VideoDetailModalProps {
  open: boolean;
  onClose: () => void;
  videoUrl: string;
  videoName: string;
  isFavorite: boolean;
  onFavorite: () => void;
  description: string;
  skills: Skill[];
  equipment: Equipment[];
  instructor: Instructor;
}

const VideoDetailModal: React.FC<VideoDetailModalProps> = ({
  open,
  onClose,
  videoUrl,
  videoName,
  isFavorite,
  onFavorite,
  description,
  skills,
  equipment,
  instructor,
}) => {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
      <div className="bg-white rounded-2xl shadow-lg w-[80%] max-w-full flex overflow-hidden p-[24px] gap-[24px]">
        {/* Left: Video */}
        <div className="w-1/1 flex items-start justify-center">
          <iframe
            src={videoUrl}
            title={videoName}
            allow="autoplay; encrypted-media"
            allowFullScreen
            className="w-full h-[480px] rounded-2xl"
          ></iframe>
        </div>
        {/* Right: Details */}
        <div className="w-1/2 flex flex-col">
          {/* Header Row */}
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-[16px] font-700">{videoName}</h2>
            <button
              onClick={onFavorite}
              className={`text-2xl ${isFavorite ? "text-pink-500" : "text-gray-400"}`}
              aria-label="Favorite"
            >
            {isFavorite ? (
                <img src={fillHeart} alt="Favorite" />
            ) : (
                <img src={blankHeart} alt="Not Favorite" />
            )}
            </button>
          </div>
          {/* Description */}
          <p className="text-[#666666] text-[12px] mb-4 bg-[#F5F5F5] p-[8px] rounded-[8px]">{description} Read all</p>
          {/* Prerequisite Skills */}
          <div className="mb-4">
            <div className="font-700 mb-2">Prerequisite Skills Required</div>
            <div className="flex gap-2 flex-wrap">
              {skills.map((skill, idx) => (
                <div key={idx} className="flex flex-col items-center">
                  <div className="w-auto h-[30px] rounded-full border border-[#F5207C] flex items-center justify-center mb-1 p-3 wrap">
                    <span className="text-sm font-500">{skill.name}</span>
                    <img src={skill.icon} alt={skill.name} className="w-6 h-6" />
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* Equipment Needed */}
          <div className="mb-4">
            <div className="font-700 mb-2">Equipment Needed</div>
            <div className="flex gap-2 flex-wrap">
              {equipment.map((eq, idx) => (
                <div key={idx} className="flex flex-col items-center">
                  <div className="w-auto h-[36px] rounded-full border border-[#E6E6E6] flex items-center justify-center mb-1 p-3 wrap gap-2">
                    <img src={eq.icon} alt={eq.name} className="w-6 h-6" />
                    <span className="text-[12px] font-500">{eq.name}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* Instructor */}
          <div className="mb-0">
          <div className="font-700 mb-2">Instructor</div>
          <div className="flex items-center mt-auto">
            <img
              src={instructor.avatar}
              alt={instructor.name}
              className="w-[36px] h-[36px] rounded-full mr-3"
            />
            <span className="font-medium">{instructor.name}</span>
          </div>
          </div>
          {/* Spacer */}
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 text-2xl"
            aria-label="Close"
          >
            ×
          </button>
        </div>
      </div>
    </div>
  );
};

export default VideoDetailModal;