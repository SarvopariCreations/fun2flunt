import banner from "../assets/images/advert-banner.png";

function Banner() {
  return (
    <div className="w-full">
      <img
        src={banner}
        alt="Banner"
        className="w-full h-[200px] object-cover rounded-lg"
      />
    </div>
  );
}
export default Banner;
