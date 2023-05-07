import React from 'react'
import { useState } from 'react'

export default function Nav() {
  const [navbar, setNavbar] = useState(false)

  return (
    <nav className="bg-background text-white ">
      <div className=" ">
        <div className="relative">
          {/* Logo  */}
          <div className="flex justify-between items-center">
            <a href="./Home" className="flex">
              <img
                src={'./images/Logo.png'}
                alt="A3"
                className=" h-24 mt-5 pl-16"
              />
            </a>
            <div className="md:block relative z-50">
              <button
                className="p-2 text-light rounded outline-none focus:border-primary focus:border"
                onClick={() => setNavbar(!navbar)}
              >
                {navbar ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-11 h-11 text-primary"
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
                    className="w-11   h-11 text-primary"
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
            className={` opacity-100 flex justify-center items-center flex-col bg-white absolute top-0 right-0 z-40 text-primary mt-7 w-80 md:block rounded-lg
            ${navbar ? 'md:block sm:block' : 'md:hidden sm:hidden'} 
            `}
          >
            <ul className="pt-20 text-xl font-sfu ">
              <li className=" transition-all hover:translate-x-2 py-6 px-10">
                <a href="">My Work</a>
              </li>
              <li className=" transition-all hover:translate-x-2 py-6 px-10 ">
                <a href="" className="">
                  Skills
                </a>
              </li>
              <hr className="mx-5"></hr>
              <li className="  py-6 px-10 pb-3 text-gray-400 ">
                <a href="">say Hello </a>
              </li>
              <li className="  transition-all hover:translate-x-2 px-10  py-4">
                <a href="https://www.freelancer.com/u/atia99">Ahmed Atia</a>
              </li>
              <li className="  transition-all hover:translate-x-2 px-10 py-4 pb-6">
                <a href="">Connect a wallet</a>
              </li>
              <div className="flex justify-center bg-primary p-5 rounded-md">
                <a
                  className=" text-white mr-5"
                  href="https://www.freelancer.com/u/atia99"
                >
                  <img
                    className=" w-8 h-8"
                    src="./images/freelancer-icon.svg"
                  />
                </a>{' '}
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
    </nav>
  )
}
