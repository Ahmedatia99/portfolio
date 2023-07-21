import React from "react";
import "./footer.css";
import "./massage.scss";
export default function Footer() {
  return (
    <main className="  h-screen w-full flex flex-col justify-start items-center font-helvetica text-morning ">
      <div className="  w-full flex flex-col justify-start items-center font-helvetica text-morning bg-footer">
        <div className="container  text-5xl  font-extrabold lg:my-14 my-14 w-full flex justify-center items-center lg:mr-36 md:mr-0 ">
          <h1>Let’s start</h1>
        </div>
        {/* section 2 */}
        <div className="container flex lg:flex-row flex-col lg:justify-between items-center">
          {/* Link */}
          <div className="text-3xl relative block effect border-b-2 border-morning ">
            <a
              className="relative text-morning  hover:translate-y-1 inline-block  p-5"
              href="/"
            >
              atia.com
            </a>
          </div>
          {/* hidden button in small screen*/}
          <div className="lg:block md:hidden sm:hidden mobile:hidden">
            <a
              href="https://www.linkedin.com/in/ahmed-atia-b60458206/"
              target="blank"
            >
              <div className="letter-image">
                <div className="animated-mail">
                  <div className="back-fold"></div>
                  <div className="letter">
                    <div className="letter-border"></div>
                    <div className="letter-title"></div>
                    <div className="letter-context"></div>
                    <div className="letter-stamp">
                      <div className="letter-stamp-inner"></div>
                    </div>
                  </div>
                  <div className="top-fold"></div>
                  <div className="body"></div>
                  <div className="left-fold"></div>
                </div>
              </div>
            </a>
          </div>
          <article className="flex  justify-center items-center  text-3xl lg:mr-0 mr-20 sm:mr-10 mobile:mr-10">
            <div className="clock mx-5 sm:mx-2 mobile:mx-2">
              <div className="hourhand"></div>
              <div className="secondhand"></div>
              <div className="minutehand"></div>
              <div className="circle"></div>
              <div className="hour12"></div>
              <div className="hour3"></div>
              <div className="hour6"></div>
              <div className="hour9"></div>
            </div>
            <div className="flex flex-col  relative items-center ">
              <span className="border-b-2 border-morning py-5 relative  effect">
                +0201117910989
              </span>
              <p className="py-5 text-xl text-gray-200  font-mono ">
                {" "}
                Cairo | Egypt
              </p>
            </div>
          </article>
        </div>
        <hr className="mt-20 sm:mt-10 mobile:mt-10 w-full container border-t-2 border-morning" />
        {/* social links */}
        <div className="container">
          <ul className="flex justify-between items-center p-5 sm:p-0 mobile:p-0 sm:py-5 mobile:py-5">
            <li className="border-2 border-morning rounded-3xl hover:scale-105  p-2 transition-all">
              <a href="https://web.facebook.com/ahmedatiaa74" target="blank">
                <img className="w-7" src="./images/facebook.svg" />
              </a>
            </li>
            <li className="border-2 border-morning rounded-3xl hover:scale-105  p-2 transition-all">
              {" "}
              <a href="//www.instagram.com/ahmedatiaa99/" target="blank">
                <img src="./images/InstagramLogo.svg" />
              </a>
            </li>
            <li className="border-2 border-morning rounded-3xl hover:scale-105  p-2 transition-all">
              {" "}
              <a
                href="https://www.linkedin.com/in/ahmed-atia-b60458206/"
                target="blank"
              >
                <img className="w-7" src="./images/linkedin.svg" />
              </a>
            </li>
            <li className="border-2 border-morning rounded-3xl hover:scale-105  p-2 transition-all">
              {" "}
              <a href="https://twitter.com/ahmedatiaa99" target="blank">
                <img src="./images/TwitterLogo.svg" />
              </a>
            </li>
            <li className="border-2 border-morning rounded-3xl hover:scale-105  p-2 transition-all">
              {" "}
              <a href="https://www.freelancer.com/u/atia99" target="blank">
                {" "}
                <svg
                  viewBox="0 0 24 24"
                  className="w-7 text-white"
                  astro-icon="simple-icons:freelancer"
                >
                  <path
                    fill="currentColor"
                    d="m14.096 3.076 1.634 2.292L24 3.076M5.503 20.924l4.474-4.374-2.692-2.89m6.133-10.584L11.027 5.23l4.022.15M4.124 3.077l.857 1.76 4.734.294m-3.058 7.072 3.497-6.522L0 5.13m7.064 7.485 3.303 3.548 3.643-3.57 1.13-6.652-4.439-.228z"
                  ></path>
                </svg>
              </a>
            </li>
          </ul>
        </div>
      </div>
      {/* section comment */}
      <div className="  relative bg-footer h-full w-full text-morning lg:pt-20 md:pt-20 sm:pt-10 mobile:pt-10">
        <div className="bg-action py-3 flex items-center justify-center font-bold">
          <span className=" text-footer w-full border-t-2 border-morning flex justify-center items-center desktop:text-xl mobile:text-xs absolute bottom-0 py-10 bg-morning">
            Made With{"  "}
            <img src="./images/heart.svg" className=" w-3 h-3 mx-1" />
            By{" "}
            <a
              className="lg:text-lg mobile:text-base text-footer  mx-1 flex justify-center"
              href="https://www.freelancer.com/u/atia99"
            >
              Ahmed Atia
            </a>{" "}
            © 2023
          </span>
        </div>
      </div>
    </main>
  );
}
