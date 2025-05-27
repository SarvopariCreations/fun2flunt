import React from "react";
import verticalDot from "./../assets/images/vertical-dot.svg";
import like from "./../assets/images/like.svg";
import message from "./../assets/images/message.svg";
import share from "./../assets/images/share.svg";

interface PostCardProps {
  userPhoto: string;
  username: string;
  company: string;
  time: string;
  heading: string;
  label: string;
  content: string;
  favoriteCount: number;
  commentCount: number;
  onShare?: () => void;
}

const PostCard: React.FC<PostCardProps> = ({
  userPhoto,
  username,
  company,
  time,
  heading,
  label,
  content,
  favoriteCount,
  commentCount,
  onShare,
}) => (
  <div className="box-border flex flex-col items-start p-6 gap-4 w-[auto] h-[228px] border border-[#E6E6E6] rounded-[12px] bg-white">
    {/* Row 1 */}
    <div className="flex w-full items-start justify-between">
      <div className="flex items-center gap-3">
        <img
          src={userPhoto}
          alt={username}
          className="w-[40px] h-[40px] rounded-full object-cover"
        />
        <div>
          <div className="font-500 text-[16px] text-gray-900">
            {username} in{" "}
            <a href="#" className="text-[#F5207C]">
              {company}
            </a>
          </div>
          <div className="text-[14px] text-[#7F7F7F]">{time}</div>
        </div>
      </div>
      <div className="flex flex-col items-end">
        <button className="ml-2 p-1 rounded-full hover:bg-gray-100">
          <img src={verticalDot} alt="" />
        </button>
      </div>
    </div>
    {/* Row 2 */}
    <div className="font-700 text-[16px]">{heading} </div>
    {/* Row 3 */}
    <div className="text-[14px] text-black">{content}</div>
    {/* Last Row */}
    <div className="flex items-center gap-8 mt-auto">
      <button className="flex items-center gap-1 text-gray-500 hover:text-red-500">
        <img src={like} alt="" />
        <span className="text-[14px] text-[#7F7F7F]">{favoriteCount}</span>
      </button>
      <button className="flex items-center gap-1 text-gray-500 hover:text-blue-500">
        <img src={message} alt="" />
        <span className="text-[14px] text-[#7F7F7F]">{commentCount}</span>
      </button>
      <button
        className="flex items-center gap-1 text-gray-500 hover:text-green-500"
        onClick={onShare}
      >
        <img src={share} alt="" />
      </button>
    </div>
  </div>
);

export default PostCard;
