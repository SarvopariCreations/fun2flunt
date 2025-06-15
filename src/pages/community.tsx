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

function Community() {
  return (
    <div className="top-bg min-h-screen">
      <Header />
      <div className="explore-container w-full px-4 sm:px-6 py-4">
        <h1 className="text-2xl md:text-3xl font-bold mb-[20px]">Community</h1>
        <div className="border-b-2 border-[#E6E6E6] mb-4 flex flex-row justify-between">
          <HorizontalMenu items={menuItems} />
        </div>

        <div className="w-full lg:max-w-[1232px] flex flex-col lg:flex-row gap-8 m-auto lg:hidden">
          <div className="w-full lg:max-w-[400px] border border-[#EBEBEB] rounded-[12px] bg-white left-community-sidebar">
            <div className="w-full">
              <div className="w-full box-border p-6">
                <div className="flex items-start justify-between relative">
                  <h2 className="text-[20px] font-700 absolute flex items-center gap-1">
                    <img src={Pin} alt="Pin" /> F2F Featured
                  </h2>
                  <div className="flex items-center gap-2 text-base font-semibold text-[#F5207C] cursor-pointer"></div>
                </div>
                <div className="relative w-full mx-auto">
                  <Swiper
                    modules={[Navigation, Pagination, Autoplay]}
                    navigation
                    pagination={{ clickable: true }}
                    autoplay={false}
                    loop={false}
                    spaceBetween={20}
                    slidesPerView={1}
                    className="rounded-xl overflow-hidden"
                  >
                    <SwiperSlide>
                      <VotingPost
                        userPhoto="https://randomuser.me/api/portraits/men/32.jpg"
                        username="John Doe"
                        company="Acme Corp"
                        time="14h"
                        favoriteCount={12}
                        commentCount={4}
                        onShare={() => alert("Shared!")}
                      />
                      <br />
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
                    </SwiperSlide>

                    <SwiperSlide>
                      <VotingPost
                        userPhoto="https://randomuser.me/api/portraits/men/32.jpg"
                        username="John Doe"
                        company="Acme Corp"
                        time="14h"
                        favoriteCount={12}
                        commentCount={4}
                        onShare={() => alert("Shared!")}
                      />
                      <br />
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
                    </SwiperSlide>
                  </Swiper>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full lg:max-w-[800px] flex flex-col gap-8">
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

        <div className="w-full px-6 my-[20px] flex gap-[24px]">
          <div className="w-full box-border bg-white border border-[#EBEBEB] rounded-[12px] p-6">
            <div className="flex items-start justify-between relative">
              <h2 className="text-[20px] font-700 absolute">Your Groups</h2>
              <div className="flex items-center gap-2 text-base font-semibold text-[#F5207C] cursor-pointer"></div>
            </div>
            <div className="relative w-full mx-auto">
              <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                navigation
                pagination={{ clickable: true }}
                autoplay={false}
                loop={false}
                spaceBetween={20}
                slidesPerView={6}
                className="rounded-xl overflow-hidden"
              >
                {[...Array(10)].map((_, idx) => (
                  <SwiperSlide key={idx}>
                    <ProfileCard
                      image="https://randomuser.me/api/portraits/men/32.jpg"
                      username={`Username ${idx + 1}`}
                      members={2500}
                      posts={100}
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>

        <div className="w-full px-6 my-[20px] flex gap-[24px]">
          <div className="w-full box-border bg-white border border-[#EBEBEB] rounded-[12px] p-6">
            <div className="flex items-start justify-between relative">
              <h2 className="text-[20px] font-700 relative mb-4">All Groups</h2>
            </div>
            <div className="relative w-full mx-auto">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
                {[...Array(10)].map((_, idx) => (
                  <ProfileCard
                    image="https://randomuser.me/api/portraits/men/32.jpg"
                    username={`Username ${idx + 1}`}
                    members={2500}
                    posts={100}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Community;
