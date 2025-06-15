import React, { useState } from "react";
import galleryIcon from "../assets/images/galley.svg";
import pollIcon from "../assets/images/poll.svg";
import cameraIcon from "../assets/images/camera-blue.svg";
type PostModalProps = {
  onClose: () => void;
};

type Group = {
  id: number;
  name: string;
  members: number;
  active: number;
};

const PostModal: React.FC<PostModalProps> = ({ onClose }) => {
  const [step, setStep] = useState<number>(1);
  const [selectedGroups, setSelectedGroups] = useState<Set<number>>(new Set());

  const groups: Group[] = Array.from({ length: 10 }, (_, i) => ({
    id: i + 1,
    name: `Group ${i + 1}`,
    members: 100,
    active: 5,
  }));

  const toggleGroup = (groupId: number) => {
    setSelectedGroups((prev) => {
      const updated = new Set(prev);
      updated.has(groupId) ? updated.delete(groupId) : updated.add(groupId);
      return updated;
    });
  };

  return (
    <div className="fixed inset-0 z-50 bg-[#000000ba] bg-opacity-20 flex items-center justify-center px-4">
      <div className="bg-white rounded-xl w-full max-w-md p-4 space-y-4 max-h-[90vh] overflow-y-auto">
        {step === 1 && (
          <div className="space-y-4">
            {/* Row 1: User Info + Close */}
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-3">
                <img
                  src="https://randomuser.me/api/portraits/men/32.jpg"
                  alt="Profile"
                  className="w-10 h-10 rounded-full"
                />
                <span className="font-700 text-gray-800">John Doe</span>
              </div>
              <button
                className="text-gray-500 hover:text-black cursor-pointer"
                onClick={onClose}
              >
                ✕
              </button>
            </div>
            <div className="space-y-2">
              <input
                type="text"
                placeholder="Title"
                className="w-full border border-[#e6e6e6] rounded-[12px] p-4 py-2 focus:outline-none font-500"
              />
              <textarea
                rows={5}
                placeholder="Share your thoughts..."
                className="w-full border border-[#e6e6e6] rounded-[12px] p-4 py-2 focus:outline-none font-500"
              ></textarea>
            </div>

            {/* Row 3: Icons */}
            <div className="flex gap-6 text-gray-600 text-xl">
              <div className="flex gap-6">
                <button className="flex items-center gap-2 text-black hover:text-[#F5207C] transition cursor-pointer">
                  <img src={galleryIcon} alt="Gallery" className="w-5 h-5" />
                  <span className="text-base font-500">Gallery</span>
                </button>
                <button className="flex items-center gap-2 text-black hover:text-[#F5207C] transition cursor-pointer">
                  <img src={pollIcon} alt="Poll" className="w-5 h-5" />
                  <span className="text-base font-500">Poll</span>
                </button>
                <button className="flex items-center gap-2 text-black hover:text-[#F5207C] transition cursor-pointer">
                  <img src={cameraIcon} alt="Camera" className="w-5 h-5" />
                  <span className="text-base font-500">Camera</span>
                </button>
              </div>
            </div>

            {/* Row 4: Next Button */}
            <div className="flex justify-end border-t border-gray-200 pt-4">
              <button
                className="bg-[#F5207C] text-white px-4 py-2 rounded-[12px] hover:bg-gray-700 cursor-pointer min-w-[100px] font-700"
                onClick={() => setStep(2)}
              >
                Next
              </button>
            </div>
          </div>
        )}        
        {step === 2 && (
          <div className="space-y-4">
            {/* Row 1: Back + Title + Close */}
            <div className="flex justify-between items-center">
              <button
                className="font-700 text-gray-800 gap-3 flex items-center cursor-pointer"
                onClick={() => setStep(1)}
              >
                ← Select Group
              </button>
              <button
                className="text-gray-500 hover:text-black"
                onClick={onClose}
              >
                ✕
              </button>
            </div>

            {/* Row 2: Group List */}
            <div className="gap-3 max-h-80 overflow-y-auto">
              {groups.map((group) => (
                <div
                  key={group.id}
                  className="flex justify-between items-center border-b border-[#E6E6E6]  py-3 px-0"
                >
                  <div className="flex items-center gap-3">
                    <img
                      src="https://randomuser.me/api/portraits/men/32.jpg"
                      alt={group.name}
                      className="w-10 h-10 rounded-full"
                    />
                    <div>
                      <p className="font-700 text-gray-800">{group.name}</p>
                      <p className="text-sm text-[#999999] font-500">
                        {group.members} Members · {group.active} Active
                      </p>
                    </div>
                  </div>
                  <input
                    type="checkbox"
                    className="w-5 h-5 accent-[#F5207C] rounded-[6px] border-gray-300 cursor-pointer border border-[#B3B3B3]"
                    checked={selectedGroups.has(group.id)}
                    onChange={() => toggleGroup(group.id)}
                  />
                </div>
              ))}
            </div>

            {/* Row 3: Post Button */}
            <div className="flex justify-end">
              <button className="bg-[#F5207C] text-white px-4 py-2 rounded-[12px] hover:bg-gray-700 cursor-pointer min-w-[100px] font-700">
                Post
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PostModal;