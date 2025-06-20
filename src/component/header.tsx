import { useState } from "react";
import {
  FaHome,
  FaCompass,
  FaUsers,
  FaBell,
  FaChevronDown,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import f2fLogo from "../assets/images/f2f-logo.svg";
import home from "../assets/images/home.svg";
import explore from "../assets/images/explore.svg";
import community from "../assets/images/community.svg";
import homeHover from "../assets/images/active-home.svg";
import exploreHover from "../assets/images/explore-bold.svg";
import communityHover from "../assets/images/community-active.svg";
import shop from "../assets/images/cart.svg";
import notification from "../assets/images/notification.svg";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <header className="">
      <div className="w-full mx-auto px-6 py-3 flex justify-between items-center relative">
        {/* Left - Logo */}
        <div className="text-xl font-bold flex-shrink-0 max-w-[144px] cursor-pointer">
          <img src={f2fLogo} alt="f2Fluant" />
        </div>

        {/* Center Navigation */}
        <nav
          className={`${
            menuOpen
              ? "flex absolute top-16 left-0 w-full flex-col bg-gray-800 md:bg-transparent md:static z-10 cursor-pointer"
              : "hidden md:flex"
          } flex-1 justify-center md:items-center md:space-x-6`}
        >
          <NavItem
            icon={<img src={home} alt="Home" className="w-5 h-5" />}
            hoverIcon={<img src={homeHover} alt="Home" className="w-5 h-5" />}
            label="Home"
          />
          <NavItem
            icon={<img src={explore} alt="Home" className="w-5 h-5" />}
            hoverIcon={
              <img src={exploreHover} alt="Home" className="w-5 h-5" />
            }
            label="Explore"
          />
          <NavItem
            icon={<img src={community} alt="Home" className="w-5 h-5" />}
            hoverIcon={<img src={communityHover} alt="Home" className="w-5 h-5" />}
            label="Community"
          />
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-white z-20"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
        </button>

        {/* Right - Actions */}
        <div className="hidden md:flex items-center space-x-4 flex-shrink-0">
          <button className="flex flex-row justify-center items-center px-4 py-2 gap-2 w-[96px] h-[38px] rounded-[12px] border border-[#FA98C3] text-[#F5207C] font-semibold transition box-border cursor-pointer">
            <img src={shop} alt="Home" className="w-5 h-5" /> Shop
          </button>

          <button className="text-white hover:text-gray-300">
            {/* <FaBell size={18} /> */}
            <img src={notification} alt="Home" />
          </button>

          <div className="relative">
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="flex items-center hover:text-gray-700 focus:outline-none"
              id="dropdownDefaultButton"
              aria-expanded={dropdownOpen}
              aria-haspopup="true"
              type="button"
            >
              <span className="relative">
                <img
                  src="https://i.pravatar.cc/30"
                  alt="Profile"
                  className="w-8 h-8 rounded-full"
                />
                <span className="absolute left-[25px] -translate-x-1/2 -bottom-1 bg-white rounded-full p-0.5 shadow w-[14px] h-[14px] flex items-center justify-center">
                  <FaChevronDown className="text-black text-[10px]" />
                </span>
              </span>
            </button>
            {dropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white text-gray-900 rounded-md shadow-lg z-20 border border-gray-200">
                <ul
                  className="py-1 text-sm"
                  aria-labelledby="dropdownDefaultButton"
                >
                  <li>
                    <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                      My Profile
                    </a>
                  </li>
                  <li>
                    <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                      Settings
                    </a>
                  </li>
                  <li>
                    <hr className="my-1 border-gray-200" />
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 hover:bg-gray-100 text-red-600"
                    >
                      Logout
                    </a>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Right Side Actions for Mobile */}
      {menuOpen && (
        <div className="flex flex-col px-4 py-2 md:hidden space-y-2">
          <button className="bg-white text-gray-900 px-4 py-2 rounded-md font-semibold hover:bg-gray-200 transition">
            Shop
          </button>
          <button className="text-white flex items-center space-x-2 hover:text-gray-300">
            <FaBell size={18} />
            <span>Notifications</span>
          </button>
          <div className="relative">
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="flex items-center space-x-2 hover:text-gray-300"
            >
              <img
                src="https://i.pravatar.cc/30"
                alt="Profile"
                className="w-8 h-8 rounded-full"
              />
              <FaChevronDown />
              <span>Profile</span>
            </button>
            {dropdownOpen && (
              <div className="mt-2 w-full bg-white text-gray-900 rounded-md shadow-md z-10">
                <ul className="py-2 text-sm">
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                    My Profile
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                    Settings
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                    Logout
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      )}
    </header>
  );
}

type NavItemProps = {
  icon: React.ReactNode;
  hoverIcon?: React.ReactNode;
  label: string;
};

function NavItem({ icon, hoverIcon, label }: NavItemProps) {
  const [hovered, setHovered] = useState(false);

  return (
    <button
      className="flex items-center space-x-2 px-4 py-2 hover:bg-white hover:text-gray-900 rounded-full transition w-full md:w-auto cursor-pointer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {hoverIcon ? (hovered ? hoverIcon : icon) : icon}
      <span className="text-sm font-medium">{label}</span>
    </button>
  );
}
