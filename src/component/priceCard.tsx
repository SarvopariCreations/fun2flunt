import React from "react";

interface PriceRibbonBoxProps {
  label: string;
  duration: string;
  price: string;
  perMonth: string;
}

const PriceBox: React.FC<PriceRibbonBoxProps> = ({
  label,
  duration,
  price,
  perMonth,
}) => {
  return (
    <div className="relative w-[100%] bg-white border border-[#E6E6E6] rounded-xl p-3 flex flex-col items-center justify-center hover:border-[#F5207C] hover:bg-[#FFF0F6] transition-colors duration-200 cursor-pointer ">
      <div className="absolute -top-3 -left-3 ribbin-bg">
        <span
          className="block w-[80px] text-center absolute top-[17px] left-[-3px] text-[10px] font-bold px-2 py-1 text-white"
          style={{ transform: "rotate(-40deg)" }}
        >
          {label}
        </span>
      </div>
      <div className="flex flex-col items-center gap-1">
        <span className="text-[12px] font-700 text-black">{duration}</span>
        <span className="text-[16px] font-700 text-[#F5207C]">{price}</span>
        <span className="text-[12px] text-[#757575] font-500">{perMonth}</span>
      </div>
    </div>
  );
};
export default PriceBox;
