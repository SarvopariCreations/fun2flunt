import { useState } from "react";
import Header from "../component/header";
import HorizontalMenu from "../component/HorizontalMenu";
import search from "../assets/images/search.svg";
import user from "../assets/images/user.svg";
import atSign from "../assets/images/at-sign.svg";
import email from "../assets/images/email.svg";
import Card from "../component/Card";
import vImg from "../assets/images/video-1.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import lock from "../assets/images/lock.svg";
import f2fLogo from "../assets/images/f2f-logo.svg";
import SubscriptionCancelModal from "../component/subscriptionModal"; // <-- Import the modal

const menuItems = [
  { name: "Profile Details", link: "/explore" },
  { name: "My Programs", link: "/trending" },
  { name: "Mastered Skills", link: "/new" },
  { name: "My Subscriptions", link: "/new" },
  { name: "Change Password", link: "/new" },
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
function Profile() {
  const [accordionOpen, setAccordionOpen] = useState(false);
  const [showCurrent, setShowCurrent] = useState(false);
  const [showNew, setShowNew] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [showCancelModal, setShowCancelModal] = useState(false); // <-- Add modal state

  return (
    <div className="top-bg min-h-screen">
      <Header />
      <div className="explore-container w-full px-4 sm:px-6 py-4">
        <h1 className="text-2xl md:text-3xl font-bold mb-[20px]">My Profile</h1>
        <div className="border-b-2 border-[#E6E6E6] mb-4 flex flex-row justify-between">
          <HorizontalMenu items={menuItems} />
        </div>
      </div>
      <div className="box-border flex flex-col items-start p-10 gap-10 w-[920px] h-[500px] bg-white border border-[#EBEBEB] rounded-[12px] flex-none order-1 flex-grow-0 m-auto">
        <div className="text-[24px] text-black font-700">Profile Details</div>
        <div className="flex items-center gap-6 w-full">
          <div className="relative">
            <img
              src="https://randomuser.me/api/portraits/men/32.jpg"
              alt="Profile"
              className="w-[120px] h-[120px] rounded-full object-cover border-2 border-[#F5207C] shadow-[0_5px_5px_#D9D9D9]"
            />
            <button className="absolute bottom-1 right-1 bg-[#F5207C] border border-[#F5207C] rounded-full p-1 shadow hover:bg-gray-100">
              {/* Camera Icon SVG */}
              <svg width="20" height="20" fill="none" viewBox="0 0 24 24">
                <path
                  d="M12 17a4 4 0 100-8 4 4 0 000 8z"
                  stroke="#ffffff"
                  strokeWidth="1.5"
                />
                <path
                  d="M4 7h2.2a1 1 0 00.92-.606l.72-1.594A2 2 0 019.62 3.5h4.76a2 2 0 011.78 1.3l.72 1.594A1 1 0 0017.8 7H20a2 2 0 012 2v9a2 2 0 01-2 2H4a2 2 0 01-2-2V9a2 2 0 012-2z"
                  stroke="#ffffff"
                  strokeWidth="1.5"
                />
              </svg>
            </button>
          </div>
          <div>
            <div className="text-[20px] font-700 text-black">Camila Jacobs</div>
          </div>
        </div>

        <div className="flex flex-col gap-6 w-full">
          {/* Row 2: Input fields */}
          <div className="flex flex-row gap-6 w-full">
            {/* First Name */}
            <div className="relative flex-1">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                <img src={user} alt="User Icon" className="w-4 h-4" />
              </span>
              <input
                type="text"
                placeholder="First Name"
                className="box-border flex flex-row items-start ps-10 pe-5 py-[14px] gap-3 w-[414px] h-12 bg-white border border-[#E6E6E6] rounded-[16px] flex-none order-0 flex-grow"
              />
            </div>
            {/* Last Name */}
            <div className="relative flex-1">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                <img src={user} alt="User Icon" className="w-4 h-4" />
              </span>
              <input
                type="text"
                placeholder="Last Name"
                className="box-border flex flex-row items-start ps-10 pe-5 py-[14px] gap-3 w-[414px] h-12 bg-white border border-[#E6E6E6] rounded-[16px] flex-none order-0 flex-grow"
              />
            </div>
          </div>
          <div className="flex flex-row gap-6 w-full">
            {/* Instagram Handle */}
            <div className="relative flex-1">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                <img src={atSign} alt="User Icon" className="w-4 h-4" />
              </span>
              <input
                type="text"
                placeholder="Instagram Handle"
                className="box-border flex flex-row items-start ps-10 pe-5 py-[14px] gap-3 w-[414px] h-12 bg-white border border-[#E6E6E6] rounded-[16px] flex-none order-0 flex-grow"
              />
            </div>
            {/* Email */}
            <div className="relative flex-1">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                {/* Email Icon */}
                <img src={email} alt="User Icon" className="w-4 h-4" />
              </span>
              <input
                type="email"
                placeholder="Email"
                className="box-border flex flex-row items-start ps-10 pe-5 py-[14px] gap-3 w-[414px] h-12 bg-white border border-[#E6E6E6] rounded-[16px] flex-none order-0 flex-grow"
              />
            </div>
          </div>
        </div>

        {/* Row 3: Save Button */}
        <div className="flex w-full justify-start">
          <button className="px-8 py-2 bg-[#F5207C] text-white rounded-lg font-bold hover:bg-[#d81b6a] transition">
            Save
          </button>
        </div>
      </div>
      <div className="flex justify-center mt-10 flex-col items-center">
        <div className="w-full px-6 mb-4">
          <nav className="w-max bg-white mx-auto rounded-2xl h-[30px] border border-[#EBEBEB] px-1">
            <ul className="flex flex-row gap-3 justify-center items-center h-[100%]">
              <li>
                <a
                  href="#"
                  className="text-sm flex items-center px-2 text-white border-1 bg-[#F5207C] rounded-3xl h-[100%]"
                >
                  Current
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm flex items-center px-2 text-[#757575] hover:text-white  border-1 border-transparent hover:bg-[#F5207C] transition  rounded-3xl h-[100%] "
                >
                  Completed
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="w-full px-6">
          <div className="flex flex-col items-center justify-center bg-white rounded-2xl p-6 shadow-md">
            {/* Classes Section */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-3 gap-5 w-[100%]">
              {RecommendedCard.map((card, idx) => (
                <Card key={idx} {...card} />
              ))}
            </div>
            {/* Completed Section  */}
            <div className="flex flex-col items-center justify-center bg-white mt-8">
              <div className="mb-3 p-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-14 h-14 text-[#F5207C]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 7a2 2 0 012-2h3.172a2 2 0 011.414.586l1.828 1.828A2 2 0 0012.828 8H19a2 2 0 012 2v7a2 2 0 01-2 2H5a2 2 0 01-2-2V7z"
                  />
                </svg>
              </div>
              <div className="font-700 text-lg text-center mb-1">
                Looks like you haven't finished any programs yet
              </div>
              <p className="text-[#757575] text-center mb-8">
                {" "}
                Don't worry—there's plenty of time to get started and achieve
                your fitness goals!
              </p>
              <button className="flex flex-row justify-center items-center px-6 py-3 gap-3 w-[343px] h-12 bg-[#F5207C] rounded-[16px] text-white font-700 hover:bg-[#d81b6a] transition flex-none order-1 flex-grow-0">
                Explore Programs
              </button>
            </div>
          </div>
        </div>

        {/* Completed Section  */}
        <div className="w-full p-6 flex flex-col gap-6">
          <div className="w-full box-border bg-white border border-[#EBEBEB] rounded-[12px] p-6">
            <div className="flex items-start justify-between mb-[15px]">
              <h2 className="text-[20px] font-700">Beginners</h2>
              <div className="flex items-center gap-2 text-base font-semibold text-[#F5207C] cursor-pointer"></div>
            </div>
            <div className="relative w-full mx-auto">
              <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                navigation
                pagination={{ clickable: true }}
                autoplay={true}
                loop={false}
                spaceBetween={20}
                slidesPerView={6}
                className="rounded-xl overflow-hidden"
              >
                <SwiperSlide>
                  <div className="cursor-pointer">
                    <Card
                      image={vImg}
                      label="Beginner"
                      name="Pole Basics"
                      timeSlot="4 Weeks • 12 Classes"
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="cursor-pointer">
                    <Card
                      image={vImg}
                      label="Beginner"
                      name="Pole Basics"
                      timeSlot="4 Weeks • 12 Classes"
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="cursor-pointer">
                    <Card
                      image={vImg}
                      label="Beginner"
                      name="Pole Basics"
                      timeSlot="4 Weeks • 12 Classes"
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="cursor-pointer">
                    <Card
                      image={vImg}
                      label="Beginner"
                      name="Pole Basics"
                      timeSlot="4 Weeks • 12 Classes"
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="cursor-pointer">
                    <Card
                      image={vImg}
                      label="Beginner"
                      name="Pole Basics"
                      timeSlot="4 Weeks • 12 Classes"
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="cursor-pointer">
                    <Card
                      image={vImg}
                      label="Beginner"
                      name="Pole Basics"
                      timeSlot="4 Weeks • 12 Classes"
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="cursor-pointer">
                    <Card
                      image={vImg}
                      label="Beginner"
                      name="Pole Basics"
                      timeSlot="4 Weeks • 12 Classes"
                    />
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>

          <div className="w-full box-border bg-white border border-[#EBEBEB] rounded-[12px] p-6">
            <div className="flex items-start justify-between mb-[15px]">
              <h2 className="text-[20px] font-700">Intermediate</h2>
              <div className="flex items-center gap-2 text-base font-semibold text-[#F5207C] cursor-pointer"></div>
            </div>
            <div className="relative w-full mx-auto">
              <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                navigation
                pagination={{ clickable: true }}
                autoplay={true}
                loop={false}
                spaceBetween={20}
                slidesPerView={6}
                className="rounded-xl overflow-hidden"
              >
                <SwiperSlide>
                  <div className="cursor-pointer">
                    <Card
                      image={vImg}
                      label="Beginner"
                      name="Pole Basics"
                      timeSlot="4 Weeks • 12 Classes"
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="cursor-pointer">
                    <Card
                      image={vImg}
                      label="Beginner"
                      name="Pole Basics"
                      timeSlot="4 Weeks • 12 Classes"
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="cursor-pointer">
                    <Card
                      image={vImg}
                      label="Beginner"
                      name="Pole Basics"
                      timeSlot="4 Weeks • 12 Classes"
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="cursor-pointer">
                    <Card
                      image={vImg}
                      label="Beginner"
                      name="Pole Basics"
                      timeSlot="4 Weeks • 12 Classes"
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="cursor-pointer">
                    <Card
                      image={vImg}
                      label="Beginner"
                      name="Pole Basics"
                      timeSlot="4 Weeks • 12 Classes"
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="cursor-pointer">
                    <Card
                      image={vImg}
                      label="Beginner"
                      name="Pole Basics"
                      timeSlot="4 Weeks • 12 Classes"
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="cursor-pointer">
                    <Card
                      image={vImg}
                      label="Beginner"
                      name="Pole Basics"
                      timeSlot="4 Weeks • 12 Classes"
                    />
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </div>
      <div className="box-border flex flex-col items-start p-10 gap-6 max-w-[900px] bg-white border border-[#EBEBEB] rounded-[12px] flex-none order-1 flex-grow-0 m-auto">
        <div className="text-[24px] text-black font-700 mb-2">
          Change Password
        </div>
        {/* Current Password */}
        <div className="relative w-full">
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
            <img src={lock} alt="Lock Icon" className="w-4 h-4" />
          </span>
          <input
            type={showCurrent ? "text" : "password"}
            placeholder="Current Password"
            className="box-border flex flex-row items-start ps-10 pe-10 py-[14px] gap-3 w-full h-12 bg-white border border-[#E6E6E6] rounded-[16px] flex-none order-0 flex-grow"
          />
          <button
            type="button"
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
            onClick={() => setShowCurrent((v) => !v)}
            tabIndex={-1}
          >
            {showCurrent ? (
              // Eye open SVG
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                />
              </svg>
            ) : (
              // Eye closed SVG
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.542-7a9.956 9.956 0 012.293-3.95M6.7 6.7A9.956 9.956 0 0112 5c4.478 0 8.268 2.943 9.542 7a9.97 9.97 0 01-4.293 5.03M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 3l18 18"
                />
              </svg>
            )}
          </button>
        </div>
        {/* New Password */}
        <div className="relative w-full">
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
            <img src={lock} alt="Lock Icon" className="w-4 h-4" />
          </span>
          <input
            type={showNew ? "text" : "password"}
            placeholder="New Password"
            className="box-border flex flex-row items-start ps-10 pe-10 py-[14px] gap-3 w-full h-12 bg-white border border-[#E6E6E6] rounded-[16px] flex-none order-0 flex-grow"
          />
          <button
            type="button"
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
            onClick={() => setShowNew((v) => !v)}
            tabIndex={-1}
          >
            {showNew ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.542-7a9.956 9.956 0 012.293-3.95M6.7 6.7A9.956 9.956 0 0112 5c4.478 0 8.268 2.943 9.542 7a9.97 9.97 0 01-4.293 5.03M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 3l18 18"
                />
              </svg>
            )}
          </button>
        </div>
        {/* Confirm New Password */}
        <div className="relative w-full">
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
            <img src={lock} alt="Lock Icon" className="w-4 h-4" />
          </span>
          <input
            type={showConfirm ? "text" : "password"}
            placeholder="Confirm New Password"
            className="box-border flex flex-row items-start ps-10 pe-10 py-[14px] gap-3 w-full h-12 bg-white border border-[#E6E6E6] rounded-[16px] flex-none order-0 flex-grow"
          />
          <button
            type="button"
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
            onClick={() => setShowConfirm((v) => !v)}
            tabIndex={-1}
          >
            {showConfirm ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.542-7a9.956 9.956 0 012.293-3.95M6.7 6.7A9.956 9.956 0 0112 5c4.478 0 8.268 2.943 9.542 7a9.97 9.97 0 01-4.293 5.03M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 3l18 18"
                />
              </svg>
            )}
          </button>
        </div>
        {/* Password requirements */}
        <div className="text-sm text-[#000000] mb-4">
          Your password must be at least 8 characters. Include multiple words
          and phrases to make it more secure.
        </div>
        {/* Save Button */}
        <div className="flex w-full justify-start">
          <button className="px-8 py-3 bg-[#F5207C] text-white rounded-2xl font-700 hover:bg-[#d81b6a] transition cursor-pointer">
            Save
          </button>
        </div>
      </div>
      <div className="box-border flex flex-col items-start p-10 gap-6 max-w-[900px] bg-white border border-[#EBEBEB] rounded-[12px] flex-none order-1 flex-grow-0 m-auto mt-8">
        {/* Row: Heading and Actions */}
        <div className="flex w-full items-center justify-between mb-6">
          <h2 className="text-[24px] text-black font-700">My Subscriptions</h2>
          <div className="flex gap-4">
            <button className="text-[#F5207C] font-700 cursor-pointer">
              Manage Plans
            </button>
            <button
              className="text-[#FC4949] hover:text-[#F5207C] font-700 cursor-pointer"
              onClick={() => setShowCancelModal(true)}
            >
              Cancel Subscription
            </button>
          </div>
        </div>
        {/* Subscription Details */}
        <div className="flex w-full items-start justify-between bg-[#F9F9F9] border border-[#EBEBEB] rounded-xl px-8 py-6">
          {/* Left: Logo and Name */}
          <div className="flex flex-col items-start gap-4">
            <img
              src={f2fLogo}
              alt="f2Fluant"
              className="h-[32px] object-contain"
            />
            <div>
              <div className="text-xs text-[#757575]">Fit2Flaunt</div>
              <div className="text-[20px] font-bold text-black">$19.99</div>
              <div className="text-xs text-[#757575]">1 Month Plan</div>
            </div>
          </div>
          {/* Center: Price */}
          {/* Right: Status */}
          <div className="flex flex-col items-end gap-2">
            <button className="px-3 py-1 border border-[#F5207C] text-black rounded-full font-500 hover:bg-[#d81b6a] transition cursor-pointer text-sm hover:text-white">
              Active
            </button>
            <div className="flex items-end gap-2 flex-col justify-end mt-7">
              <span className="text-green-600 font-medium text-sm flex flex-row gap-1">
                {" "}
                <svg
                  className="w-5 h-5 text-green-500"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                Paid
              </span>
              <span className="text-[#757575] text-xs ml-2">
                Paid on: 2025-06-01
              </span>
            </div>
          </div>
        </div>

        <div className="w-full">
          <div className="flex flex-wrap md:flex-nowrap justify-between items-center gap-6">
            <div className="flex flex-col">
              <span className="text-sm text-[#757575] font-500">Validity</span>
              <span className="text-[20px] text-black font-700">1 Month</span>
            </div>
            <div className="flex flex-col">
              <span className="text-sm text-[#757575] font-500">
                Price/month
              </span>
              <span className="text-[20px] text-black font-700">$19.99</span>
            </div>
            <div className="flex flex-col">
              <span className="text-sm text-[#757575] font-500">Paid on</span>
              <span className="text-[20px] text-black font-700">
                May 30, 2024
              </span>
            </div>
            <div className="flex flex-col">
              <span className="text-sm text-[#757575] font-500">Due Date</span>
              <span className="text-[20px] text-black font-700">
                June 30, 2024
              </span>
            </div>
          </div>
        </div>
      </div>
      {/* Accordion for All Plans */}
      <div className="box-border flex flex-col items-start gap-6 max-w-[900px] bg-white border border-[#EBEBEB] rounded-[12px] flex-none order-1 flex-grow-0 m-auto mt-8 mb-8">
        {/* Accordion Header */}
        <button
          type="button"
          className="w-full flex justify-between items-center px-6 py-4 rounded-lg"
          onClick={() => setAccordionOpen((prev) => !prev)}
        >
          <span className="text-[24px] font-bold text-black">
            Subscription History
          </span>
          <svg
            className={`w-5 h-5 ml-4 transition-transform duration-200 ${
              accordionOpen ? "rotate-180" : ""
            }`}
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>
        {/* Accordion Content */}
        {accordionOpen && (
          <div className="bg-white border-x border-[#EBEBEB] rounded-b-lg py-0 w-[100%] px-6 gap-3">
            <div className="flex justify-between items-center px-6 py-4 border border-[#E6E6E6] mb-3 rounded-2xl">
              <div>
                <div className="text-lg font-bold text-black">$19.99</div>
                <div className="text-xs text-[#757575]">1 Month Plan</div>
              </div>
              <div className="flex flex-col items-end">
                <span className="text-green-600 font-medium text-sm flex items-center gap-1">
                  <svg
                    className="w-5 h-5 text-green-500"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  Paid
                </span>
                <span className="text-xs text-[#757575]">
                  Paid on: 2025-06-01
                </span>
              </div>
            </div>

            <div className="flex justify-between items-center px-6 py-4 border border-[#E6E6E6] mb-3 rounded-2xl">
              <div>
                <div className="text-lg font-bold text-black">$49.99</div>
                <div className="text-xs text-[#757575]">3 Month Plan</div>
              </div>
              <div className="flex flex-col items-end">
                <span className="text-green-600 font-medium text-sm flex items-center gap-1">
                  <svg
                    className="w-5 h-5 text-green-500"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  Paid
                </span>
                <span className="text-xs text-[#757575]">
                  Paid on: 2025-03-01
                </span>
              </div>
            </div>

            <div className="flex justify-between items-center px-6 py-4 border border-[#E6E6E6] mb-7 rounded-2xl">
              <div>
                <div className="text-lg font-bold text-black">$99.99</div>
                <div className="text-xs text-[#757575]">6 Month Plan</div>
              </div>
              <div className="flex flex-col items-end">
                <span className="text-green-600 font-medium text-sm flex items-center gap-1">
                  <svg
                    className="w-5 h-5 text-green-500"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  Paid
                </span>
                <span className="text-xs text-[#757575]">
                  Paid on: 2024-12-01
                </span>
              </div>
            </div>
          </div>
        )}
      </div>
      <SubscriptionCancelModal
        open={showCancelModal}
        onClose={() => setShowCancelModal(false)}
        onSubmit={() => {
          // Do NOT call setFeedbackOpen(false) here!
          // Just handle feedback data if needed.
        }}
      />
    </div>
  );
}
export default Profile;
