import React from "react";
import { Link } from "react-router-dom";
import { HiDownload } from "react-icons/hi";

export default function Experience() {
  return (
    <main className=" h-screen flex justify-center items-center w-full bg-primary md:py-10 max-sm:py-5 ">
      <div
        className="container mx-auto flex max-sm:flex-col justify-center relative z-50"
        data-aos="flip-left"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="2000"
      >
        <div className="knowMe flex max-sm:flex-col justify-center items-center gap-10 max-sm:gap-5 bg-supcolor max-w-6xl max-sm:w-auto p-5 rounded-lg bg-no-repeat bg-contain bg-right shadow-xl max-sm:mx-2">
          <img
            data-aos="fade-up"
            data-aos-duration="3000"
            src="/images/atia-anime.jpg"
            alt="atia-anime"
            loading="lazy"
            className="w-60 h-auto aspect-auto rounded-lg shadow-xl"
          />
          <div className="flex flex-col justify-between items-start gap-5">
            <div data-aos="fade-up" data-aos-duration="3000">
              <h1 className="text-4xl font-kanit font-semibold text-fonts mb-2 uppercase max-sm:text-2xl">
                About me
              </h1>
              <p className="max-w-lg max-sm:text-xs">
                I hold a Bachelor's degree in Computer Science, which laid the
                foundation for my journey into web development. I’m constantly
                learning and growing, staying updated with the latest tools and
                trends to ensure my work meets modern standards.
              </p>
            </div>

            <Link
              to="https://drive.google.com/drive/u/0/folders/1miuyGWl2FHGishjeYHFVb4StQoqEyuin"
              data-aos="fade-up"
              data-aos-duration="3000"
              target="_blank"
              className="link relative transition-all flex items-center px text-fonts border-solid border-primary border-2 rounded-lg px-16   max-sm:mb-5 py-3 w-fit justify-center shadow-xl"
            >
              <span className="relative z-30 mr-1 font-kanit">Download CV</span>
              <HiDownload className="cursor-pointer relative z-30 transition-all" />
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
