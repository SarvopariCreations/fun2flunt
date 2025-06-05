import React from "react";
import ListWithIcon from "./listWithIcon";
import PriceBox from "./priceCard";

type ManagePlanProps = {
  open: boolean;
  features: string[];
  priceCards: {
    label: string;
    duration: string;
    price: string;
    perMonth: string;
  }[]; // <-- array type
  onCancel: () => void;
  onSubmit: () => void;
};

const ManagePlan: React.FC<ManagePlanProps> = ({
  open,
  features,
  priceCards,
  onCancel,
  onSubmit,
}) => {
  if (!open) return null;

  // Use the first price card for display, or handle empty array gracefully
  const priceCard = priceCards[0];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#000000ba] bg-opacity-50 bg-opacity-50 transition-opacity">
      <div className="flex min-h-full items-center justify-center p-4 text-center">
        <div className="bg-white rounded-xl border border-[#EBEBEB] p-8 w-full max-w-[550px] shadow-lg flex flex-col gap-6 relative">
          {/* Close (Cancel) Button Top Right */}
          <button
            onClick={onCancel}
            className="absolute -top-[0px] -right-[46px] text-white hover:text-white text-2xl w-10 h-10 gap-2.5 rounded-full p-1.5 flex items-center justify-center bg-black bg-opacity-50 cursor-pointer"
            aria-label="Close"
          >
            ×
          </button>
          {/* First Row: Features */}

          <div className="text-start text-[20px] font-700">Manage Plans</div>
          <div className="text-start text-[14px] font-500 bg-[#F5F5F5] p-4 rounded-lg mb-4">
            <ListWithIcon items={features} />
          </div>
          {/* Second Row: PriceBox */}
          <div className="flex flex-col items-start gap-4 rounded-lg">
            <label className="text-start text-[14px] font-700">
              Upgrade Your Plan
            </label>
            <div className="grid grid-cols-2 grid-rows-2 gap-4 w-full">
              {priceCards.map((card, idx) => (
                <PriceBox
                  key={idx}
                  label={card.label}
                  duration={card.duration}
                  price={card.price}
                  perMonth={card.perMonth}
                />
              ))}
            </div>
          </div>
          {/* Last Row: Buttons */}
          <div className="flex justify-end gap-4 mt-4  border-t border-[#EBEBEB] pt-8">
            <button
              className="px-6 py-2 rounded-[12px] border border-[#F5207C] text-[#F5207C] font-700 hover:bg-[#FFF0F6] transition cursor-pointer"
              onClick={onCancel}
            >
              Cancel
            </button>
            <button
              className="px-6 py-2 rounded-[12px] bg-[#F5207C] text-white font-700 hover:bg-[#d81b6a] transition cursor-pointer"
              onClick={onSubmit}
            >
              Subscribe Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManagePlan;
