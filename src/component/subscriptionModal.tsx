import React, { useState } from "react";
import favorite from "../assets/images/tick-circle.svg";
interface SubscriptionCancelModalProps {
  open: boolean;
  onClose: () => void;
  onSubmit: (reason: string, details: string) => void;
}

const reasons = [
  "Too Expensive",
  "I found something better",
  "Facing technical errors",
  "I am quitting pole dancing",
  "Other",
];

const SubscriptionCancelModal: React.FC<SubscriptionCancelModalProps> = ({
  open,
  onClose,
  onSubmit,
}) => {
  const [step, setStep] = useState(1);
  const [selectedReason, setSelectedReason] = useState<string>("");
  const [details, setDetails] = useState<string>("");

  const handleCancel = () => {
    setStep(1);
    setSelectedReason("");
    setDetails("");
    onClose();
  };

  const handleSubmit = () => {
    onSubmit(selectedReason, details);
    setStep(2);
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#000000ba] bg-opacity-50">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-[540px] mx-4 p-6 relative">
        {step === 2 && (
          <button
            onClick={handleCancel}
            className="absolute -top-[0px] -right-[46px] text-white hover:text-white text-2xl w-10 h-10 gap-2.5 rounded-full p-1.5 flex items-center justify-center bg-black bg-opacity-50 cursor-pointer"
            aria-label="Close"
          >
            ×
          </button>
        )}
        {step === 1 && (
          <>
            <div className="text-[22px] mb-2 text-start font-700">
              Cancel Subscription
            </div>
            <div className="text-black text-start mb-6 font-700">
              We're sorry to see you leave. Could you share the reason with us?
            </div>
            <div className="flex flex-col gap-3 mb-4 border border-[#E6E6E6] rounded-lg p-4">
              {reasons.map((reason) => (
                <label
                  key={reason}
                  className="flex items-center justify-between rounded-lg px-0 py-0 cursor-pointer hover:border-[#F5207C] transition"
                >
                  <span className="text-gray-900">{reason}</span>
                  <input
                    type="radio"
                    name="cancel-reason"
                    value={reason}
                    checked={selectedReason === reason}
                    onChange={() => setSelectedReason(reason)}
                    className="w-5 h-5 accent-[#F5207C] cursor-pointer"
                  />
                </label>
              ))}
            </div>
            {selectedReason && (
              <div className="mb-4">
                <label className="block text-gray-700 mb-2 text-[12px] font-500">
                  Reason
                </label>
                <textarea
                  className="w-full border border-[#E6E6E6] rounded-2xl p-3 text-sm focus:outline-none focus:border-[#F5207C] placeholder:text-gray-400"
                  rows={3}
                  placeholder="Please share more details..."
                  value={details}
                  onChange={(e) => setDetails(e.target.value)}
                />
              </div>
            )}
            <div className="flex justify-end gap-3 mt-6">
              <button
                className="w-auto px-4 py-2 rounded-xl border border-[#F5207C] text-black hover:bg-[#F5207C] hover:text-white cursor-pointer font-700"
                onClick={handleCancel}
              >
                Cancel
              </button>
              <button
                className="w-auto px-4 py-2 rounded-xl bg-[#F5207C] text-white font-700 hover:bg-[#d81b6a] cursor-pointer"
                onClick={handleSubmit}
                disabled={!selectedReason || !details.trim()}
              >
                Submit
              </button>
            </div>
          </>
        )}
        {step === 2 && (
          <div className="flex flex-col items-center justify-center py-8">
            <div className="flex flex-row items-center justify-center p-4 gap-[10px] w-[64px] h-[64px] bg-[#FFF0F7] rounded-[32px] mb-4 flex-none order-0 flex-grow-0">
              <img src={favorite} />
            </div>
            <div className="font-700 text-[24px] text-black mb-2 text-center w-[80%]">
              Your subscription has been successfully canceled.
            </div>
            <div className="text-[16px] text-black text-center font-500 w-[90%]">
              You will continue to have access to premium features until the end
              of your current billing period on June 30, 2024. Thank you for
              being a part of our community!
            </div>
            {/* <button
              className="mt-6 px-6 py-2 rounded-xl bg-[#F5207C] text-white font-700 hover:bg-[#d81b6a] cursor-pointer"
              onClick={handleCancel}
            >
              Close
            </button> */}
          </div>
        )}
      </div>
    </div>
  );
};

export default SubscriptionCancelModal;
