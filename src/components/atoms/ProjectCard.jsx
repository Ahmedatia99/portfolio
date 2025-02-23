import React from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination } from "swiper/modules";
import { MdKeyboardArrowRight } from "react-icons/md";
import { FaArrowRightLong } from "react-icons/fa6";

const ProjectCard = ({ data, limit, starter }) => {
  const displayData = limit ? data.slice(0, limit) : data;
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return `<span class="${className}">  </span>`;
    },
  };

  const breakPoints = {
    320: {
      slidesPerView: 1,
      spaceBetween: 30,
      loop: "true",
    },
    375: {
      slidesPerView: 1,
      spaceBetween: 20,
      loop: "true",
    },
    420: {
      slidesPerView: 1,
      spaceBetween: 20,
      loop: "true",
    },
    767: {
      slidesPerView: 2,
      spaceBetween: 70,
    },
    1025: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    12769: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  };

  return (
    <div className="relative container mx-auto flex justify-center items-center gap-5 flex-wrap">
      <Swiper
        initialSlide={starter}
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 20,
          stretch: 1,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={pagination}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
        breakpoints={breakPoints}
      >
        {displayData.map((item) => {
          return (
            <SwiperSlide
              key={item.id}
              className=" max-w-sm bg-supcolor border-2 border-primary rounded-lg shadow-xl"
            >
              <img
                className="rounded-t-md w-full h-[auto] aspect-auto object-fill border-b-2"
                src={item.imageUrl}
                alt={item.name}
              />

              <div className="p-5 bg-supcolor rounded-b-lg text-white">
                <h5 className="font-kanit mb-2 text-2xl font-bold tracking-tight uppercase text-primary">
                  {item.name}
                  <span className="text-morning text-6xl ml-1 leading-[0]">
                    .
                  </span>
                </h5>
                <p className="mb-3 font-medium h-[60px] text-gray-500">
                  {item.description}
                </p>
                <Link
                  to={item.link}
                  className="link relative transition-all flex items-center px text-primary border-solid border-primary border-2 rounded-lg px-5 py-1 w-fit"
                >
                  <span className="z-30 !text-md tracking-wider font-semibold font-kanit">
                    DEMO
                  </span>

                  <FaArrowRightLong className="ml-2 relative z-30" />
                </Link>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default ProjectCard;
