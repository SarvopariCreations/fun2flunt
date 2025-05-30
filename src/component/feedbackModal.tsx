import React, { useState } from "react";
import favorite from "../assets/images/favorite.svg";

interface FeedbackModalProps {
  open: boolean;
  onClose: () => void;
  onSubmit: (thumb: "up" | "down", rating: string, feedback: string) => void;
}

const FeedbackModal: React.FC<FeedbackModalProps> = ({
  open,
  onClose,
  onSubmit,
}) => {
  const [step, setStep] = useState(1);
  const [thumb, setThumb] = useState<"up" | "down" | null>(null);
  const [rating, setRating] = useState("");
  const [feedback, setFeedback] = useState("");

  const handleClose = () => {
    setStep(1);
    setThumb(null);
    setRating("");
    setFeedback("");
    onClose();
  };

  const handleSubmit = () => {
    onSubmit(thumb!, rating, feedback);
    setStep(3);
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#000000ba] bg-opacity-50 transition-opacity bg-opacity-50 transition-opacity">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-lg mx-4 p-6 relative">
        {step === 3 && (
          <button
            onClick={handleClose}
            className="absolute -top-[0px] -right-[46px] text-white hover:text-white text-2xl w-10 h-10 gap-2.5 rounded-full p-1.5 flex items-center justify-center bg-black bg-opacity-50 cursor-pointer"
            aria-label="Close"
          >
            ×
          </button>
        )}
        {step === 1 && (
          <div>
            <div className="font-700 text-lg mb-2 text-center text-[20px]">
              You've Completed the Video - We'd Love to Hear About Your
              Experience!
            </div>
            <div className="flex justify-center gap-8 my-10">
              <button
                className="flex flex-col items-center focus:outline-none group"
                onClick={() => {
                  setThumb("up");
                  setStep(2);
                }}
              >
                <span
                  className={`
      flex items-start justify-center
      w-[52px] h-[52px] p-[14px]
      border rounded-full
      transition
      cursor-pointer
      ${
        thumb === "up"
          ? "bg-[#FFF0F7] border-[#F5207C] order-1"
          : "bg-white border-[#E6E6E6] order-0 hover:bg-[#FFF0F7] hover:border-[#F5207C]"
      }
    `}
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7.47998 18.3505L10.58 20.7505C10.98 21.1505 11.88 21.3505 12.48 21.3505H16.28C17.48 21.3505 18.78 20.4505 19.08 19.2505L21.48 11.9505C21.98 10.5505 21.08 9.35046 19.58 9.35046H15.58C14.98 9.35046 14.48 8.85046 14.58 8.15046L15.08 4.95046C15.28 4.05046 14.68 3.05046 13.78 2.75046C12.98 2.45046 11.98 2.85046 11.58 3.45046L7.47998 9.55046"
                      stroke={thumb === "up" ? "#F5207C" : undefined}
                      className={`
          transition
          ${
            thumb !== "up"
              ? "stroke-[#E6E6E6] group-hover:stroke-[#F5207C]"
              : ""
          }
        `}
                      strokeWidth="1.5"
                      strokeMiterlimit="10"
                    />
                    <path
                      d="M2.37988 18.3504V8.55039C2.37988 7.15039 2.97988 6.65039 4.37988 6.65039H5.37988C6.77988 6.65039 7.37988 7.15039 7.37988 8.55039V18.3504C7.37988 19.7504 6.77988 20.2504 5.37988 20.2504H4.37988C2.97988 20.2504 2.37988 19.7504 2.37988 18.3504Z"
                      stroke={thumb === "up" ? "#F5207C" : undefined}
                      className={`
          transition
          ${
            thumb !== "up"
              ? "stroke-[#E6E6E6] group-hover:stroke-[#F5207C]"
              : ""
          }
        `}
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </button>
              <button
                className={`flex flex-col items-center focus:outline-none group ${
                  thumb === "down" ? "" : ""
                }`}
                onClick={() => {
                  setThumb("down");
                  setStep(2);
                }}
              >
                <span
                  className={`
      flex items-start justify-center
      w-[52px] h-[52px] p-[14px]
      border rounded-full
      transition
      cursor-pointer
      ${
        thumb === "down"
          ? "bg-[#FFF0F7] border-[#F5207C] order-1"
          : "bg-white border-[#E6E6E6] order-0 hover:bg-[#FFF0F7] hover:border-[#F5207C]"
      }
    `}
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M16.5197 5.65039L13.4197 3.25039C13.0197 2.85039 12.1197 2.65039 11.5197 2.65039H7.71973C6.51973 2.65039 5.21973 3.55039 4.91973 4.75039L2.51973 12.0504C2.01973 13.4504 2.91973 14.6504 4.41973 14.6504H8.41973C9.01973 14.6504 9.51973 15.1504 9.41973 15.8504L8.91973 19.0504C8.71973 19.9504 9.31973 20.9504 10.2197 21.2504C11.0197 21.5504 12.0197 21.1504 12.4197 20.5504L16.5197 14.4504"
                      stroke={thumb === "down" ? "#F5207C" : undefined}
                      className={`
          transition
          ${
            thumb !== "down"
              ? "stroke-[#E6E6E6] group-hover:stroke-[#F5207C]"
              : ""
          }
        `}
                      strokeWidth="1.5"
                      strokeMiterlimit="10"
                    />
                    <path
                      d="M21.6201 5.65V15.45C21.6201 16.85 21.0201 17.35 19.6201 17.35H18.6201C17.2201 17.35 16.6201 16.85 16.6201 15.45V5.65C16.6201 4.25 17.2201 3.75 18.6201 3.75H19.6201C21.0201 3.75 21.6201 4.25 21.6201 5.65Z"
                      stroke={thumb === "down" ? "#F5207C" : undefined}
                      className={`
          transition
          ${
            thumb !== "down"
              ? "stroke-[#E6E6E6] group-hover:stroke-[#F5207C]"
              : ""
          }
        `}
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </button>
            </div>
            <div className="flex justify-between mt-8 border-t border-[#eeeeee] pt-4 gap-3">
              <button
                className="w-1/2 px-4 py-2 rounded-xl border border-[#F5207C] text-black hover:bg-[#F5207C] hover:text-white cursor-pointer font-700"
                onClick={handleClose}
              >
                Do Later
              </button>
              <button
                className="w-1/2 px-4 py-2 rounded-xl bg-[#F5207C] text-white font-700 hover:bg-[#d81b6a] cursor-pointer"
                onClick={() => thumb && setStep(2)}
                disabled={!thumb}
              >
                Submit
              </button>
            </div>
          </div>
        )}
        {step === 2 && (
          <div>
            {thumb === "up" ? (
              <>
                <div className="font-bold text-lg mb-2 text-center">
                  Awesome! What did you think?
                </div>
                <div className="flex justify-center gap-2 mb-4 mt-4">
                  {["Loved it", "It was okay", "Didn't like it"].map((opt) => (
                    <button
                      key={opt}
                      className={`px-3 py-1 rounded-full border text-black border-[#E6E6E6] cursor-pointer font-700 ${
                        rating === opt
                          ? "bg-[#F5207C] text-white border-[#F5207C]"
                          : "border-gray-300 text-gray-700 hover:bg-gray-100"
                      } text-sm font-medium`}
                      onClick={() => setRating(opt)}
                    >
                      {opt}
                    </button>
                  ))}
                </div>
                <div className="text-sm text-gray-600 mb-2">
                  <label className="text-black">Tell us more</label>
                  <textarea
                    className="box-border flex flex-row items-center p-[12px_16px] gap-[10px] w-[100%] h-[104px] bg-white border border-[#E6E6E6] rounded-[16px] flex-none order-0 self-stretch flex-grow-0 z-0 focus:border-[#F5207C] placeholder:text-gray-400 text-black"
                    rows={3}
                    placeholder="Tell us more..."
                    value={feedback}
                    onChange={(e) => setFeedback(e.target.value)}
                  />
                </div>
              </>
            ) : (
              <>
                <div className="font-bold text-lg mb-2 text-center">
                  Sorry to hear that! Tell us more.
                </div>
                <textarea
                  className="w-full border border-gray-300 rounded-lg p-2 mb-4 text-sm focus:outline-none focus:border-[#F5207C]"
                  rows={3}
                  placeholder="Tell us what could be improved..."
                  value={feedback}
                  onChange={(e) => setFeedback(e.target.value)}
                />
              </>
            )}
            <div className="flex justify-between mt-8 border-t border-[#eeeeee] pt-4 gap-3">
              <button
                className="w-1/2 px-4 py-2 rounded-xl border border-[#F5207C] text-black hover:bg-[#F5207C] hover:text-white cursor-pointer font-700"
                onClick={handleClose}
              >
                Do Later
              </button>
              <button
                className="w-1/2 px-4 py-2 rounded-xl bg-[#F5207C] text-white font-700 hover:bg-[#d81b6a] cursor-pointer"
                onClick={handleSubmit}
                disabled={thumb === "up" && !rating}
              >
                Submit
              </button>
            </div>
          </div>
        )}
        {step === 3 && (
          <div className="flex flex-col items-center justify-center">
            <div className="flex flex-row items-center justify-center p-4 gap-[10px] w-[64px] h-[64px] bg-[#FFF0F7] rounded-[32px] mb-4 flex-none order-0 flex-grow-0">
              <img src={favorite} />
            </div>
            <div className="font-700 text-[24px] text-black mb-2 text-center">
              Thank you for your feedback!
            </div>
            <div className="text-[14px] text-black text-center">
              You help us improve the experience.
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default FeedbackModal;
