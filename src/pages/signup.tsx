import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import f2fLogo from "../assets/images/f2f-logo.svg";
import bannerImg from "../assets/images/login-bg.jpg";
import user from "../assets/images/user.svg";
import mail from "../assets/images/mail.svg";
import password from "../assets/images/lock.svg";
import google from "../assets/images/g-icon.svg";
import facebook from "../assets/images/fb-icon.svg";
import userImg from "../assets/images/user-img.png";
import rightArrow from "../assets/images/arrow-right.svg";
import "../App.css";

function SignUp() {
  const [showPassword, setShowPassword] = useState(false);
  const [showVerify, setShowVerify] = useState(false);
  const [otp, setOtp] = useState(["", "", "", ""]);

  // Handle OTP input change
  const handleOtpChange = (e, idx) => {
    const value = e.target.value.replace(/[^0-9]/g, "");
    if (value.length > 1) return;
    const newOtp = [...otp];
    newOtp[idx] = value;
    setOtp(newOtp);
    // Move to next input if value entered
    if (value && idx < 3) {
      document.getElementById(`otp-input-${idx + 1}`)?.focus();
    }
  };

  // Handle backspace to move to previous input
  const handleOtpKeyDown = (e, idx) => {
    if (e.key === "Backspace" && !otp[idx] && idx > 0) {
      document.getElementById(`otp-input-${idx - 1}`)?.focus();
    }
  };

  return (
    <div className="min-h-screen flex">
      {/* Left Banner */}
      <div className="w-1/2 relative hidden lg:block">
        <img
          src={bannerImg}
          alt="Banner"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/100 via-black/50 to-transparent flex items-end justify-center p-10">
          <h1 className="text-white font-bold flex items-center justify-center text-[32px] md:text-[40px] lg:text-[60px] leading-tight">
            Explore the world of Pole
            <br />
            Dancing from your home
          </h1>
        </div>
      </div>
      {/* Right Login */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-6 pt-20 right-login-bg">
        <div className="max-w-[581px] w-full flex flex-col justify-between min-h-[100%]">
          <div className="space-y-6">
            {!showVerify && (
              <div className="text-center space-y-2 mb-[60px] md:mb-[60px] sm:mb-[40px]">
                <div className="text-2xl font-bold text-blue-600 flex justify-center mb-[70px] md:mb-[70px] sm:mb-[40px]">
                  <img src={f2fLogo} alt="f2f" />
                </div>
                <h2 className="font-bold text-black text-[28px] sm:text-[40px] lg:text-[60px] leading-tight font-700">
                  Hello there!
                </h2>
                <p className="text-sm text-gray-400 text-[16px] sm:text-[20px] lg:text-[24px]">
                  Create your new account to start learning today!
                </p>
              </div>
            )}
            {!showVerify ? (
              <form
                className="space-y-4 mt-16"
                onSubmit={(e) => {
                  e.preventDefault();
                  setShowVerify(true);
                }}
              >
                {/* Email Input */}
                <div className="flex items-center gap-3 px-4 py-4 max-w-[581px] h-[64px] border border-[#CCCCCC] bg-white rounded-[16px] text-[#000000] input-parent">
                  <img src={user} alt="f2f" />
                  <input
                    type="text"
                    placeholder="First Name"
                    className="w-full outline-none text-md placeholder-[#7F7F7F]"
                  />
                </div>

                {/* Email Input */}
                <div className="flex items-center gap-3 px-4 py-4 max-w-[581px] h-[64px] border border-[#CCCCCC] bg-white rounded-[16px] text-[#000000] input-parent">
                  <img src={mail} alt="f2f" />
                  <input
                    type="email"
                    placeholder="Email"
                    className="w-full outline-none text-md placeholder-[#7F7F7F]"
                  />
                </div>

                {/* Password Input */}
                <div className="flex items-center gap-3 px-4 py-4 max-w-[581px] h-[64px] border border-[#CCCCCC] bg-white rounded-[16px] text-[#000000] relative input-parent">
                  <img src={password} alt="f2f" />
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Password"
                    className="w-full outline-none text-md placeholder-[#7F7F7F]"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 text-gray-500 cursor-pointer"
                  >
                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                  </button>
                </div>

                {/* Receive Updates Checkbox */}
                <div className="flex items-center mb-2 cursor-pointer">
                  <input
                    type="checkbox"
                    id="receive-updates"
                    className="mr-2 accent-[#F5207C] w-[14px] h-[14px] rounded border border-[#CCCCCC] bg-white cursor-pointer"
                  />
                  <label
                    htmlFor="receive-updates"
                    className="text-[14px] text-[#757575] select-none cursor-pointer"
                  >
                    Receive the latest updates in your inbox!
                  </label>
                </div>

                {/* Accept Terms Checkbox */}
                <div className="flex items-center mb-4 cursor-pointer">
                  <input
                    type="checkbox"
                    id="accept-terms"
                    className="mr-2 accent-[#F5207C] w-[14px] h-[14px] rounded border border-[#CCCCCC] bg-white"
                  />
                  <label
                    htmlFor="accept-terms"
                    className="text-[14px] text-[#757575] select-none cursor-pointer"
                  >
                    By creating an account, I accept the{" "}
                    <a
                      href="#"
                      className="text-[#F5207C] hover:underline font-bold cursor-pointer"
                    >
                      Terms &amp; Conditions.
                    </a>
                  </label>
                </div>

                {/* Login Button */}
                <button
                  type="submit"
                  className="w-full h-[52px] bg-[#F5207C] text-white rounded-[16px] flex justify-center items-center gap-3 font-bold mt-10 mb-10 text-md cursor-pointer"
                >
                  Sign Up
                </button>
              </form>
            ) : (
              // Verify Section
              <div className="flex flex-col items-center justify-center mt-16 space-y-8">
                <div className="text-center space-y-2 mb-[60px] md:mb-[60px] sm:mb-[40px]">
                  <div className="text-2xl font-bold text-blue-600 flex justify-center mb-[70px] md:mb-[70px] sm:mb-[40px]">
                    <img src={f2fLogo} alt="f2f" />
                  </div>
                  <h2 className="font-bold text-black text-[28px] sm:text-[40px] lg:text-[60px] leading-tight font-700">
                    Verify your email
                  </h2>
                  <p className="text-sm text-gray-400 text-[16px] sm:text-[20px] lg:text-[24px]">
                    Please enter the 4-digit code sent to <br />
                    <span className="font-500 text-[#F5207C]">
                      camila.jac@gmail.com
                    </span>
                  </p>
                </div>
                {/* OTP Inputs */}
                <div className="flex flex-row gap-4 justify-center mb-10">
                  {otp.map((digit, idx) => (
                    <input
                      key={idx}
                      id={`otp-input-${idx}`}
                      type="text"
                      inputMode="numeric"
                      maxLength={1}
                      value={digit}
                      onChange={(e) => handleOtpChange(e, idx)}
                      onKeyDown={(e) => handleOtpKeyDown(e, idx)}
                      className="w-[25%] h-[80px] pt-[30px] pr-4 pb-[30px] pl-4 rounded-[16px] border border-[#CCCCCC] text-center text-3xl font-bold outline-none"
                    />
                  ))}
                </div>
                {/* Buttons */}
                <div className="flex flex-row gap-4 w-full">
                  <button
                    type="button"
                    onClick={() => setShowVerify(false)}
                    className="w-1/2 h-[52px] border border-[#CCCCCC] text-[#F5207C] rounded-[16px] flex justify-center items-center gap-3 font-bold text-md cursor-pointer hover:bg-[#F5207C] hover:text-[white] hover:border-[#F5207C] transition"
                  >
                    Back
                  </button>
                  <button
                    type="button"
                    className="w-1/2 h-[52px] bg-[#F5207C] text-white rounded-[16px] flex justify-center items-center gap-3 font-bold text-md cursor-pointer transition"
                  >
                    Verify Email
                  </button>
                </div>
              </div>
            )}

            {/* Already logged in section */}
            <div className="already-logged-in-user hidden">
              <div className="flex items-center justify-between px-4 py-3 gap-3 w-[100%] h-[70px] bg-[#FFF0F7] border border-[#FFD2E5] rounded-[16px] mx-auto">
                <img
                  src={userImg}
                  alt="User"
                  className="w-10 h-10 rounded-full object-cover flex-none"
                  style={{ order: 0, flexGrow: 0 }}
                />
                <div className="flex flex-col flex-1 ml-3">
                  <span className="font-bold text-base text-black leading-tight">
                    Camila Jacobs
                  </span>
                  <span className="text-sm text-[#7F7F7F] leading-tight">
                    @camilajac
                  </span>
                </div>
                <img
                  src={rightArrow}
                  alt="arrow"
                  className="w-6 h-6 flex-none ml-3"
                  style={{ order: 2, flexGrow: 0 }}
                />
              </div>
              {/* OR Divider */}
              <div className="flex items-center gap-4 mt-10 mb-10 ">
                <div className="flex-grow h-px bg-gray-300" />
                <span className="text-sm text-gray-500">Or continue with</span>
                <div className="flex-grow h-px bg-gray-300" />
              </div>
              <button
                type="submit"
                className="w-full h-[52px] border border-[#CCCCCC] text-[#F5207C] rounded-[16px] flex justify-center items-center gap-3 font-bold text-md cursor-pointer hover:bg-[#F5207C] hover:text-[white] hover:border-[#F5207C]"
              >
                Use Another Account
              </button>
            </div>
            {/* End Already logged in section */}

            {/* OR Divider */}
            {!showVerify && (
              <div className="flex items-center gap-4">
                <div className="flex-grow h-px bg-gray-300" />
                <span className="text-sm text-gray-500">Or continue with</span>
                <div className="flex-grow h-px bg-gray-300" />
              </div>
            )}

            {/* Social Buttons */}
            {!showVerify && (
              <div>
                <div className="flex gap-4">
                  <button className="w-[284.5px] h-[52px] bg-[rgba(52,168,83,0.1)] rounded-[16px] flex justify-center items-center gap-3 cursor-pointer">
                    <img src={google} alt="google" />
                  </button>
                  <button className="w-[284.5px] h-[52px] bg-[rgba(24,119,242,0.1)] rounded-[16px] flex justify-center items-center gap-3 cursor-pointer">
                    <img src={facebook} alt="facebook" />
                  </button>
                </div>

                <p className="text-center text-[16px] leading-[22px] font-bold text-[rgba(0,0,0,0.5)] mt-6">
                  Already have an account?{" "}
                  <a
                    href="#"
                    className="text-[#F5207C] hover:underline font-bold"
                  >
                    Login
                  </a>
                </p>
              </div>
            )}

            {showVerify && (
              <p className="text-center text-[16px] leading-[22px] font-bold text-[rgba(0,0,0,0.5)]">
                Didn’t receive the code?{" "}
                <a
                  href="#"
                  className="text-[#F5207C] hover:underline font-bold"
                >
                  Resend
                </a>
              </p>
            )}
          </div>
          <div className="text-center text-md text-gray-400 mt-8 relative bottom-4 left-0 w-full">
            © 2025 <span className="text-[#F5207C] font-bold">FIT2FLAUNT</span>.
            All Rights Reserved.
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;