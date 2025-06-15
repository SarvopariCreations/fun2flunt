// Example: React component (you can adapt for plain HTML/JS or Alpine.js)
import React, { useState } from "react";

function ProfileCard() {
  const [joined, setJoined] = useState(false);

  return (
    <div
      className="
        box-border flex flex-col justify-start items-center p-4 w-[100%] h-[230px] border border-[#CCCCCC] rounded-2xl"
    >
      <img
        src="https://randomuser.me/api/portraits/men/32.jpg"
        alt="User"
        className="w-20 h-20 rounded-full object-cover"
      />
      <div className="d-flex flex-col items-center justify-center text-center my-3">
        <div className="text-lg font-700">Username</div>
        <div className="flex gap-1 text-xs 2xl:text-sm text-[#757575] font-500">
          <span>2500 members</span>
          <span>•</span>
          <span>100 posts</span>
        </div>
      </div>
      {joined ? (
        <button
          className="w-auto p-4 py-2 rounded-[12px] bg-white border border-[#E6E6E6] text-[#F5207C] font-700 hover:bg-[#F5207C] transition cursor-pointer hover:text-white"
          onClick={() => setJoined(false)}
        >
          Leave
        </button>
      ) : (
        <button
          className="w-auto p-4 py-2 rounded-[12px] bg-[#F5207C] text-white font-700 hover:bg-[#F5207C] transition cursor-pointer"
          onClick={() => setJoined(true)}
        >
          Join
        </button>
      )}
    </div>
  );
}

export default ProfileCard;
