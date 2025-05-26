import Header from "../component/header";
import video from "../assets/images/play.svg";
import meet from "../assets/images/meet.svg";
import chevron from "../assets/images/chevron-right.svg";
import "../App.css";
// CarouselComponent.jsx
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

function Home() {
  return (
    <div className="top-bg">
      <Header />
      <div className="w-full p-6">
        <div className="font-bold text-[30px] leading-[40px] tracking-[0]">
          Hey, Camila <span>👋</span>
        </div>
      </div>
      <div className="w-full px-6">
        <div className="box-border h-[290px] bg-white border border-[#EBEBEB] rounded-[12px] p-6">
          <div className="flex space-x-2">
            {/* Left Bar */}
            <div className="w-1/2">
              <h2 className="text-xl font-semibold mb-[24px]">
                Your Quick Start Guide
              </h2>
              <ul className="space-y-1">
                {/* Item 1 */}
                <li className="flex items-center justify-between p-2 ps-0 rounded-lg transition">
                  <div className="flex items-center gap-4">
                    <img
                      src={video}
                      alt="Banner"
                      className="w-[20] h-[20] object-cover"
                    />
                    <div className="space-y-1">
                      <p className="text-md font-700">
                        Watch our 1 min intro video
                      </p>
                      <p className="text-sm text-[#000000]">
                        Watch intoduction video to get started with pole
                        dancing.
                      </p>
                    </div>
                  </div>
                  <img
                    src={chevron}
                    alt="Banner"
                    className="w-[20] h-[20] object-cover"
                  />
                </li>

                {/* Item 2 */}
                <li className="flex items-center justify-between p-2 ps-0 rounded-lg  transition">
                  <div className="flex items-center gap-4">
                    <img
                      src={meet}
                      alt="Banner"
                      className="w-[20] h-[20] object-cover"
                    />
                    <div className="space-y-1">
                      <p className="text-md font-700">Meet your tribe!</p>
                      <p className="text-sm text-[#000000]">
                        Introduce yourself to other first timers who are also
                        starting the Flaunter journey!
                      </p>
                    </div>
                  </div>
                  <img
                    src={chevron}
                    alt="Banner"
                    className="w-[20] h-[20] object-cover"
                  />
                </li>

                {/* Item 3 */}
                <li className="flex items-center justify-between p-2 ps-0 rounded-lg transition">
                  <div className="flex items-center gap-4">
                    <img
                      src={video}
                      alt="Banner"
                      className="w-[20] h-[20] object-cover"
                    />
                    <div className="space-y-1">
                      <p className="text-md font-700">
                        Complete your first flaunter class
                      </p>
                      <p className="text-sm text-[#000000]">
                        Only checks off complete when you watch the workout to
                        the end.
                      </p>
                    </div>
                  </div>
                  <img
                    src={chevron}
                    alt="Banner"
                    className="w-[20] h-[20] object-cover"
                  />
                </li>
              </ul>
            </div>

            {/* Right Section */}
            <div className="w-1/2">
              {/* Box 1 */}
              <div className="flex items-start justify-end gap-[20px]">
                <div className="w-[234px] flex flex-col justify-center">
                  <h3 className="text-lg font-semibold mb-2">
                    Intro to Pole Dancing
                  </h3>
                  <p className="text-sm text-gray-600">
                    Discover the art with Fit2Flaunt as you build strength,
                    confidence, and learn foundational moves—no experience
                    needed!
                  </p>
                </div>
                <div className="w-[390px]">
                  <iframe
                    src="https://www.youtube.com/embed/55XfCywmVNg?si=i5v-KQ_dpO2bo68v"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerpolicy="strict-origin-when-cross-origin"
                    allowfullscreen
                    className="w-[390px] h-[242px] object-cover rounded-2xl"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="relative w-full max-w-5xl mx-auto px-4 py-8">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 3000 }}
            loop={true}
            spaceBetween={20}
            slidesPerView={3}
            className="rounded-xl overflow-hidden"
          >
            {/* Slide 1 */}
            <SwiperSlide>
              <div className="bg-blue-500 text-white h-64 flex items-center justify-center text-2xl font-semibold">
                Slide 1 - Custom Content
              </div>
            </SwiperSlide>

            {/* Slide 2 */}
            <SwiperSlide>
              <div className="bg-green-500 text-white h-64 flex items-center justify-center text-2xl font-semibold">
                Slide 2 - Custom Content
              </div>
            </SwiperSlide>

            {/* Slide 3 */}
            <SwiperSlide>
              <div className="bg-purple-500 text-white h-64 flex items-center justify-center text-2xl font-semibold">
                Slide 3 - Custom Content
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
}
export default Home;
