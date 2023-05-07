import React from 'react'

export default function Contact() {
  return (
    <footer className="relative bg-footer bg-footer-bg h-screen text-center flex justify-center flex-col text-morning text-xl font-sfu ">
      <div
        className="mx-6 py-10 text-center md:text-left relative z-50"
        data-aos="fade-right"
      >
        <div className="grid-1 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div className="text-caption">
            <img className="mr-3 w-28 h-24" src="./images/Logo.png" />
            <div className="flex flex-col desktop:items-start mobile:items-center desktop:justify-start mobile:justify-center border-caption mt-5 lg:justify-between">
              {/* Social media */}
              <p className="text-base mb-3">Join to my community</p>
            </div>
          </div>
          <div className="">
            <h6 className="mb-4 flex justify-center capitalize md:justify-start">
              My Work
            </h6>
            <p className="mb-4">
              <a href="#!" className="text-caption ">
                Skills
              </a>
            </p>
          </div>
          <div className="flex flex-col">
            <h6 className="mb-4 flex justify-center capitalize font-spaceMono md:justify-start text-gray-300">
              Say Hello
            </h6>
            <a
              className="text-base text-caption mb-5 "
              href="https://accounts.google.com/SignOutOptions?hl=ar&continue=https://mail.google.com&service=mail"
              target="blank"
            >
              atyaa629@gmail
            </a>
            <a
              className="text-base text-caption mb-5 "
              href="https://github.com/Ahmedatia99"
              target="blank"
            >
              Ahmedatia99
            </a>
          </div>
        </div>
      </div>
      <hr className="mx-8" />
      <div
        className=" py-8  text-center flex justify-between mx-20  "
        data-aos="fade-right"
      >
        <span className="flex justify-center items-center lg:text-xl sm:text-xs">
          ©
          <a
            className="desktop:text-lg mobile:text-xs   mx-1 flex justify-center"
            href="https://www.freelancer.com/u/atia99"
          >
            <span className="text-white">Ahmed Atia</span>
          </a>{' '}
          2023
        </span>
        <div className="flex justify-center">
          <a
            className=" text-white mr-5"
            href="https://www.freelancer.com/u/atia99"
          >
            <img className=" w-8 h-8" src="./images/freelancer-icon.svg" />
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
      </div>
    </footer>
  )
}
