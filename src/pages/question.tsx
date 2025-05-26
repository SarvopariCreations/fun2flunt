import { useState } from "react";
import bannerImg from "../assets/images/login-bg.jpg";
import firstTime from "../assets/images/first-timer-pole-dancer.svg";
import BasicPole from "../assets/images/basic-pole-dancer.svg";
import Intermediate from "../assets/images/intermediate-pole-dancer.svg";
import Advanced from "../assets/images/advanced-pole-dancer.svg";
import "../App.css";

export default function QuestionPage() {
  const [activeQuestion, setActiveQuestion] = useState(1);
  const [poleExperience, setPoleExperience] = useState("");
  const [poleGoal, setPoleGoal] = useState("");

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
          <h1 className="text-white font-700 flex items-center justify-center text-[32px] md:text-[40px] lg:text-[60px] leading-tight">
            Explore the world of Pole
            <br />
            Dancing from your home
          </h1>
        </div>
      </div>
      {/* Right Question Section */}
      <div className="w-auto lg:w-1/2 flex items-center flex-col justify-start p-6 pt-20 bg-white right-login-bg">
        {/* Top Question Selector */}
        <div className="flex items-center w-full max-w-[415px] mx-auto">
          {/* Question 1 Selector */}
          <label className="flex flex-col items-center cursor-pointer">
            <input
              type="radio"
              name="top-question"
              checked={activeQuestion === 1}
              onChange={() => setActiveQuestion(1)}
              className="peer appearance-none w-5 h-5 rounded-full border-2 border-[#7F7F7F] checked:border-[5px] checked:border-[#F5207C] checked:bg-transparent transition-colors"
            />
            <span
              className={`mt-2 text-[16px] font-medium transition-colors font-700 ${
                activeQuestion === 1 ? "text-[#F5207C]" : "text-[#7F7F7F]"
              }`}
            >
              Question 1
            </span>
          </label>
          {/* Horizontal Dashed Divider */}
          <div className="flex-1 border-t border-dashed border-[#CCCCCC] mx-4"></div>
          {/* Question 2 Selector */}
          <label className="flex flex-col items-center cursor-pointer">
            <input
              type="radio"
              name="top-question"
              checked={activeQuestion === 2}
              onChange={() => setActiveQuestion(2)}
              className="peer appearance-none w-5 h-5 rounded-full border-2 border-[#7F7F7F] checked:border-[5px] checked:border-[#F5207C] checked:bg-transparent transition-colors"
            />
            <span
              className={`mt-2 text-[16px] font-medium transition-colors font-700 ${
                activeQuestion === 2 ? "text-[#F5207C]" : "text-[#7F7F7F]"
              }`}
            >
              Question 2
            </span>
          </label>
        </div>

        {/* First Question */}
        {activeQuestion === 1 && (
          <>
            <div className="flex flex-col items-center mt-[60px] mb-10">
              <label className="w-[164px] h-[22px] text-[16px] leading-[22px] flex items-center text-[#7F7F7F] mb-2 font-500">
                Pole dance experience
              </label>
              <h5 className="w-[581px] h-[130px] font-700 text-[48px] leading-[65px] text-center text-black font-700">
                What is your pole <br /> dancing experience?
              </h5>
            </div>
            <div className="flex flex-col gap-4">
              {/* First timer */}
              <div className="relative">
                <input
                  type="radio"
                  name="pole-experience"
                  id="pole-never"
                  checked={poleExperience === "never"}
                  onChange={() => setPoleExperience("never")}
                  className="peer absolute left-5 top-1/2 -translate-y-1/2 z-10 w-5 h-5 appearance-none rounded-full border-2 border-[#7F7F7F] checked:border-[5px] checked:border-[#F5207C] checked:bg-transparent transition-colors"
                />
                <label
                  htmlFor="pole-never"
                  className="flex flex-row items-center p-5 gap-3 w-[581px] h-[90px] bg-white border border-[#E6E6E6] rounded-[16px] cursor-pointer transition-all pl-12 peer-checked:border-[#F5207C]"
                >
                  <img src={firstTime} alt="First timer" className="w-8 h-8" />
                  <div className="flex flex-col">
                    <span className="text-[20px] font-700 text-[#000000] transition-colors peer-checked:text-[#F5207C]">
                      First timer
                    </span>
                    <span className="text-[14px] text-[#7F7F7F] transition-colors peer-checked:text-[#F5207C] font-500">
                      I've never pole danced before.
                    </span>
                  </div>
                </label>
              </div>
              {/* Basic Pole */}
              <div className="relative">
                <input
                  type="radio"
                  name="pole-experience"
                  id="pole-basic"
                  checked={poleExperience === "basic"}
                  onChange={() => setPoleExperience("basic")}
                  className="peer absolute left-5 top-1/2 -translate-y-1/2 z-10 w-5 h-5 appearance-none rounded-full border-2 border-[#7F7F7F] checked:border-[5px] checked:border-[#F5207C] checked:bg-transparent transition-colors"
                />
                <label
                  htmlFor="pole-basic"
                  className="flex flex-row items-center p-5 gap-3 w-[581px] h-[90px] bg-white border border-[#E6E6E6] rounded-[16px] cursor-pointer transition-all pl-12 peer-checked:border-[#F5207C]"
                >
                  <img src={BasicPole} alt="Basic Pole" className="w-8 h-8" />
                  <div className="flex flex-col">
                    <span className="text-[20px] font-700 text-[#000000] transition-colors peer-checked:text-[#F5207C]">
                      Basic Pole
                    </span>
                    <span className="text-[14px] text-[#7F7F7F] transition-colors peer-checked:text-[#F5207C] font-500">
                      I know basic pole skills like introductory spins & climbs.
                    </span>
                  </div>
                </label>
              </div>
              {/* Intermediate */}
              <div className="relative">
                <input
                  type="radio"
                  name="pole-experience"
                  id="pole-intermediate"
                  checked={poleExperience === "intermediate"}
                  onChange={() => setPoleExperience("intermediate")}
                  className="peer absolute left-5 top-1/2 -translate-y-1/2 z-10 w-5 h-5 appearance-none rounded-full border-2 border-[#7F7F7F] checked:border-[5px] checked:border-[#F5207C] checked:bg-transparent transition-colors"
                />
                <label
                  htmlFor="pole-intermediate"
                  className="flex flex-row items-center p-5 gap-3 w-[581px] h-[90px] bg-white border border-[#E6E6E6] rounded-[16px] cursor-pointer transition-all pl-12 peer-checked:border-[#F5207C]"
                >
                  <img
                    src={Intermediate}
                    alt="Intermediate"
                    className="w-8 h-8"
                  />
                  <div className="flex flex-col">
                    <span className="text-[20px] font-700 text-[#000000] transition-colors peer-checked:text-[#F5207C]">
                      Intermediate
                    </span>
                    <span className="text-[14px] text-[#7F7F7F] transition-colors peer-checked:text-[#F5207C] font-500">
                      I've mastered my spins, climb and I'm now working on
                      inversions.
                    </span>
                  </div>
                </label>
              </div>
              {/* Advanced */}
              <div className="relative">
                <input
                  type="radio"
                  name="pole-experience"
                  id="pole-advanced"
                  checked={poleExperience === "advanced"}
                  onChange={() => setPoleExperience("advanced")}
                  className="peer absolute left-5 top-1/2 -translate-y-1/2 z-10 w-5 h-5 appearance-none rounded-full border-2 border-[#7F7F7F] checked:border-[5px] checked:border-[#F5207C] checked:bg-transparent transition-colors"
                />
                <label
                  htmlFor="pole-advanced"
                  className="flex flex-row items-center p-5 gap-3 w-[581px] h-[90px] bg-white border border-[#E6E6E6] rounded-[16px] cursor-pointer transition-all pl-12 peer-checked:border-[#F5207C]"
                >
                  <img src={Advanced} alt="Advanced" className="w-8 h-8" />
                  <div className="flex flex-col">
                    <span className="text-[20px] font-700 text-[#000000] transition-colors peer-checked:text-[#F5207C]">
                      Advanced
                    </span>
                    <span className="text-[14px] text-[#7F7F7F] transition-colors peer-checked:text-[#F5207C] font-500">
                      I’ve mastered intern moves & can piece together what I’ve
                      learned into routines.
                    </span>
                  </div>
                </label>
              </div>
              <button
                type="button"
                className="w-full h-[52px] bg-[#F5207C] text-white rounded-[16px] flex justify-center items-center gap-3 font-700 mt-10 mb-10 text-md cursor-pointer"
                onClick={() => setActiveQuestion(2)}
                disabled={!poleExperience}
              >
                Next
              </button>
            </div>
          </>
        )}

        {/* Second Question */}
        {activeQuestion === 2 && (
          <>
            <div className="flex flex-col items-center mt-[60px] mb-10">
              <label className="h-[22px] text-[16px] leading-[22px] flex items-center text-[#7F7F7F] mb-2 font-500">
                Fitness Goal
              </label>
              <h5 className="w-[581px] h-[130px] font-700 text-[48px] leading-[65px] text-center text-black font-700">
                What is your primary
                <br /> pole fitness goal?
              </h5>
            </div>
            <div className="flex flex-col gap-4">
              {/* Option 1 */}
              <div className="relative">
                <input
                  type="radio"
                  name="pole-goal"
                  id="goal-fitness"
                  checked={poleGoal === "fitness"}
                  onChange={() => setPoleGoal("fitness")}
                  className="peer absolute left-5 top-1/2 -translate-y-1/2 z-10 w-5 h-5 appearance-none rounded-full border-2 border-[#7F7F7F] checked:border-[5px] checked:border-[#F5207C] checked:bg-transparent transition-colors"
                />
                <label
                  htmlFor="goal-fitness"
                  className="flex flex-row items-center p-5 gap-3 w-[581px] h-[90px] bg-white border border-[#E6E6E6] rounded-[16px] cursor-pointer transition-all pl-12 peer-checked:border-[#F5207C]"
                >
                  <div className="flex flex-col">
                    <span className="text-[20px] font-700 text-[#000000] transition-colors peer-checked:text-[#F5207C]">
                      Build confidence
                    </span>
                  </div>
                </label>
              </div>
              {/* Option 2 */}
              <div className="relative">
                <input
                  type="radio"
                  name="pole-goal"
                  id="goal-fun"
                  checked={poleGoal === "loseWeight"}
                  onChange={() => setPoleGoal("loseWeight")}
                  className="peer absolute left-5 top-1/2 -translate-y-1/2 z-10 w-5 h-5 appearance-none rounded-full border-2 border-[#7F7F7F] checked:border-[5px] checked:border-[#F5207C] checked:bg-transparent transition-colors"
                />
                <label
                  htmlFor="goal-fun"
                  className="flex flex-row items-center p-5 gap-3 w-[581px] h-[90px] bg-white border border-[#E6E6E6] rounded-[16px] cursor-pointer transition-all pl-12 peer-checked:border-[#F5207C]"
                >
                  <div className="flex flex-col">
                    <span className="text-[20px] font-700 text-[#000000] transition-colors peer-checked:text-[#F5207C]">
                      Lose Weight
                    </span>
                  </div>
                </label>
              </div>
              {/* Option 2 */}
              <div className="relative">
                <input
                  type="radio"
                  name="pole-goal"
                  id="goal-fun"
                  checked={poleGoal === "gainStre"}
                  onChange={() => setPoleGoal("gainStre")}
                  className="peer absolute left-5 top-1/2 -translate-y-1/2 z-10 w-5 h-5 appearance-none rounded-full border-2 border-[#7F7F7F] checked:border-[5px] checked:border-[#F5207C] checked:bg-transparent transition-colors"
                />
                <label
                  htmlFor="goal-fun"
                  className="flex flex-row items-center p-5 gap-3 w-[581px] h-[90px] bg-white border border-[#E6E6E6] rounded-[16px] cursor-pointer transition-all pl-12 peer-checked:border-[#F5207C]"
                >
                  <div className="flex flex-col">
                    <span className="text-[20px] font-700 text-[#000000] transition-colors peer-checked:text-[#F5207C]">
                      Gain strength
                    </span>
                  </div>
                </label>
              </div>
              {/* Option 2 */}
              <div className="relative">
                <input
                  type="radio"
                  name="newWork"
                  id="goal-fun"
                  checked={poleGoal === "newWork"}
                  onChange={() => setPoleGoal("newWork")}
                  className="peer absolute left-5 top-1/2 -translate-y-1/2 z-10 w-5 h-5 appearance-none rounded-full border-2 border-[#7F7F7F] checked:border-[5px] checked:border-[#F5207C] checked:bg-transparent transition-colors"
                />
                <label
                  htmlFor="goal-fun"
                  className="flex flex-row items-center p-5 gap-3 w-[581px] h-[90px] bg-white border border-[#E6E6E6] rounded-[16px] cursor-pointer transition-all pl-12 peer-checked:border-[#F5207C]"
                >
                  <div className="flex flex-col">
                    <span className="text-[20px] font-700 text-[#000000] transition-colors peer-checked:text-[#F5207C]">
                      Try a new Workout
                    </span>
                  </div>
                </label>
              </div>
            </div>
            {/* Back & Next Buttons */}
            <div className="flex justify-between w-[581px] mt-10 mb-10 gap-4">
              <button
                type="button"
                className="w-1/2 h-[52px] border border-[#CCCCCC] text-[#F5207C] rounded-[16px] flex justify-center items-center font-700 text-md cursor-pointer hover:bg-[#F5207C] hover:text-white hover:border-[#F5207C] transition-all"
                onClick={() => setActiveQuestion(1)}
              >
                Back
              </button>
              <button
                type="submit"
                className="w-1/2 h-[52px] bg-[#F5207C] text-white rounded-[16px] flex justify-center items-center font-700 text-md cursor-pointer hover:bg-[#c2185b] transition-all"
                disabled={!poleGoal}
              >
                Next
              </button>
            </div>
          </>
        )}

        <div className="text-center text-md text-gray-400 mt-8 relative bottom-4 left-0 w-full">
          © 2025 <span className="text-[#F5207C] font-700">FIT2FLAUNT</span>.
          All Rights Reserved.
        </div>
      </div>
    </div>
  );
}
