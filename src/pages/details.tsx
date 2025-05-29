import Header from "../component/header";
import back from "../assets/images/back-icon.svg";
function Details() {
  return (
    <div className="top-bg min-h-screen">
      <Header />
      <div className="flex flex-row justify-start h-full items-center p-4 text-[#757575]">
        <img src={back} /> Back to Skills
      </div>
      <div className="w-full px-6">
        <div className="bg-white border border-[#EBEBEB] rounded-[12px] p-4 sm:p-6"></div>
      </div>
    </div>
  );
}
export default Details;
