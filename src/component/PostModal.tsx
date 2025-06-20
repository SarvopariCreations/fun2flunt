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
  const [showPollFields, setShowPollFields] = useState(false);
  const [pollQuestion, setPollQuestion] = useState("");
  const [pollOptions, setPollOptions] = useState(["", ""]);

  const handleAddOption = () => {
    setPollOptions([...pollOptions, ""]);
  };

  const handleOptionChange = (idx: number, value: string) => {
    const newOptions = [...pollOptions];
    newOptions[idx] = value;
    setPollOptions(newOptions);
  };

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
              {!showPollFields ? (
                <>
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
                </>
              ) : (
                <>
                  <input
                    type="text"
                    placeholder="Ask question"
                    value={pollQuestion}
                    onChange={(e) => setPollQuestion(e.target.value)}
                    className="w-full border border-[#e6e6e6] rounded-[12px] p-4 py-2 focus:outline-none font-500"
                  />
                  {pollOptions.map((opt, idx) => (
                    <input
                      key={idx}
                      type="text"
                      placeholder={`Option ${idx + 1}`}
                      value={opt}
                      onChange={(e) => handleOptionChange(idx, e.target.value)}
                      className="w-full border border-[#e6e6e6] rounded-[12px] p-4 py-2 focus:outline-none font-500"
                    />
                  ))}
                  <button
                    type="button"
                    className="font-700 mt-2 w-auto p-4 py-2 rounded-[12px] bg-white border border-[#E6E6E6] hover:border-[#F5207C]  text-[#F5207C] font-700 hover:bg-[#F5207C] transition cursor-pointer hover:text-white"
                    onClick={handleAddOption}
                  >
                    + Add option
                  </button>
                </>
              )}
            </div>

            {/* Row 3: Icons */}
            <div className="flex gap-6 text-gray-600 text-xl">
              <div className="flex gap-6">
                <button className="flex items-center gap-2 text-black hover:text-[#F5207C] transition cursor-pointer">
                  <img src={galleryIcon} alt="Gallery" className="w-5 h-5" />
                  <span className="text-base font-500">Gallery</span>
                </button>
                <button
                  className={`flex items-center gap-2 text-black hover:text-[#F5207C] transition cursor-pointer ${
                    showPollFields ? "text-[#F5207C]" : ""
                  }`}
                  onClick={() => setShowPollFields(true)}
                >
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
            <div className="flex justify-between border-t border-gray-200 pt-4">
              {showPollFields && (
                <button
                  className="bg-transparent border-0 text-[#757575] font-700 hover:text-gray-700 cursor-pointer mr-4"
                  onClick={() => setShowPollFields(false)}
                >
                  Remove Poll
                </button>
              )}
              <button
                className="bg-[#F5207C] text-white px-4 py-2 rounded-[12px] hover:bg-gray-700 cursor-pointer min-w-[100px] font-700 ml-auto"
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
                className="text-gray-500 hover:text-black cursor-pointer"
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
