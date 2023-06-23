import React from "react";
import "./projects.css";
import { Link } from "react-router-dom";
export default function Projects() {
  return (
    <main className="h-screen w-full relative flex justify-center items-center bg-supcolor py-32">
      <div className="lg:p-28 p-10 bg-white absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 border-4 border-primary">
        <h1
          className="text-primary lg:text-5xl md:text-4xl sm:text-3xl mobile:text-3xl font-extrabold max-w-xs sm:w-full mobile:w-full"
          data-aos="fade-down"
        >
          I build & design stuff
        </h1>
        <p
          className="text-fonts lg:text-2xl md:text-lg sm:text-base mobile:text-base py-5 max-w-xs sm:w-full mobile:w-full"
          data-aos="fade-down"
        >
          Open source projects, web apps and experimentals.
        </p>{" "}
        <div>
          <Link
            to={"/projects"}
            className="link relative transition-all flex items-center justify-between mx-auto  mt-10 px-16  lg:py-3 md:py-3 sm:py-1 mobile:py-1 border-solid border-primary border-[1px] text-primary font-bold font-sfu rounded-xl"
          >
            <span className="mr-3 relative z-20 tablet:text-lg mobile:text-base">
              see my work
            </span>
            <svg
              viewBox="0 0 72 22"
              xmlns="http://www.w3.org/2000/svg"
              className="stroke-primary relative z-30 h-5 w-14 "
            >
              <path
                fill="none"
                strokeWidth="2"
                strokeMiterlimit="0"
                d="M.043 11.119h70.714M60.917 1.319l9.8 9.8-9.8 9.8"
              ></path>
            </svg>
          </Link>
        </div>
      </div>
    </main>
  );
}
