import { useState } from "react";
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

import galleryIcon from "../assets/images/galley.svg";
import pollIcon from "../assets/images/poll.svg";
import cameraIcon from "../assets/images/camera-blue.svg";

import postImg from "../assets/images/post-img.svg";
import groupImg from "../assets/images/group-img.svg";

import Pin from "../assets/images/Pin.svg";

import PostCard from "../component/post";
import CommunityPost from "../component/CommunityPost";
import PollProgressBar from "../component/PollProgressBar";
import VotingPost from "../component/VotingPost";
import ProfileCard from "../component/ProfileCard";

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

function CommunityDetails() {
  return (
    <div className="top-bg min-h-screen">
      <Header />
      <div className="explore-container w-full px-4 sm:px-6 py-4">
        <div className="flex w-full h-[400px] overflow-hidden rounded-[16px] relative items-center justify-center text-center community-banner-bg">
          <div className="w-auto m-auto">
            <img src={groupImg} alt="Gallery" className="max-h-[360px]" />
          </div>
        </div>
        <div className="w-full flex flex-col gap-8 m-auto">
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
  );
}
export default CommunityDetails;
