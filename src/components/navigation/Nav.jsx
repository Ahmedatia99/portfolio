import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { LuMenu } from "react-icons/lu";
import { MdClose } from "react-icons/md";
import { motion, AnimatePresence } from "framer-motion";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";

export default function Nav() {
  const [navbar, setNavbar] = useState(false);

  const toggleMenu = () => setNavbar(!navbar);

  useEffect(() => {
    if (navbar) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [navbar]);

  const phoneNumber = "+201117910989";

  return (
    <main className="container mx-auto text-white sm:px-2 w-full lg:py-10 md:py-10 max-sm:py-5 bg-transparent">
      <div className="relative ">
        {/* Logo & Menu Button */}
        <div className="flex justify-between lg:px-20 md:px-0 items-center">
          <a href="./Home" className="flex">
            <img
              loading="lazy"
              src="/images/Logo.png"
              alt="Logo"
              className="lg:h-24 md:h-24 sm:h-16 mobile:h-16"
            />
          </a>
          <div className=" relative z-50">
            <button
              className="p-2 text-light rounded outline-none"
              onClick={toggleMenu}
            >
              {navbar ? (
                <MdClose
                  size={50}
                  className="text-primary border-primary  border-2 p-2 rounded-md font-semibold"
                />
              ) : (
                <LuMenu
                  size={50}
                  className="text-primary max-sm:text-morning border-primary focus:border-2 p-2 rounded-sm"
                />
              )}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {navbar && (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.5 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="fixed inset-0 bg-black/50 z-40"
                onClick={toggleMenu}
              />
              <motion.div
                initial={{ x: "-100%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: "-100%", opacity: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="max-sm:h-screen fixed left-0 top-0 h-full w-96 max-sm:w-full bg-white shadow-lg p-6 z-40"
              >
                <ul className="pt-20 max-sm:pt-5 relative max-sm:top-[20%] text-2xl font-mono font-medium text-primary">
                  <li className="transition-all hover:translate-x-2 py-6 px-10">
                    <Link to="/projects">My Work</Link>
                  </li>
                  <li className="transition-all hover:translate-x-2 py-6 px-10">
                    <Link to="/skill">Skills</Link>
                  </li>
                  <hr className="mx-5" />
                  <li className="py-6 px-10 text-gray-400">
                    <a href="#">Say Hello</a>
                  </li>
                  <li className="transition-all hover:translate-x-2 px-10 py-4">
                    <a href={`https://wa.me/${phoneNumber}`} target="_blank">
                      Ahmed Atia
                    </a>
                  </li>
                  <li className="transition-all hover:translate-x-2 px-10 py-4 pb-6">
                    <a
                      href="https://www.paypal.com/paypalme/ahmedatiaa99/"
                      target="_blank"
                    >
                      Connect a Wallet
                    </a>
                  </li>
                </ul>

                <div className="absolute bottom-0 right-0 w-full flex justify-center items-center gap-8 bg-primary p-5">
                  <a
                    href="https://www.linkedin.com/in/ahmed-atia-b60458206/"
                    target="_blank"
                  >
                    <FaLinkedin
                      size={30}
                      className="hover:scale-125 transition-all "
                    />
                  </a>
                  <a href="https://github.com/Ahmedatia99" target="_blank">
                    <FaGithub
                      size={30}
                      className="hover:scale-125 transition-all "
                    />
                  </a>
                  <a
                    href="https://www.instagram.com/itsahmedatia/"
                    target="_blank"
                  >
                    <FaInstagram
                      size={30}
                      className="hover:scale-125 transition-all "
                    />
                  </a>
                  <a href={`https://wa.me/${phoneNumber}`} target="_blank">
                    <FaWhatsapp
                      size={30}
                      className="hover:scale-125 transition-all "
                    />
                  </a>
                  <a href={`mailto:atyaa629@hotmail.com`} target="_blank">
                    <BiLogoGmail
                      size={30}
                      className="hover:scale-125 transition-all "
                    />
                  </a>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </main>
  );
}
