import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./nav.css";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { LuMenu } from "react-icons/lu";
import { MdClose } from "react-icons/md";
import { motion, AnimatePresence } from "framer-motion";

export default function Nav() {
  const [navbar, setNavbar] = useState(false);

  const toggleMenu = () => setNavbar(!navbar);

  // Disable scrolling when navbar is open
  useEffect(() => {
    if (navbar) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = ""; // Cleanup on unmount
    };
  }, [navbar]);

  return (
    <main className="container mx-auto text-white sm:px-2 w-full lg:py-10 md:py-10 sm:py-5 bg-transparent">
      <div className="relative">
        {/* Logo & Menu Button */}
        <div className="flex justify-between items-center">
          <a href="./Home" className="flex">
            <img
              src="/images/Logo.png"
              alt="Logo"
              className="lg:h-24 md:h-24 sm:h-16 mobile:h-16 lg:mt-5 md:mt-5 sm:mt-0"
            />
          </a>
          <div className="md:block relative z-50">
            <button
              className="p-2 text-light rounded outline-none"
              onClick={toggleMenu}
            >
              {navbar ? (
                <MdClose
                  size={45}
                  className="text-primary border-primary border p-2 rounded-sm"
                />
              ) : (
                <LuMenu
                  size={45}
                  className="text-primary border-primary focus:border p-2 rounded-sm"
                />
              )}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {navbar && (
            <>
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.5 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="fixed inset-0 bg-black/50 z-40"
                onClick={toggleMenu}
              />

              {/* Sidebar */}
              <motion.div
                initial={{ x: "-100%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: "-100%", opacity: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="fixed left-0 top-0 h-full w-96 bg-white shadow-lg p-6 z-50"
              >
                <ul className="pt-20 text-2xl font-mono font-medium text-primary">
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
                    <a
                      href="https://www.linkedin.com/in/ahmed-atia-b60458206/"
                      target="_blank"
                    >
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

                {/* Social Links */}
                <div className="absolute bottom-0 right-0 w-full flex justify-center items-center gap-8 bg-primary p-5">
                  <a
                    href="https://www.linkedin.com/in/ahmed-atia-b60458206/"
                    target="_blank"
                  >
                    <FaLinkedin className="text-3xl text-white" />
                  </a>
                  <a href="https://github.com/Ahmedatia99" target="_blank">
                    <FaGithub className="text-3xl text-white" />
                  </a>
                  <a
                    href="https://www.instagram.com/itsahmedatia/"
                    target="_blank"
                  >
                    <img
                      loading="lazy"
                      src="/images/InstagramLogo.svg"
                      alt="Instagram"
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
