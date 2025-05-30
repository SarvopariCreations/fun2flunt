import Header from "../component/header";
import back from "../assets/images/back-icon.svg";
import videoSample from "../assets/images/dummy-video.jpg";
import "../App.css";
import mark from "../assets/images/mark.svg";
import icon1 from "../assets/images/icon-1.svg";
import icon2 from "../assets/images/icon-2.svg";
import icon3 from "../assets/images/icon-3.svg";
import icon4 from "../assets/images/icon-4.svg";
import heartIcon from "../assets/images/heart.svg";
import shareIcon from "../assets/images/share-iocn.svg";
import avatar from "../assets/images/avatar.svg";
import { useState } from "react";
import FeedbackModal from "../component/FeedbackModal";

function ExploreDetails() {
  const [feedbackOpen, setFeedbackOpen] = useState(false);
  return (
    <div className="top-bg min-h-screen">
      <Header />
      <div className="flex flex-row justify-start h-full items-center p-4 text-[#757575]">
        <img src={back} /> Back to Skills
      </div>
      <div className="w-full px-6">
        <div className="bg-white border border-[#EBEBEB] rounded-[12px] p-4 sm:p-6 gap-[24px] flex flex-row">
          <div className="w-[320px]">
            <div className="flex flex-row items-center p-3 gap-[10px] w-[306px] h-[104px] bg-[rgba(245,32,124,0.05)] border-2 border-transparent hover:border-[#F5207C] rounded-[12px] cursor-pointer">
              {/* Video Section */}
              <div className="flex-shrink-0 w-[100px] h-[80px] bg-gray-200 rounded-lg flex items-center justify-center">
                {/* Replace with actual video or thumbnail */}
                <span className="text-xs text-gray-400">Video</span>
              </div>
              {/* Info Section */}
              <div
                className="flex flex-col justify-between h-full"
                onClick={() => setFeedbackOpen(true)}
              >
                <span className="font-500 text-base text-[#F5207C]">
                  Jade Split
                </span>
                <div className="flex items-center gap-2 text-sm text-[#757575] font-500">
                  {/* Time Icon (SVG) */}
                  <svg width="16" height="16" fill="none" viewBox="0 0 16 16">
                    <circle
                      cx="8"
                      cy="8"
                      r="7"
                      stroke="#757575"
                      strokeWidth="1.5"
                    />
                    <path
                      d="M8 4.5v3.5l2 2"
                      stroke="#757575"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                  </svg>
                  <span>05:20 Min</span>
                </div>
                <span className="text-[12px] text-[#757575] font-500">
                  Shelly Murdok
                </span>
              </div>
            </div>
            <div className="font-700 text-black text-[18px] my-4">
              Next Recommanded Skills
            </div>
            <div className="flex flex-row items-center p-3 gap-[10px] w-[306px] h-[104px] bg-[rgba(245,32,124,0.05)] border-2 border-transparent hover:border-[#F5207C] rounded-[12px] cursor-pointer">
              {/* Video Section */}
              <div className="flex-shrink-0 w-[100px] h-[80px] bg-gray-200 rounded-lg flex items-center justify-center">
                {/* Replace with actual video or thumbnail */}
                <span className="text-xs text-gray-400">Video</span>
              </div>
              {/* Info Section */}
              <div className="flex flex-col justify-between h-full">
                <span className="font-500 text-base text-[#F5207C]">
                  Jade Split
                </span>
                <div className="flex items-center gap-2 text-sm text-[#757575] font-500">
                  {/* Time Icon (SVG) */}
                  <svg width="16" height="16" fill="none" viewBox="0 0 16 16">
                    <circle
                      cx="8"
                      cy="8"
                      r="7"
                      stroke="#757575"
                      strokeWidth="1.5"
                    />
                    <path
                      d="M8 4.5v3.5l2 2"
                      stroke="#757575"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                  </svg>
                  <span>05:20 Min</span>
                </div>
                <span className="text-[12px] text-[#757575] font-500">
                  Shelly Murdok
                </span>
              </div>
            </div>
          </div>
          <div className="flex w-[100%] flex-col">
            <div className="w-[100%]">
              <img src={videoSample} className="w-[100%]" />
            </div>
            <div>
              <div className="flex flex-col gap-4 w-full mx-auto bg-white">
                <div className="flex flex-row justify-between items-center mt-[20px]">
                  <span className="text-xl font-700 text-[#000000]">
                    Jade Split
                  </span>
                  <div className="flex items-center gap-4">
                    <button className="p-2 rounded-full hover:bg-gray-100 cursor-pointer">
                      <img src={shareIcon} className="w-6 h-6" />
                    </button>
                    <button className="p-2 rounded-full hover:bg-gray-100 cursor-pointer">
                      <img src={heartIcon} className="w-6 h-6" />
                    </button>
                    <button className="flex items-center gap-2 px-4 py-2 bg-[white] text-[#F5207C] rounded-lg hover:bg-transparent text-sm font-medium border border-[#E6E6E6] hover:border-[#F5207C] cursor-pointer font-700">
                      <img src={mark} className="w-6 h-6" />
                      Mark as Mastered
                    </button>
                  </div>
                </div>
                <div className="bg-[#F5F5F5] rounded-[8px] p-4 text-[#666] text-sm">
                  Master the Jade Split with our step-by-step tutorial! Learn
                  how to safely and confidently execute this stunning move,
                  perfect for adding flair to your pole dance. Learn the basics
                  of pole dancing, including fundamental spins, grips, and
                  transitions. Start building strength, confidence, and flow
                  from day one. Get ready to move, build confidence, and have
                  fun on the pole. Learn the basics of pole dancing, including
                  fundamental spins, grips, and transitions. Start building
                  strength, confidence, and flow from day one. Learn the basics
                  of pole dancing, including fundamental spins, grips, and
                  transitions. Start building strength, confidence, and flow
                  from day one..Read all.{" "}
                  <a href="#" className="text-[#F5207C]">
                    Read all
                  </a>
                </div>
                <div className="flex flex-col gap-4">
                  <div className="flex-1">
                    <div className="font-700 mb-2">
                      Prerequisite Skills Required
                    </div>
                    <div className="flex gap-2 flex-wrap">
                      {/* Example Skill */}
                      <div className="flex flex-col items-center">
                        <div className="h-[30px] rounded-full border border-[#E6E6E6] flex items-center justify-center mb-1 px-3 cursor-pointer hover:border-[#F5207C]">
                          <span className="text-sm font-500">
                            Hamstring Flex
                          </span>
                          <img src={mark} className="w-6 h-6 ml-2" />
                        </div>
                      </div>
                      {/* Add more skills as needed */}
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="font-700 mb-2">Equipment Needed</div>
                    <div className="flex gap-2 flex-wrap">
                      {/* Example Equipment */}
                      <div className="flex flex-row items-center gap-4">
                        <div className="h-[36px] rounded-full border border-[#E6E6E6] flex items-center justify-center mb-1 px-3 gap-2 cursor-pointer hover:border-[#F5207C]">
                          <img src={icon1} className="w-6 h-6" />
                          <span className="text-xs font-500">F2F Pole</span>
                        </div>
                        <div className="h-[36px] rounded-full border border-[#E6E6E6] flex items-center justify-center mb-1 px-3 gap-2 cursor-pointer hover:border-[#F5207C]">
                          <img src={icon2} className="w-6 h-6" />
                          <span className="text-xs font-500">
                            F2F Pole Grip
                          </span>
                        </div>
                        <div className="h-[36px] rounded-full border border-[#E6E6E6] flex items-center justify-center mb-1 px-3 gap-2 cursor-pointer hover:border-[#F5207C]">
                          <img src={icon3} className="w-6 h-6" />
                          <span className="text-xs font-500">Towel</span>
                        </div>
                        <div className="h-[36px] rounded-full border border-[#E6E6E6] flex items-center justify-center mb-1 px-3 gap-2 cursor-pointer hover:border-[#F5207C]">
                          <img src={icon4} className="w-6 h-6" />
                          <span className="text-xs font-500">
                            F2F Pole wear
                          </span>
                        </div>
                      </div>
                      {/* Add more equipment as needed */}
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="font-700 mb-2">Instructor</div>
                    <div className="flex items-center">
                      <img
                        src="https://randomuser.me/api/portraits/women/44.jpg"
                        alt="Shelly Murdok"
                        className="w-9 h-9 rounded-full mr-3"
                      />
                      <span className="font-500 text-[14px]">
                        Shelly Murdok
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <FeedbackModal
        open={feedbackOpen}
        onClose={() => setFeedbackOpen(false)}
        onSubmit={() => {
          // Do NOT call setFeedbackOpen(false) here!
          // Just handle feedback data if needed.
        }}
      />
    </div>
  );
}
export default ExploreDetails;
