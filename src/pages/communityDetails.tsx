import React, { useState } from "react";
import Header from "../component/header";
import HorizontalMenu from "../component/HorizontalMenu";
import user from "../assets/images/user.svg";
import atSign from "../assets/images/at-sign.svg";
import email from "../assets/images/email.svg";
import Card from "../component/Card";
import vImg from "../assets/images/video-1.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import mark from "../assets/images/mark.svg";
import galleryIcon from "../assets/images/galley.svg";
import pollIcon from "../assets/images/poll.svg";
import cameraIcon from "../assets/images/camera-blue.svg";
import back from "../assets/images/back-icon.svg";

import postImg from "../assets/images/post-img.svg";
import groupImg from "../assets/images/group-img.svg";
import "../App.css";
import Pin from "../assets/images/Pin.svg";

import PostCard from "../component/post";
import CommunityPost from "../component/CommunityPost";
import PollProgressBar from "../component/PollProgressBar";
import VotingPost from "../component/VotingPost";
import ProfileCard from "../component/ProfileCard";
import PostModal from "../component/PostModal";
import PostCommentModal from "../component/PostCommentModal";
import icon1 from "../assets/images/icon-1.svg";
import icon2 from "../assets/images/icon-2.svg";
import icon3 from "../assets/images/icon-3.svg";
import icon4 from "../assets/images/icon-4.svg";
import avatar from "../assets/images/avatar.svg";
const menuItems = [
  { name: "For you", link: "/explore" },
  { name: "Groups", link: "/trending" },
];

const cardData = [
  {
    image: vImg,
    label: "Beginner",
    name: "Pole Basics",
    time: "45 min",
    timeIcon: "",
  },
  {
    image: vImg,
    label: "Intermediate",
    name: "Spin Techniques",
    time: "60 min",
    timeIcon: "",
  },
  {
    image: vImg,
    label: "Beginner",
    name: "Pole Basics",
    time: "45 min",
    timeIcon: "",
  },
  {
    image: vImg,
    label: "Intermediate",
    name: "Spin Techniques",
    time: "60 min",
    timeIcon: "",
  },
  {
    image: vImg,
    label: "Beginner",
    name: "Pole Basics",
    time: "45 min",
    timeIcon: "",
  },
  {
    image: vImg,
    label: "Intermediate",
    name: "Spin Techniques",
    time: "60 min",
    timeIcon: "",
  },
  {
    image: vImg,
    label: "Beginner",
    name: "Pole Basics",
    time: "45 min",
    timeIcon: "",
  },
  {
    image: vImg,
    label: "Intermediate",
    name: "Spin Techniques",
    time: "60 min",
    timeIcon: "",
  },
];

const RecommendedCard = [
  {
    image: vImg,
    label: "First Timer",
    name: "Strength Building 1",
    time: "60 min",
    timeIcon: "",
    timeSlot: "4 Weeks • 12 Classes",
  },
  {
    image: vImg,
    label: "First Timer",
    name: "Strength Building 1",
    timeSlot: "4 Weeks • 12 Classes",
  },
  {
    image: vImg,
    label: "First Timer",
    name: "Strength Building 1",
    timeSlot: "4 Weeks • 12 Classes",
  },
];
const priceCards = [
  {
    label: "Popular",
    duration: "1 Month",
    price: "$19.00",
    perMonth: "$19.99 /month",
  },
  {
    label: "Popular",
    duration: "3 Months",
    price: "$49.00",
    perMonth: "$16.33 /month",
  },
  {
    label: "Popular",
    duration: "6 Months",
    price: "$89.00",
    perMonth: "$14.83 /month",
  },
  {
    label: "Popular",
    duration: "12 Months",
    price: "$159.00",
    perMonth: "$13.25 /month",
  },
];

const priceCard = [
  {
    label: "Popular",
    duration: "1 Month",
    price: "$19.00",
    perMonth: "$19.99 /month",
  },
  {
    label: "Popular",
    duration: "3 Months",
    price: "$49.00",
    perMonth: "$16.33 /month",
  },
  {
    label: "Popular",
    duration: "6 Months",
    price: "$89.00",
    perMonth: "$14.83 /month",
  },
  {
    label: "Popular",
    duration: "12 Months",
    price: "$159.00",
    perMonth: "$13.25 /month",
  },
];
const videoDetail = {
  videoUrl: "https://www.youtube.com/embed/55XfCywmVNg",
  videoName: "Your First Pole Class!",
  description:
    "Discover the art with Fit2Flaunt as you build strength, confidence, and learn foundational moves—no experience needed! This class is perfect for beginners and will guide you through every step. Get ready to unleash your inner dancer.",
  skills: [
    { name: "Fireman", icon: mark },
    { name: "Sunkist", icon: mark },
    { name: "Pole Climb", icon: mark },
    { name: "V spin", icon: mark },
  ],
  equipment: [
    { name: "F2F Pole", icon: icon1 },
    { name: "F2F Pole Grip", icon: icon2 },
    { name: "Towel", icon: icon3 },
    { name: "F2F Pole wear", icon: icon4 },
  ],
  instructor: {
    name: "Shelly Murdok",
    avatar: avatar,
  },
};
function CommunityDetails() {
  const [isOpen, setIsOpen] = useState(false);
  const [modalOpen, setModalOpen] = React.useState(false);
  const [isFavorite, setIsFavorite] = React.useState(false);
  return (
    <div className="top-bg min-h-screen">
      <Header />
      <div className="explore-container w-full px-4 sm:px-6 py-4">
        <div className="flex w-full h-[400px] overflow-hidden rounded-[16px] relative items-center justify-center text-center community-banner-bg">
          <div className="w-auto m-auto">
            <img src={groupImg} alt="Gallery" className="max-h-[360px]" />
          </div>
        </div>
        <div className="mb-5">
          <div className="flex flex-row justify-start h-full items-center py-4 pb-2 text-[#757575]">
            <img src={back} /> Back to Groups
          </div>
          <div className="space-y-1">
            {/* First Row */}
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2 justify-center">
                <div className="font-700 text-lg flex flex-row items-center gap-1 border-r pr-2 border-[#E6E6E6]">
                  Group Name
                  <span className="text-yellow-400">
                    {/* Example: Star Icon (Heroicons) */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.175c.969 0 1.371 1.24.588 1.81l-3.38 2.455a1 1 0 00-.364 1.118l1.287 3.966c.3.921-.755 1.688-1.54 1.118l-3.38-2.455a1 1 0 00-1.176 0l-3.38 2.455c-.784.57-1.838-.197-1.54-1.118l1.287-3.966a1 1 0 00-.364-1.118L2.049 9.394c-.783-.57-.38-1.81.588-1.81h4.175a1 1 0 00.95-.69l1.286-3.967z" />
                    </svg>
                  </span>
                </div>
                <div className="flex gap-1 text-xs 2xl:text-sm text-[#000000] font-500">
                  <span>2500 members</span>
                  <span>•</span>
                  <span>100 posts</span>
                </div>
              </div>
              <div className="flex space-x-2">
                <button
                  className="bg-white border border-[#E6E6E6] text-[#F5207C] px-3 py-3 rounded-[12px] hover:bg-red-600 text-base font-700 hover:text-white transition cursor-pointer"
                  onClick={() => setModalOpen(true)}
                >
                  Leave Group
                </button>
                <button
                  className="bg-[#F5207C] text-white px-3 py-3 rounded-[12px] flex items-center hover:bg-blue-600 text-base font-700 transition cursor-pointer gap-1"
                  onClick={() => setIsOpen(true)}
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12.3332 13H9.6665"
                      stroke="white"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M11 14.3327V11.666"
                      stroke="white"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M8.10673 7.24732C8.04006 7.24065 7.96006 7.24065 7.88673 7.24732C6.30006 7.19398 5.04006 5.89398 5.04006 4.29398C5.0334 2.66065 6.36006 1.33398 7.9934 1.33398C9.62673 1.33398 10.9534 2.66065 10.9534 4.29398C10.9534 5.89398 9.68673 7.19398 8.10673 7.24732Z"
                      stroke="white"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M7.99336 14.5404C6.78003 14.5404 5.57336 14.2338 4.65336 13.6204C3.04003 12.5404 3.04003 10.7804 4.65336 9.70711C6.48669 8.48044 9.49336 8.48044 11.3267 9.70711"
                      stroke="white"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  Invite
                </button>
              </div>
            </div>
            <div className="text-[#666666] text-sm w-full lg:max-w-[60%]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Pellentesque euismod, nisi eu consectetur consectetur, nisl nisi
              consectetur nisi, euismod euismod nisi nisi euismod. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam.
            </div>
          </div>
        </div>
        <div className="w-full flex flex-col gap-2 m-auto">
          <h4 className="font-700">Post</h4>
          <div className="bg-white rounded-[16px] p-4 py-10 border border-[#EBEBEB]">
            <div className="w-full lg:max-w-[800px] flex flex-col gap-8 m-auto">
              <div className="bg-white rounded-[16px] p-4 border border-[#EBEBEB]">
                <div className="flex items-center gap-4 mb-3">
                  <img
                    src="https://i.pravatar.cc/30"
                    alt="User"
                    className="w-[60px] h-[60px] rounded-full object-cover"
                  />
                  <input
                    type="text"
                    placeholder="What’s in your mind?"
                    className="flex-1 outline-none text-sm placeholder-gray-400 bg-transparent border-none"
                  />
                </div>
                <div className="flex gap-6 mt-2">
                  <button className="flex items-center gap-2 text-black hover:text-[#F5207C] transition cursor-pointer">
                    <img src={galleryIcon} alt="Gallery" className="w-5 h-5" />
                    <span className="text-base font-500">Gallery</span>
                  </button>
                  <button className="flex items-center gap-2 text-black hover:text-[#F5207C] transition cursor-pointer">
                    <img src={pollIcon} alt="Poll" className="w-5 h-5" />
                    <span className="text-base font-500">Poll</span>
                  </button>
                  <button className="flex items-center gap-2 text-black hover:text-[#F5207C] transition cursor-pointer">
                    <img src={cameraIcon} alt="Camera" className="w-5 h-5" />
                    <span className="text-base font-500">Camera</span>
                  </button>
                </div>
              </div>
              <CommunityPost
                userPhoto="https://randomuser.me/api/portraits/men/32.jpg"
                username="John Doe"
                company="Acme Corp"
                time="14h"
                heading="Just mastered the fireman"
                content="These tutorials are so easy to follow! I just learned my first pole spin. What do you guys think?"
                userPost={postImg}
                favoriteCount={12}
                commentCount={4}
                onShare={() => alert("Shared!")}
              />

              <CommunityPost
                userPhoto="https://randomuser.me/api/portraits/men/32.jpg"
                username="John Doe"
                company="Acme Corp"
                time="14h"
                heading="Just mastered the fireman"
                content="These tutorials are so easy to follow! I just learned my first pole spin. What do you guys think?"
                favoriteCount={12}
                commentCount={4}
                onShare={() => alert("Shared!")}
              />

              <CommunityPost
                userPhoto="https://randomuser.me/api/portraits/men/32.jpg"
                username="John Doe"
                company="Acme Corp"
                time="14h"
                heading="Just mastered the fireman"
                userPost={postImg}
                favoriteCount={12}
                commentCount={4}
                onShare={() => alert("Shared!")}
              />
              <VotingPost
                userPhoto="https://randomuser.me/api/portraits/men/32.jpg"
                username="John Doe"
                company="Acme Corp"
                time="14h"
                favoriteCount={12}
                commentCount={4}
                onShare={() => alert("Shared!")}
              />
            </div>
          </div>
        </div>
      </div>

      {isOpen && <PostModal onClose={() => setIsOpen(false)} />}

      {/* Modal */}
      <PostCommentModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        videoUrl={videoDetail.videoUrl}
        videoName={videoDetail.videoName}
        isFavorite={isFavorite}
        onFavorite={() => setIsFavorite((f) => !f)}
        description={videoDetail.description}
        skills={videoDetail.skills}
        equipment={videoDetail.equipment}
        instructor={videoDetail.instructor}
      />
    </div>
  );
}
export default CommunityDetails;
