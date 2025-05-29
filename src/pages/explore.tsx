import Header from "../component/header";
import HorizontalMenu from "../component/HorizontalMenu";
const menuItems = [
  { name: "Skills", link: "/explore" },
  { name: "Programs", link: "/trending" },
  { name: "Classes", link: "/new" },
];
function Explore() {
    return(
    <div className="top-bg">
      <Header />
            <div className="explore-container w-full p-6">
                <h1 className="text-[32px] font-bold mb-4">Explore</h1>  
<div className="horizontal-menu-container border-b-2 border-[#E6E6E6]">
    <HorizontalMenu items={menuItems} /> 
</div>      

    <div>
<div className="flex gap-4 mt-4 bg-white p-4 rounded-lg">
    <div>
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
      className="px-4 py-2 rounded-full transition-colors duration-200 hover:bg-[#F5207C] hover:text-white"
    >
      {item}
    </button>
  ))}
  </div>
  <div className="filter-section flex items-center gap-2">
    </div>
</div>
    </div>
            </div>
        </div>
    )
}
export default Explore;