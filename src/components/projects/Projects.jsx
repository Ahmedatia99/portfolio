import React from 'react'
import './projects.css'
import 'aos/dist/aos.css'
import AOS from 'aos'
export default function Projects() {
  return (
    <section className="h-screen w-full relative flex justify-center items-center bg-supcolor py-32">
      <div className=" p-28 bg-white absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 border-4 border-primary">
        <h1
          className="text-primary text-5xl font-extrabold max-w-xs"
          data-aos="fade-down"
        >
          I build & design stuff
        </h1>
        <p className="text-fonts text-2xl py-5 max-w-xs" data-aos="fade-down">
          Open source projects, web apps and experimentals.
        </p>{' '}
        <div>
          <button
            className="link relative transition-all flex  mx-auto  mt-10 px-16  py-3 border-solid border-primary border-[1px] text-primary font-bold font-sfu"
            data-aos="fade-down"
          >
            <span className="mr-3 relative z-20 ">see my work</span>

            <svg
              width="50"
              height="20"
              viewBox="0 0 72 22"
              xmlns="http://www.w3.org/2000/svg"
              className="stroke-primary relative z-30  "
            >
              <path
                fill="none"
                strokeWidth="2"
                strokeMiterlimit="0"
                d="M.043 11.119h70.714M60.917 1.319l9.8 9.8-9.8 9.8"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </section>
  )
}
//
