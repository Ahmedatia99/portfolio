import Email from "./atoms/Email";
import { BsTelephone } from "react-icons/bs";
import { MdOutlineEmail } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
import { FaGithub } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { FaArrowAltCircleUp } from "react-icons/fa";

export default function Footer() {
  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <main className="h-screen footer flex justify-center max-sm:justify-between flex-col items-center gap-10 max-sm:gap-0 w-full font-mono pt-20 max-sm:pt-6 overflow-hidden">
      <section className="container mx-auto w-full flex max-sm:flex-col: justify-center items-center">
        <div className="  grid sm:grid-cols-1 md:grid-cols-2  gap-5">
          <div className="flex flex-col items-center justify-between ml-2 md:ml-20">
            <article className="flex flex-col justify-center w-full">
              <h1 className="font-kanit font-semibold text-morning text-3xl md:text-5xl tracking-tight mb-2 md:mb-5">
                Get In Touch
              </h1>
              <p className="text-supcolor max-w-md max-sm:text-xs">
                Feel free to contact Me! submit your queries here and I will get
                back to you as soon as possible.
              </p>
            </article>

            <div className="flex flex-col  gap-5 max-sm:gap-2  w-full mt-2 md:mt-10">
              <div className="flex md:flex-col gap-1 md:gap-3 text-fonts max-sm:text-supcolor max-sm:font-kanit text-xs md:text-xl my-3 md:m-0">
                <h1 className="flex items-center">
                  <BsTelephone className=" mr-1 md:mr-5 w-4 md:w-5 h-4 md:h-5" />
                  +201117910989
                </h1>
                <h1 className="flex items-center">
                  <MdOutlineEmail className=" mr-1 md:mr-5 w-4 md:w-5 h-4 md:h-5" />
                  atyaa629@gmail.com
                </h1>
                <h1 className="flex items-center">
                  <IoLocationOutline className=" mr-1 md:mr-5 w-4 md:w-5 h-4 md:h-5" />
                  Cairo,Egypt
                </h1>
              </div>
              <hr className="border-gray-300 w-72 max-sm:w-full m-0 p-0" />
              <div className="flex items-center  max-sm:justify-center gap-5">
                <Link
                  to="https://web.facebook.com/ahmedatiaa74"
                  className="w-fit"
                >
                  <img
                    src="/images/social media/facebook.png"
                    className="w-8"
                  />
                </Link>
                <Link
                  to="https://www.instagram.com/itsahmedatia/"
                  className="w-fit"
                >
                  <img src="/images/social media/insta.png" className="w-8" />
                </Link>
                <Link to="" className="w-fit">
                  <img
                    src="/images/social media/linkedin.png"
                    className="w-8"
                  />
                </Link>
                <Link to="" className="w-fit">
                  <FaGithub size={30} />
                </Link>
                <Link to="" className="w-fit">
                  <FaSquareXTwitter size={30} />
                </Link>
              </div>
            </div>
          </div>
          <div className="!flex justify-center">
            <Email />
          </div>
        </div>
      </section>
      <section className="border-t  border-gray-300 flex justify-center relative w-full">
        <div className="container mx-auto pt-4 flex items-center justify-center max-sm:text-xs w-full py-3 ">
          <span> Ahmed Atia. All rights reserved 2025©</span>
          <Link onClick={scrollTop} className="w-fit absolute right-0">
            <FaArrowAltCircleUp className="w-10 h-10 max-sm:w-9 p-2 text-primary mr-0 md:mr-10" />
          </Link>
        </div>
      </section>
    </main>
  );
}
