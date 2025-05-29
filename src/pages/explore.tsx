import Header from "../component/header";
import HorizontalMenu from "../component/HorizontalMenu";
import MultiSelectDropdown from "../component/MultiSelectDropdown";
import filter from "../assets/images/filter.svg";
import Card from "../component/Card";
import vImg from "../assets/images/video-1.jpg";
import search from "../assets/images/search.svg";

const cardData = [
  {
    image: vImg,
    label: "Beginner",
    name: "Pole Basics",
    time: "45 min",
    timeIcon: "",
  },
  {
    image: vImg,
    label: "Intermediate",
    name: "Spin Techniques",
    time: "60 min",
    timeIcon: "",
  },
  {
    image: vImg,
    label: "Beginner",
    name: "Pole Basics",
    time: "45 min",
    timeIcon: "",
  },
  {
    image: vImg,
    label: "Intermediate",
    name: "Spin Techniques",
    time: "60 min",
    timeIcon: "",
  },
  {
    image: vImg,
    label: "Beginner",
    name: "Pole Basics",
    time: "45 min",
    timeIcon: "",
  },
  {
    image: vImg,
    label: "Intermediate",
    name: "Spin Techniques",
    time: "60 min",
    timeIcon: "",
  },
  {
    image: vImg,
    label: "Beginner",
    name: "Pole Basics",
    time: "45 min",
    timeIcon: "",
  },
  {
    image: vImg,
    label: "Intermediate",
    name: "Spin Techniques",
    time: "60 min",
    timeIcon: "",
  },
];

const menuItems = [
  { name: "Skills", link: "/explore" },
  { name: "Programs", link: "/trending" },
  { name: "Classes", link: "/new" },
];

function Explore() {
  return (
    <div className="top-bg min-h-screen">
      <Header />
      <div className="explore-container w-full px-4 sm:px-6 py-4">
        <h1 className="text-2xl md:text-3xl font-bold mb-[20px]">Explore</h1>
        <div className="border-b-2 border-[#E6E6E6] mb-4 flex flex-row justify-between">
          <HorizontalMenu items={menuItems} />
          <div className="flex items-center">
            <img src={search} alt="Filter" className="w-6 h-6" />
          </div>
        </div>

        {/* Filter Bar */}
        <div className="flex flex-col md:flex-row gap-4 mt-4 bg-white p-2 rounded-lg items-stretch md:items-center min-h-[54px] justify-between">
          <div className="flex flex-wrap gap-2 md:gap-4">
            {[
              "All",
              "Pole Dancing",
              "Pole Conditioning",
              "Low Flow",
              "Floor Dancing",
              "Chair Dancing",
              "Flexibility",
            ].map((item) => (
              <button
                key={item}
                className="font-500 px-4 py-2 rounded-full transition-colors duration-200 hover:bg-[#FFF0F6] hover:text-[#F5207C] text-[#757575] font-medium cursor-pointer text-sm"
              >
                {item}
              </button>
            ))}
          </div>
          <div className="flex flex-col sm:flex-row gap-2 md:gap-4 w-full md:w-auto max-w-full md:max-w-md ml-auto items-center mt-2 md:mt-0">
            <img src={filter} alt="Filter" className="w-6 h-6" />
            <MultiSelectDropdown
              label="Experience Level"
              options={["Beginner", "Intermediate", "Advanced", "Expert"]}
            />
            <MultiSelectDropdown
              label="Instructor"
              options={["Instructor A", "Instructor B", "Instructor C"]}
            />
          </div>
        </div>

        {/* Cards Grid */}
        <div className="w-full box-border bg-white border border-[#EBEBEB] rounded-[12px] p-4 sm:p-6 mt-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-5">
            {cardData.map((card, idx) => (
              <Card key={idx} {...card} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Explore;
