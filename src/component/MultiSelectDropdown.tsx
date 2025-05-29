import React, { useState, useRef, useEffect } from "react";

interface MultiSelectDropdownProps {
  label: string;
  options: string[];
}

const MultiSelectDropdown: React.FC<MultiSelectDropdownProps> = ({
  label,
  options,
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setIsOpen(false);
    }
  };

  const handleCheckboxChange = (value: string) => {
    setSelectedOptions((prev) =>
      prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value]
    );
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={toggleDropdown}
        className="w-full flex justify-between items-center bg-white border border-gray-300 rounded-lg px-4 py-2 text-left shadow-sm focus:outline-none gap-2"
      >
        <span className="">
          {label}
          {selectedOptions.length > 0 && (
            <div className="bg-[#E6E6E6] text-[#000000] text-xs font-semibold rounded-full px-2 py-1 ml-2 inline-flex items-center">
              {selectedOptions.length}
            </div>
          )}
        </span>
        <svg
          className={`w-4 h-4 transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>
      {isOpen && (
        <div
          className={`absolute z-10 mt-2 flex flex-col items-start p-2 gap-0.5 isolate w-[240px] h-[204px] bg-white border border-[#E6E6E6] shadow-[0px_1px_12px_rgba(19,21,24,0.12)] rounded-[8px] overflow-auto
    ${label === "Instructor" ? "right-0" : ""}`}
        >
          {" "}
          {/* Add right-0 for the last dropdown */}
          {options.map((option, index) => (
            <label
              key={index}
              className="flex flex-row-reverse items-center w-full px-2 py-2 hover:bg-[#FFF0F6] rounded cursor-pointer justify-between"
            >
              <div className="group grid size-4 grid-cols-1">
                <input
                  id="comments"
                  aria-describedby="comments-description"
                  name="comments"
                  type="checkbox"
                  className="col-start-1 row-start-1 appearance-none rounded-sm border border-gray-300 bg-white checked:border-indigo-600 checked:bg-indigo-600 indeterminate:border-indigo-600 indeterminate:bg-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:checked:bg-gray-100 forced-colors:appearance-auto"
                  checked={selectedOptions.includes(option)}
                  onChange={() => handleCheckboxChange(option)}
                />
                <svg
                  className="pointer-events-none col-start-1 row-start-1 size-3.5 self-center justify-self-center stroke-white group-has-disabled:stroke-gray-950/25"
                  viewBox="0 0 14 14"
                  fill="none"
                >
                  <path
                    className="opacity-0 group-has-checked:opacity-100"
                    d="M3 8L6 11L11 3.5"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    className="opacity-0 group-has-indeterminate:opacity-100"
                    d="M3 7H11"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
              {option}
            </label>
          ))}
        </div>
      )}
    </div>
  );
};

export default MultiSelectDropdown;
