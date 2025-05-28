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
    <div
      className="fixed inset-0 z-50 overflow-y-auto"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      <div className="fixed inset-0 bg-[#000000ba] bg-opacity-50 transition-opacity bg-opacity-50 transition-opacity" aria-hidden="true"></div>
      <div className="flex min-h-full items-center justify-center p-4 text-center">
        <div className="bg-white rounded-2xl shadow-lg w-[90%] max-w-full flex p-[24px] gap-[24px] relative relative shadow-xl w-max-[100px] flex flex-col md:flex-row">
          <button
            onClick={onClose}
            className="absolute -top-[0px] -right-[46px] text-white hover:text-white text-2xl w-10 h-10 gap-2.5 rounded-full p-1.5 flex items-center justify-center bg-black bg-opacity-50 cursor-pointer"
            aria-label="Close"
          >
            ×
          </button>
          <div className="w-1/1 flex items-start justify-center">
            <iframe
              src={videoUrl}
              title={videoName}
              allow="autoplay; encrypted-media"
              allowFullScreen
              className="w-full h-[480px] rounded-2xl"
            ></iframe>
          </div>
          <div className="w-1/2 flex flex-col">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-[16px] font-700">{videoName}</h2>
              <button
                onClick={onFavorite}
                className={`text-2xl cursor-pointer ${isFavorite ? "text-pink-500" : "text-gray-400"}`}
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
            <p className="text-[#666666] text-[12px] mb-4 bg-[#F5F5F5] p-[8px] rounded-[8px] text-start">{description} <a href="#" className="text-[#F5207C]">Read all</a> </p>
            {/* Prerequisite Skills */}
            <div className="mb-4">
              <div className="font-700 mb-2 text-start">Prerequisite Skills Required</div>
              <div className="flex gap-2 flex-wrap">
                {skills.map((skill, idx) => (
                  <div key={idx} className="flex flex-col items-center">
                    <div className="w-auto h-[30px] rounded-full border border-[#F5207C] flex items-center justify-center mb-1 p-3 wrap cursor-pointer">
                      <span className="text-sm font-500">{skill.name}</span>
                      <img src={skill.icon} alt={skill.name} className="w-6 h-6" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/* Equipment Needed */}
            <div className="mb-4">
              <div className="font-700 mb-2 text-start">Equipment Needed</div>
              <div className="flex gap-2 flex-wrap">
                {equipment.map((eq, idx) => (
                  <div key={idx} className="flex flex-col items-center">
                    <div className="w-auto h-[36px] rounded-full border border-[#E6E6E6] flex items-center justify-center mb-1 p-3 wrap gap-2 cursor-pointer">
                      <img src={eq.icon} alt={eq.name} className="w-6 h-6" />
                      <span className="text-[12px] font-500">{eq.name}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/* Instructor */}
            <div className="mb-0">
              <div className="font-700 mb-2 text-start">Instructor</div>
              <div className="flex items-center mt-auto">
                <img
                  src={instructor.avatar}
                  alt={instructor.name}
                  className="w-[36px] h-[36px] rounded-full mr-3"
                />
                <span className="font-medium text-[14px]">{instructor.name}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoDetailModal;