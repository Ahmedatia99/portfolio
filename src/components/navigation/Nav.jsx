import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./nav.css";

export default function Nav() {
  const [navbar, setNavbar] = useState(false);

  return (
    <main className=" container mx-auto text-white sm:px-2 w-full lg:py-10 md:py-10 sm:py-5 mobile:py-5 bg-transparent">
      <div className=" ">
        <div className="relative">
          {/* Logo  */}
          <div className="flex justify-between items-center">
            <a href="./Home" className="flex">
              <img
                src={"./images/Logo.png"}
                alt="A3"
                className=" lg:h-24 md:h-24 sm:h-16 mobile:h-16 lg:mt-5 md:mt-5 sm:mt-0 mobile:mt-0"
              />
            </a>
            <div className="md:block relative z-50">
              <button
                className="p-2 text-light rounded outline-none lg:focus:border-primary md:focus:border-primary sm:focus:border-morning mobile:focus:border-morning focus:border"
                onClick={() => setNavbar(!navbar)}
              >
                {navbar ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-11 h-11 lg:text-primary md:text-primary sm:text-morning mobile:text-morning"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-11   h-11 lg:text-primary md:text-primary sm:text-morning mobile:text-morning"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
          <div
            className={`opacity-100 flex justify-center items-center flex-col bg-white absolute top-0 right-0 z-40 text-primary mt-7 w-80 md:block rounded-lg
            ${
              navbar
                ? " lg:block md:block sm:block mobile:block display"
                : "lg:hidden md:hidden sm:hidden mobile:hidden "
            } 
            `}
          >
            <ul className="pt-20 text-xl font-mono w-full">
              <li className=" transition-all hover:translate-x-2 py-6 px-10 opacity-100">
                <Link to={"/projects"}>My Work</Link>
              </li>
              <li className=" transition-all hover:translate-x-2 py-6 px-10 ">
                <Link to={"/skill"}>Skills</Link>
              </li>
              <hr className="mx-5"></hr>
              <li className="  py-6 px-10 pb-3 text-gray-400 ">
                <a href="">say Hello </a>
              </li>
              <li className="  transition-all hover:translate-x-2 px-10  py-4">
                <a
                  href="https://www.linkedin.com/in/ahmed-atia-b60458206/"
                  target="blank"
                >
                  Ahmed Atia
                </a>
              </li>
              <li className="  transition-all hover:translate-x-2 px-10 py-4 pb-6">
                <a
                  href="https://www.paypal.com/paypalme/ahmedatiaa99/"
                  target="blank"
                >
                  Connect a wallet
                </a>
              </li>
              <div className="flex justify-center bg-primary p-5 rounded-md ">
                <a
                  className=" text-white mr-5"
                  href="https://www.linkedin.com/in/ahmed-atia-b60458206/"
                  target="blank"
                >
                  <img className=" w-5 h-5 my-2" src="./images/linkedin.svg" />
                </a>{" "}
                <a
                  href="https://twitter.com/ahmedatiaa99"
                  className="mr-6 text-caption "
                  target="blank"
                >
                  <img className=" " src="./images/TwitterLogo.svg" />
                </a>
                <a
                  href="https://www.instagram.com/ahmedatiaa99/"
                  className="mr-6 text-caption"
                  target="blank"
                >
                  <img className="" src="./images/InstagramLogo.svg" />
                </a>
              </div>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}
