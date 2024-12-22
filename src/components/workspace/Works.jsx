import React from "react";
import data from "./data.json";
import { Link } from "react-router-dom";
import "./works.css";
import "../projects/projects.css";
export default function Works() {
  return (
    <main id="projects"className=" relative grid min-h-screen w-full place-content-center overflow-hidden ">
      <h2 className="relative z-0 text-[20vw] font-black text-primary md:text-[200px] mb-36">
        Projects<span className="text-morning">.</span>
      </h2>
      <section>
        <div className=" container mx-auto grid lg:grid-cols-3 md:grid-cols-2 max-sm:grid-cols-1 cursor-pointer gap-5">
          {data.map((item) => {
            return (
              <div key={item.id} className="max-w-sm bg- border  rounded-lg ">
                <Link to={item.link}>
                  <img
                    className="rounded-t-lg w-[400px] h-[200px] aspect-auto"
                    src={item.imageUrl}
                    alt={item.name}
                  />
                </Link>
                <div className="p-5 ">
                  <h5 className="font-mono mb-2 text-2xl font-bold tracking-tight uppercase text-primary ">
                    {item.name}
                    <span className="text-morning text-6xl m-0 leading-[0]">
                      .
                    </span>
                  </h5>
                  <p className="mb-3 font-medium h-[60px] text-gray-500">
                    {item.description}
                  </p>
                  <Link
                    to={item.link}
                    className=" link relative  transition-all flex items-center px text-primary border-solid border-primary border rounded-xl px-5 py-2 w-fit"
                  >
                    <span className="z-30 !text-md font-semibold tracking-wider">DEMO</span>
                    <svg
                      className="rtl:rotate-180 w-3.5 h-3.5 ms-2 z-30"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 14 10"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M1 5h12m0 0L9 1m4 4L9 9"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </section>
      <section className="flex justify-center items-center mt-10 py-10">
        <Link
          to={"/"}
          className="link relative transition-all flex items-center justify-center tablet:px-20 mobile:px-5 py-3 border-solid border-primary border-[1px] rounded-xl tablet:mr-10 mobile:mr-2"
        >
          <svg
            className="svg-icon w-6 h-6 z-30 stroke-primary mr-3"
            viewBox="0 0 20 20"
          >
            <path d="M18.121,9.88l-7.832-7.836c-0.155-0.158-0.428-0.155-0.584,0L1.842,9.913c-0.262,0.263-0.073,0.705,0.292,0.705h2.069v7.042c0,0.227,0.187,0.414,0.414,0.414h3.725c0.228,0,0.414-0.188,0.414-0.414v-3.313h2.483v3.313c0,0.227,0.187,0.414,0.413,0.414h3.726c0.229,0,0.414-0.188,0.414-0.414v-7.042h2.068h0.004C18.331,10.617,18.389,10.146,18.121,9.88 M14.963,17.245h-2.896v-3.313c0-0.229-0.186-0.415-0.414-0.415H8.342c-0.228,0-0.414,0.187-0.414,0.415v3.313H5.032v-6.628h9.931V17.245z M3.133,9.79l6.864-6.868l6.867,6.868H3.133z"></path>
          </svg>
          <span className="z-30 text-lg text-primary">Home</span>
        </Link>
        <Link
          to={"/skill"}
          className="link relative transition-all flex items-center justify-center tablet:px-20 mobile:px-5 py-3 border-solid border-primary border-[1px] rounded-xl tablet:ml-10 mobile:ml-5"
        >
          <svg
            className="svg-icon w-6 h-6 z-30 stroke-primary mr-3"
            viewBox="0 0 20 20"
          >
            <path
              fill="none"
              d="M12.173,16.086c0.72,0,1.304-0.584,1.304-1.305V6.089c0-0.72-0.584-1.304-1.304-1.304c-0.721,0-1.305,0.584-1.305,1.304v8.692C10.868,15.502,11.452,16.086,12.173,16.086z M11.738,6.089c0-0.24,0.194-0.435,0.435-0.435s0.435,0.194,0.435,0.435v8.692c0,0.24-0.194,0.436-0.435,0.436s-0.435-0.195-0.435-0.436V6.089zM16.52,16.086c0.72,0,1.304-0.584,1.304-1.305v-11.3c0-0.72-0.584-1.304-1.304-1.304c-0.721,0-1.305,0.584-1.305,1.304v11.3C15.215,15.502,15.799,16.086,16.52,16.086z M16.085,3.481c0-0.24,0.194-0.435,0.435-0.435s0.435,0.195,0.435,0.435v11.3c0,0.24-0.194,0.436-0.435,0.436s-0.435-0.195-0.435-0.436V3.481z M3.48,16.086c0.72,0,1.304-0.584,1.304-1.305v-3.477c0-0.72-0.584-1.304-1.304-1.304c-0.72,0-1.304,0.584-1.304,1.304v3.477C2.176,15.502,2.76,16.086,3.48,16.086z M3.045,11.305c0-0.24,0.194-0.435,0.435-0.435c0.24,0,0.435,0.194,0.435,0.435v3.477c0,0.24-0.195,0.436-0.435,0.436c-0.24,0-0.435-0.195-0.435-0.436V11.305z M18.258,16.955H1.741c-0.24,0-0.435,0.194-0.435,0.435s0.194,0.435,0.435,0.435h16.517c0.24,0,0.435-0.194,0.435-0.435S18.498,16.955,18.258,16.955z M7.826,16.086c0.72,0,1.304-0.584,1.304-1.305V8.696c0-0.72-0.584-1.304-1.304-1.304S6.522,7.977,6.522,8.696v6.085C6.522,15.502,7.106,16.086,7.826,16.086z M7.392,8.696c0-0.239,0.194-0.435,0.435-0.435s0.435,0.195,0.435,0.435v6.085c0,0.24-0.194,0.436-0.435,0.436s-0.435-0.195-0.435-0.436V8.696z"
            ></path>
          </svg>
          <span className="z-30 text-lg text-primary">Skills</span>
        </Link>
      </section>
    </main>
  );
}
