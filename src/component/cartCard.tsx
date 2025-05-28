import React from "react";
import shoppingCart from "../assets/images/shopping-cart.svg";
interface CartCardProps {
  image: string;
  description: string;
  price: string;
  rating: number;
  ratingCount: number;
  onAddToCart: () => void;
}

const CartCard: React.FC<CartCardProps> = ({
  image,
  description,
  price,
  rating,
  ratingCount,
  onAddToCart,
}) => (
  <div className="flex flex-row items-start p-[8px] w-[full] h-[168px] bg-white border border-[#E6E6E6] rounded-[12px]">

    <img
      src={image}
      alt="Product"
      className="w-[152px] h-[152px] object-cover rounded-[8px] mr-4"
    />
    <div className="flex flex-col justify-between h-full flex-1">
      <div className="text-[14px] font-500 text-black mb-[8px]">
        {description}
      </div>
      <div className="text-[14px] font-700 text-[#F5207C] mb-2">{price}</div>
      <div className="flex items-center gap-1 text-yellow-500">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-5 h-5 fill-current"
          viewBox="0 0 20 20"
        >
          <path d="M10 15l-5.878 3.09 1.122-6.545L.488 6.91l6.561-.955L10 0l2.951 5.955 6.561.955-4.756 4.635 1.122 6.545z" />
        </svg>
        <span className="text-xs font-medium text-[#757575]">{rating}</span>
        <span className="text-xs text-[#757575]">({ratingCount})</span>
      </div>
      <div className="flex items-center justify-between mt-[7px]">
        <button
          onClick={onAddToCart}
          className="flex flex-row justify-center items-center px-4 py-2 gap-2 mx-auto w-[100%] h-[36px] bg-white border border-[#E6E6E6] rounded-[12px] transition cursor-pointer font-700 text-[14px] text-[#F5207C] hover:boxshadow-lg  hover:border-[#F5207C] active:scale-95 active:transition-all"
        >
          <img src={shoppingCart} alt="" />
          <span>Add to Cart</span>
        </button>
      </div>
    </div>
  </div>
);

export default CartCard;
