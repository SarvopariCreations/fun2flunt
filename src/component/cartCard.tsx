import React from "react";

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
  <div className="flex flex-row items-start p-2 w-[full] h-[168px] bg-white border border-[#E6E6E6] rounded-[12px]">
    {/* Left: Image */}
    <img
      src={image}
      alt="Product"
      className="w-[140px] h-[152px] object-cover rounded-[8px] mr-4"
    />
    {/* Right: Details */}
    <div className="flex flex-col justify-between h-full flex-1">
      {/* Description */}
      <div className="text-base font-semibold text-gray-900 truncate mb-2">
        {description}
      </div>
      {/* Price */}
      <div className="text-lg font-bold text-green-600 mb-2">{price}</div>
      {/* Rating and Add to Cart */}
      <div className="flex items-center justify-between mt-auto">
        <div className="flex items-center gap-1 text-yellow-500">
          {/* Star Icon (SVG) */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5 fill-current"
            viewBox="0 0 20 20"
          >
            <path d="M10 15l-5.878 3.09 1.122-6.545L.488 6.91l6.561-.955L10 0l2.951 5.955 6.561.955-4.756 4.635 1.122 6.545z" />
          </svg>
          <span className="text-sm font-medium text-gray-700">{rating}</span>
          <span className="text-xs text-gray-400 ml-1">({ratingCount})</span>
        </div>
        <button
          onClick={onAddToCart}
          className="flex items-center gap-1 bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded transition"
        >
          {/* Cart Icon (SVG) */}
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
              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13l-1.35 2.7A1 1 0 007.5 17h9a1 1 0 00.9-1.45L17 13M7 13V6a1 1 0 011-1h6a1 1 0 011 1v7"
            />
          </svg>
          <span>Add to Cart</span>
        </button>
      </div>
    </div>
  </div>
);

export default CartCard;
