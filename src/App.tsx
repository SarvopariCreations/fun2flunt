
import { useState } from "react";
import { FaEye, FaEyeSlash, FaGoogle, FaFacebookF, FaEnvelope, FaLock } from "react-icons/fa";
import f2fLogo from "./assets/images/f2f-logo.svg";
import bannerImg from "./assets/images/login-bg.jpg"
function App() {
  const [showPassword, setShowPassword] = useState(false);
  return (

    <div className="min-h-screen flex">
      {/* Left Banner */}
      <div className="w-1/2 relative hidden lg:block">
        <img src={bannerImg}
          alt="Banner"
          className="w-full h-full object-cover"
        />
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent flex items-end justify-center p-10">
  <h1 className="text-white text-3xl font-bold flex items-center justify-center">
    Explore the world of Pole<br />Dancing from your home
  </h1>
</div>
      </div>

      {/* Right Login */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-6">
        <div className="max-w-md w-full flex flex-col justify-between min-h-[650px]">
          <div className="space-y-6">
            {/* Logo + Heading */}
            <div className="text-center space-y-2">
              <div className="text-2xl font-bold text-blue-600 flex justify-center">
                <img src={f2fLogo} alt="f2f" />
              </div>
              <h2 className="text-xl font-semibold text-gray-800">
                Welcome back!
              </h2>
              <p className="text-sm text-gray-500">Login to continue learning with Fit2Flaunt</p>
            </div>

            {/* Form */}
            <form className="space-y-4">
              {/* Email Input */}
              <div className="flex items-center gap-3 px-4 py-4 max-w-[581px] h-[64px] border border-[#CCCCCC] bg-white rounded-[16px] text-[#7F7F7F]">
                <FaEnvelope />
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full outline-none text-sm"
                />
              </div>

              {/* Password Input */}
              <div className="flex items-center gap-3 px-4 py-4 max-w-[581px] h-[64px] border border-[#CCCCCC] bg-white rounded-[16px] text-[#7F7F7F] relative">
                <FaLock />
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  className="w-full outline-none text-sm"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 text-gray-500"
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>

              {/* Forgot Password */}
              <div className="text-right text-sm text-[#7F7F7F]">
                <a href="#" className="hover:underline">
                  Forgot Password?
                </a>
              </div>

              {/* Login Button */}
              <button
                type="submit"
                className="w-full w-[581px] h-[52px] bg-[#F5207C] text-white rounded-[16px] flex justify-center items-center gap-3 font-semibold"
              >
                Login
              </button>
            </form>

            {/* OR Divider */}
            <div className="flex items-center gap-4">
              <div className="flex-grow h-px bg-gray-300" />
              <span className="text-sm text-gray-500">OR</span>
              <div className="flex-grow h-px bg-gray-300" />
            </div>

            {/* Social Buttons */}
            <div className="flex gap-4">
              <button className="w-[284.5px] h-[52px] bg-[rgba(52,168,83,0.1)] rounded-[16px] flex justify-center items-center gap-3">
                <FaGoogle className="text-[#34A853]" />
              </button>
              <button className="w-[284.5px] h-[52px] bg-[rgba(24,119,242,0.1)] rounded-[16px] flex justify-center items-center gap-3">
                <FaFacebookF className="text-[#1877F2]" />
              </button>
            </div>

            {/* Signup Text */}
            <p className="text-center text-[16px] leading-[22px] font-medium text-[rgba(0,0,0,0.5)]">
              Don’t have an account?{" "}
              <a href="#" className="text-blue-600 hover:underline">
                Sign Up
              </a>
            </p>
          </div>
          <div className="text-center text-xs text-gray-400 mt-8">
            © 2025 FIT2FLAUNT. All Rights Reserved.
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
