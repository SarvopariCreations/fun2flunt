
import Header from "../component/header";
import video from "../assets/images/play.svg";
import meet from "../assets/images/meet.svg";
import chevron from "../assets/images/chevron-right.svg";
import "../App.css";
// CarouselComponent.jsx
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
// import "swiper/css/pagination";

import clock from "../assets/images/clock.svg";
import mark from "../assets/images/mark.svg";
import icon1 from "../assets/images/icon-1.svg";
import icon2 from "../assets/images/icon-2.svg";
import icon3 from "../assets/images/icon-3.svg";
import icon4 from "../assets/images/icon-4.svg";
import avatar from "../assets/images/avatar.svg";
import Card from "../component/Card"; // Import your Card component
import Banner from "../component/banner";
import PostCard from "../component/post";
import VideoCard from "../component/video-card";
import vPlay from "../assets/images/v-play.svg";
import vImg from "../assets/images/video-1.jpg";
import f2fLogo from "../assets/images/f2f-logo.svg";
import applicationImg from "../assets/images/application-img.png"; // Corrected import statement
import gPlay from "../assets/images/g-play.svg";
import iosApp from "../assets/images/ios-app.svg";
import CartCard from "../component/cartCard";
import item from "../assets/images/item.png";
import VideoDetailModal from "../component/VideoDetailModal";
import React from "react";
import { BsHeartArrow } from "react-icons/bs";

function Home() {

  const [modalOpen, setModalOpen] = React.useState(false);
  const [isFavorite, setIsFavorite] = React.useState(false);

  // Dummy data for modal
  const videoDetail = {
    videoUrl: "https://www.youtube.com/embed/55XfCywmVNg",
    videoName: "Your First Pole Class!",
    description:
      "Discover the art with Fit2Flaunt as you build strength, confidence, and learn foundational moves—no experience needed! This class is perfect for beginners and will guide you through every step. Get ready to unleash your inner dancer.",
    skills: [
      { name: "Fireman", icon:mark },
      { name: "Sunkist", icon:mark },
      { name: "Pole Climb", icon:mark },
      { name: "V spin", icon:mark },
    ],
    equipment: [
      { name: "F2F Pole", icon:icon1 },
      { name: "F2F Pole Grip", icon:icon2 },
      { name: "Towel", icon:icon3 },
      { name: "F2F Pole wear", icon:icon4 },
    ],
    instructor: {
      name: "Shelly Murdok",
      avatar:avatar,
    },
  };

  return (
    <div className="top-bg">
      <Header />
      <div className="w-full p-6">
        <div className="font-bold text-[30px] leading-[40px] tracking-[0]">
          Hey, Camila <span>👋</span>
        </div>
      </div>
      <div className="w-full px-6">
        <div className="box-border h-[290px] bg-white border border-[#EBEBEB] rounded-[12px] p-6">
          <div className="flex space-x-2">
            {/* Left Bar */}
            <div className="w-1/2">
              <h2 className="text-xl font-semibold mb-[24px]">
                Your Quick Start Guide
              </h2>
              <ul className="space-y-1">
                {/* Item 1 */}
                <li className="flex items-center justify-between p-2 ps-0 rounded-lg transition">
                  <div className="flex items-center gap-4">
                    <img
                      src={video}
                      alt="Banner"
                      className="w-[20] h-[20] object-cover"
                    />
                    <div className="space-y-1">
                      <p className="text-md font-700">
                        Watch our 1 min intro video
                      </p>
                      <p className="text-sm text-[#000000]">
                        Watch intoduction video to get started with pole
                        dancing.
                      </p>
                    </div>
                  </div>
                  <img
                    src={chevron}
                    alt="Banner"
                    className="w-[20] h-[20] object-cover"
                  />
                </li>

                {/* Item 2 */}
                <li className="flex items-center justify-between p-2 ps-0 rounded-lg  transition">
                  <div className="flex items-center gap-4">
                    <img
                      src={meet}
                      alt="Banner"
                      className="w-[20] h-[20] object-cover"
                    />
                    <div className="space-y-1">
                      <p className="text-md font-700">Meet your tribe!</p>
                      <p className="text-sm text-[#000000]">
                        Introduce yourself to other first timers who are also
                        starting the Flaunter journey!
                      </p>
                    </div>
                  </div>
                  <img
                    src={chevron}
                    alt="Banner"
                    className="w-[20] h-[20] object-cover"
                  />
                </li>

                {/* Item 3 */}
                <li className="flex items-center justify-between p-2 ps-0 rounded-lg transition">
                  <div className="flex items-center gap-4">
                    <img
                      src={video}
                      alt="Banner"
                      className="w-[20] h-[20] object-cover"
                    />
                    <div className="space-y-1">
                      <p className="text-md font-700">
                        Complete your first flaunter class
                      </p>
                      <p className="text-sm text-[#000000]">
                        Only checks off complete when you watch the workout to
                        the end.
                      </p>
                    </div>
                  </div>
                  <img
                    src={chevron}
                    alt="Banner"
                    className="w-[20] h-[20] object-cover"
                  />
                </li>
              </ul>
            </div>

            {/* Right Section */}
            <div className="w-1/2">
              {/* Box 1 */}
              <div className="flex items-start justify-end gap-[20px]">
                <div className="w-[234px] flex flex-col justify-center">
                  <h3 className="text-lg font-semibold mb-2">
                    Intro to Pole Dancing
                  </h3>
                  <p className="text-sm text-gray-600">
                    Discover the art with Fit2Flaunt as you build strength,
                    confidence, and learn foundational moves—no experience
                    needed!
                  </p>
                </div>
                <div className="w-[390px]">
                  <iframe
                    src="https://www.youtube.com/embed/55XfCywmVNg?si=i5v-KQ_dpO2bo68v"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerpolicy="strict-origin-when-cross-origin"
                    allowfullscreen
                    className="w-[390px] h-[242px] object-cover rounded-2xl"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-row justify-between gap-6 px-6 my-[20px]">
        {/* Box 1 */}
        <div className="flex flex-row items-center justify-between px-6 py-4 w-[450.67px] h-16 bg-white border border-[#EBEBEB] rounded-xl flex-grow">
          <div className="flex items-center gap-3.5">
            <img src={video} alt="icon" className="w-8 h-8" />
            <span className="font-semibold text-[20px]">Classes Completed</span>
          </div>
          <span className="font-bold text-xl">12</span>
        </div>
        {/* Box 2 */}
        <div className="flex flex-row items-center justify-between px-6 py-4 w-[450.67px] h-16 bg-white border border-[#EBEBEB] rounded-xl flex-grow">
          <div className="flex items-center gap-3.5">
            <img src={meet} alt="icon" className="w-8 h-8" />
            <span className="font-semibold text-[20px]">Skills Mastered</span>
          </div>
          <span className="font-bold text-xl">8</span>
        </div>
        {/* Box 3 */}
        <div className="flex flex-row items-center justify-between px-6 py-4 w-[450.67px] h-16 bg-white border border-[#EBEBEB] rounded-xl flex-grow">
          <div className="flex items-center gap-3.5">
            <img src={video} alt="icon" className="w-8 h-8" />
            <span className="font-semibold text-[20px]">Programs Finished</span>
          </div>
          <span className="font-bold text-xl">5</span>
        </div>
      </div>
      <div className="w-full px-6 my-[20px] flex gap-[24px]">
        <div className="w-1/2 bg-[#E6E6E6] border border-[#E6E6E6] rounded-[12px] p-[24px] h-[276px]">
          {/* Content Row */}
          <div className="flex items-center justify-between mb-[15px]">
            <h2 className="text-[20px] font-700">Your Recommended Programs</h2>
            <div className="flex items-center gap-2 text-base font-semibold text-[#F5207C] cursor-pointer">
              Program Details
              <img src={chevron} alt="arrow" className="w-5 h-5" />
            </div>
          </div>
          <div className="flex gap-8">
            {/* Left: Video */}
            <div className="w-1/2 flex items-center justify-center">
              <iframe
                src="https://www.youtube.com/embed/55XfCywmVNg?si=i5v-KQ_dpO2bo68v"
                title="Recommended Program Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                className="w-full h-[180px] rounded-xl object-cover"
              ></iframe>
            </div>
            {/* Right: Details */}
            <div className="w-1/2 flex flex-col justify-between">
              <div>
                <h3 className="text-[20px] font-semibold mb-2">
                  Strength Building 1
                </h3>
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-[16px] text-[#666666] font-500">
                    4 Weeks
                  </span>
                  <span className="text-[16px] text-[#666666] font-500">·</span>
                  <span className="text-[16px] text-[#666666] font-500">
                    12 Classes
                  </span>
                </div>
              </div>
              {/* Label and Progress */}
              <div>
                <div className="flex items-center justify-between mb-[20px]">
                  <span className="text-[18px] font-500 text-[#000000]">
                    Spins & Transitions
                  </span>
                  {/* <span className="text-xs">60%</span> */}
                </div>
                <div className="w-full bg-[#CCCCCC] rounded-full h-[6px]">
                  <div
                    className="bg-[#F5207C] h-[6px] rounded-full"
                    style={{ width: "20%" }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-1/2 bg-[#E6E6E6] border border-[#E6E6E6] rounded-[12px] p-[24px] h-[276px]">
          <div className="flex items-start justify-between mb-[15px]">
            <h2 className="text-[20px] font-700">Skills from your program</h2>
            <div className="flex items-center gap-2 text-base font-semibold text-[#F5207C] cursor-pointer"></div>
          </div>
          <div className="relative w-full max-w-5xl mx-auto">
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              navigation
              pagination={{ clickable: true }}
              autoplay={{ delay: 3000 }}
              loop={false}
              spaceBetween={20}
              slidesPerView={3}
              className="rounded-xl overflow-hidden"
            >
              <SwiperSlide>
                <Card
                  image="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80"
                  label="Beginner"
                  name="Pole Basics"
                  time="12 min"
                  timeIcon={clock}
                />
              </SwiperSlide>

              <SwiperSlide>
                <Card
                  image="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80"
                  label="Beginner"
                  name="Pole Basics"
                  time="12 min"
                  timeIcon={clock}
                />
              </SwiperSlide>

              <SwiperSlide>
                <Card
                  image="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80"
                  label="Beginner"
                  name="Pole Basics"
                  time="12 min"
                  timeIcon={clock}
                />
              </SwiperSlide>

              <SwiperSlide>
                <Card
                  image="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80"
                  label="Beginner"
                  name="Pole Basics"
                  time="12 min"
                  timeIcon={clock}
                />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
      <div className="w-full px-6 my-[20px] flex gap-[24px]">
        <Banner />
      </div>
      <div className="w-full px-6 my-[20px] flex gap-[24px]">
        <div className="w-full box-border bg-white border border-[#EBEBEB] rounded-[12px] p-6">
          <div className="flex items-start justify-between mb-[15px]">
            <h2 className="text-[20px] font-700">Recent community posts</h2>
            <div className="flex items-center gap-2 text-base font-semibold text-[#F5207C] cursor-pointer"></div>
          </div>
          <div className="relative w-full mx-auto">
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              navigation
              pagination={{ clickable: true }}
              autoplay={{ delay: 3000 }}
              loop={false}
              spaceBetween={20}
              slidesPerView={4}
              className="rounded-xl overflow-hidden"
            >
              <SwiperSlide>
                <PostCard
                  userPhoto="https://randomuser.me/api/portraits/men/32.jpg"
                  username="John Doe"
                  company="Acme Corp"
                  time="14h"
                  heading="Just mastered the fireman"
                  label="Beginner"
                  content="These tutorials are so easy to follow! I just learned my first pole spin. What do you guys think?"
                  favoriteCount={12}
                  commentCount={4}
                  onShare={() => alert("Shared!")}
                />
              </SwiperSlide>
              <SwiperSlide>
                <PostCard
                  userPhoto="https://randomuser.me/api/portraits/men/32.jpg"
                  username="John Doe"
                  company="Acme Corp"
                  time="14h"
                  heading="Just mastered the fireman"
                  label="Beginner"
                  content="These tutorials are so easy to follow! I just learned my first pole spin. What do you guys think?"
                  favoriteCount={12}
                  commentCount={4}
                  onShare={() => alert("Shared!")}
                />
              </SwiperSlide>
              <SwiperSlide>
                <PostCard
                  userPhoto="https://randomuser.me/api/portraits/men/32.jpg"
                  username="John Doe"
                  company="Acme Corp"
                  time="14h"
                  heading="Just mastered the fireman"
                  label="Beginner"
                  content="These tutorials are so easy to follow! I just learned my first pole spin. What do you guys think?"
                  favoriteCount={12}
                  commentCount={4}
                  onShare={() => alert("Shared!")}
                />
              </SwiperSlide>
              <SwiperSlide>
                <PostCard
                  userPhoto="https://randomuser.me/api/portraits/men/32.jpg"
                  username="John Doe"
                  company="Acme Corp"
                  time="14h"
                  heading="Just mastered the fireman"
                  label="Beginner"
                  content="These tutorials are so easy to follow! I just learned my first pole spin. What do you guys think?"
                  favoriteCount={12}
                  commentCount={4}
                  onShare={() => alert("Shared!")}
                />
              </SwiperSlide>{" "}
              <SwiperSlide>
                <PostCard
                  userPhoto="https://randomuser.me/api/portraits/men/32.jpg"
                  username="John Doe"
                  company="Acme Corp"
                  time="14h"
                  heading="Just mastered the fireman"
                  label="Beginner"
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
      <div className="w-full px-6 my-[20px] flex gap-[24px]">
        <div className="w-full box-border bg-white border border-[#EBEBEB] rounded-[12px] p-6">
          <div className="flex items-start justify-between mb-[15px]">
            <h2 className="text-[20px] font-700">Recently viewed</h2>
            <div className="flex items-center gap-2 text-base font-semibold text-[#F5207C] cursor-pointer"></div>
          </div>
          <div className="relative w-full mx-auto">
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              navigation
              pagination={{ clickable: true }}
              autoplay={{ delay: 3000 }}
              loop={false}
              spaceBetween={20}
              slidesPerView={5}
              className="rounded-xl overflow-hidden"
            >
              <SwiperSlide>
                <div onClick={() => setModalOpen(true)} className="cursor-pointer">
                <VideoCard
                  image={vImg}
                  name="Your First Pole Class!"
                  time="37:09 Min"
                  timeIcon={clock}
                  playIcon={vPlay}
                  progress={60}
                />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <VideoCard
                  image={vImg}
                  name="Your First Pole Class!"
                  time="37:09 Min"
                  timeIcon={clock}
                  playIcon={vPlay}
                  progress={60}
                />
              </SwiperSlide>
              <SwiperSlide>
                <VideoCard
                  image={vImg}
                  name="Your First Pole Class!"
                  time="37:09 Min"
                  timeIcon={clock}
                  playIcon={vPlay}
                  progress={60}
                />
              </SwiperSlide>
              <SwiperSlide>
                <VideoCard
                  image={vImg}
                  name="Your First Pole Class!"
                  time="37:09 Min"
                  timeIcon={clock}
                  playIcon={vPlay}
                  progress={60}
                />
              </SwiperSlide>
              <SwiperSlide>
                <VideoCard
                  image={vImg}
                  name="Your First Pole Class!"
                  time="37:09 Min"
                  timeIcon={clock}
                  playIcon={vPlay}
                  progress={60}
                />
              </SwiperSlide>
              <SwiperSlide>
                <VideoCard
                  image={vImg}
                  name="Your First Pole Class!"
                  time="37:09 Min"
                  timeIcon={clock}
                  playIcon={vPlay}
                  progress={60}
                />
              </SwiperSlide>
            </Swiper>

            {/* Modal */}
        <VideoDetailModal
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
        </div>
      </div>

      <div className="w-full px-6 my-[20px] flex gap-[24px]">
        <div
          className="w-1/2 flex bg-white border border-[#EBEBEB] rounded-[12px]"
          style={{
            background:
              "linear-gradient(205.92deg, #FFFFFF 62.31%, #FFD2E5 110.49%)",
          }}
        >
          {/* Left: 60% */}
          <div className="w-3/5 flex flex-col justify-center p-8">
            {/* Logo */}
            <div className="mb-4 w-[185px]">
              <img src={f2fLogo} alt="f2f" />
            </div>
            {/* Heading */}
            <h2 className="text-2xl font-bold mb-2">Download the app now!!</h2>
            {/* Paragraph */}
            <p className="text-black mb-6 text-[14px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore.
            </p>
            {/* Download Buttons */}
            <div className="flex gap-4">
              <a
                href="https://play.google.com/store"
                target="_blank"
                rel="noopener noreferrer"
                className=""
              >
                <img src={gPlay} alt="f2f" />
              </a>
              <a
                href="https://www.apple.com/app-store/"
                target="_blank"
                rel="noopener noreferrer"
                className=""
              >
                <img src={iosApp} alt="f2f" />
              </a>
            </div>
          </div>
          {/* Right: 40% */}
          <div className="w-2/5 flex items-end justify-center pb-0 right-bg">
            <img
              src={applicationImg}
              alt="App Preview"
              className="w-full max-w-xs"
            />
          </div>
        </div>

        <div className="w-1/2 flex bg-white border border-[#EBEBEB] rounded-[12px]">
          <div className="w-full px-6 my-[20px] flex gap-[24px]">
            <div className="w-full">
              <div className="flex items-start justify-between mb-[15px]">
                <h2 className="text-[20px] font-700">Shop your perfect pole</h2>
                <div className="flex items-center gap-2 text-base font-semibold text-[#F5207C] cursor-pointer">
                  See all
                </div>
              </div>
              <div className="relative w-full mx-auto">
                <Swiper
                  modules={[Navigation, Pagination, Autoplay]}
                  navigation
                  pagination={{ clickable: true }}
                  autoplay={{ delay: 3000 }}
                  loop={false}
                  spaceBetween={20}
                  slidesPerView={1.5}
                  className="rounded-xl overflow-hidden"
                >
                  <SwiperSlide>
                    <CartCard
                      image={item}
                      description="Awesome Product"
                      price="$19.99"
                      rating={4.5}
                      ratingCount={120}
                      onAddToCart={() => alert("Added to cart!")}
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <CartCard
                      image={item}
                      description="Awesome Product"
                      price="$19.99"
                      rating={4.5}
                      ratingCount={120}
                      onAddToCart={() => alert("Added to cart!")}
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <CartCard
                      image={item}
                      description="Awesome Product"
                      price="$19.99"
                      rating={4.5}
                      ratingCount={120}
                      onAddToCart={() => alert("Added to cart!")}
                    />
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Home;
