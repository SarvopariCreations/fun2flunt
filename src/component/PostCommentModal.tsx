import React, { useState } from "react";
import fillHeart from "../assets/images/heart-fill.svg";
import blankHeart from "../assets/images/heart-blank.svg";
import CommunityPost from "./CommunityPost";
import postImg from "../assets/images/post-img.svg";
import like from "./../assets/images/like.svg";
import send from "./../assets/images/send.svg";
interface Skill {
  name: string;
  icon: string;
}

interface Equipment {
  name: string;
  icon: string;
}

interface Instructor {
  name: string;
  avatar: string;
}

interface VideoDetailModalProps {
  open: boolean;
  onClose: () => void;
  videoUrl: string;
  videoName: string;
  isFavorite: boolean;
  onFavorite: () => void;
  description: string;
  skills: Skill[];
  equipment: Equipment[];
  instructor: Instructor;
}

const PostCommentModal: React.FC<VideoDetailModalProps> = ({
  open,
  onClose,
  videoUrl,
  videoName,
  isFavorite,
  onFavorite,
  description,
  skills,
  equipment,
  instructor,
}) => {
  if (!open) return null;

  const comments = [
    {
      user: {
        name: "John Doe",
        avatar: "https://i.pravatar.cc/40",
      },
      time: "2 days ago",
      text: "This is the main comment content displayed here. You can write anything.",
      replies: [
        {
          user: {
            name: "Jane Smith",
            avatar: "https://i.pravatar.cc/30?img=2",
          },
          time: "1 day ago",
          text: "Thanks for your input. I totally agree with this.",
        },
      ],
    },
    // Add more comments as needed
  ];
  return (
    <div
      className="fixed inset-0 z-50 overflow-y-auto"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      <div
        className="fixed inset-0 bg-[#000000ba] bg-opacity-50 bg-opacity-50 transition-opacity"
        aria-hidden="true"
      ></div>
      <div className="flex min-h-full items-center justify-center p-4 text-center">
        <div className="bg-white rounded-2xl w-[90%] max-w-full p-[24px] gap-[24px] relative shadow-xl w-max-[100px] flex flex-col md:flex-row max-h-[90vh]">
          <button
            onClick={onClose}
            className="absolute -top-[50px] -right-[0px] text-white hover:text-white text-2xl w-10 h-10 gap-2.5 rounded-full p-1.5 flex items-center justify-center bg-black bg-opacity-50 cursor-pointer"
            aria-label="Close"
          >
            ×
          </button>
          <div className="w-1/1 flex items-start justify-center">
            <iframe
              src={videoUrl}
              title={videoName}
              allow="autoplay; encrypted-media"
              allowFullScreen
              className="w-full h-[100%] rounded-2xl"
            ></iframe>
          </div>
          <div className="w-1/2 flex flex-col comment-list-wrap">
            <CommunityPost
              userPhoto="https://randomuser.me/api/portraits/men/32.jpg"
              username="John Doe"
              company="Acme Corp"
              time="14h"
              heading="Just mastered the fireman"
              content="These tutorials are so easy to follow! I just learned my first pole spin. What do you guys think?"
              favoriteCount={12}
              commentCount={4}
              onShare={() => alert("Shared!")}
            />
            <div className="w-full mt-4 text-left">
              <h4 className="mb-4 text-[20px] font-700">Comments</h4>
              {comments.map((comment, index) => (
                <Comment key={index} comment={comment} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostCommentModal;

interface Reply {
  user: {
    name: string;
    avatar: string;
  };
  time: string;
  text: string;
}

interface CommentType {
  user: {
    name: string;
    avatar: string;
  };
  time: string;
  text: string;
  replies?: Reply[];
}

const Comment = ({ comment }: { comment: CommentType }) => {
  const [showReplyBox, setShowReplyBox] = useState(false);

  const toggleReplyBox = () => setShowReplyBox(!showReplyBox);

  return (
    <div className="mb-6">
      {/* Comment header */}
      <div className="flex justify-between items-start">
        <div className="flex items-start gap-3">
          <img
            src={comment.user.avatar}
            alt="User"
            className="w-10 h-10 rounded-full"
          />
          <div className="flex flex-col gap-0 items-start text-left">
            <div className="flex flex-row items-center gap-2">
              <p className="font-700">{comment.user.name}</p>
              <span className="text-gray-500 text-sm">{comment.time}</span>
            </div>
            {/* Comment text */}
            <div className="text-[black]">{comment.text}</div>
            <button
              onClick={toggleReplyBox}
              className="mt-2 text-[#757575] hover:underline text-sm text-left font-500 cursor-pointer"
            >
              Reply
            </button>

            {/* Reply input */}
            {showReplyBox && (
              <div className="mt-2 w-full">
                <div className="flex items-center gap-3 mb-0 border border-[#E6E6E6] rounded-[16px] p-2 bg-white w-full ">
                  <img
                    src={postImg}
                    alt="User"
                    className="w-[24px] h-[24px] rounded-full object-cover"
                  />
                  <input
                    placeholder="Write a comment..."
                    className="flex-1 outline-none text-[14px] placeholder-gray-400 bg-transparent border-none font-500"
                    type="text"
                  />
                  <div className="flex justify-end">
                    <button className="px-2 py-1 rounded text-sm">
                      <img
                        src={send}
                        alt="User"
                        className="w-[20px] object-cover cursor-pointer"
                      />
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
        <button className="flex items-center gap-1 text-gray-500 hover:text-red-500">
          <img src={like} alt="" />
          <span className="text-[14px] font-500 text-[#7F7F7F]">10</span>
        </button>
      </div>

      {/* Nested Replies */}
      {comment.replies && comment.replies.length > 0 && (
        <div className="mt-4 pl-[50px]">
          {comment.replies.map((reply, idx) => (
            <div key={idx} className="mb-3">
              <div className="flex justify-between items-start">
                <div className="flex items-start gap-3">
                  <img
                    src={reply.user.avatar}
                    alt="User"
                    className="w-8 h-8 rounded-full"
                  />
                  <div className="flex flex-col items-start text-left">
                    <div className="flex flex-row items-center gap-2">
                      <p className="font-700">{comment.user.name}</p>
                      <span className="text-gray-500 text-sm">
                        {comment.time}
                      </span>
                    </div>
                    {/* Comment text */}
                    <div className="text-[black]  text-sm">{comment.text}</div>
                  </div>
                </div>
                <button className="flex items-start gap-1 text-gray-500 hover:text-red-500">
                  <img src={like} alt="" />
                  <span className="text-[14px] font-500 text-[#7F7F7F]">
                    10
                  </span>
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
