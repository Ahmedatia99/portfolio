import React from 'react'
import './liner.css'

export default function Info() {
  return (
    <main className="">
      <div className="flex justify-between items-center pl-16 flex-wrap my-20">
        {/* Name description */}
        <section className="relative flex justify-center items-center">
          {/* circle animate */}
          <div className=" flex  absolute left-0 rote">
            <div className="border-circle border-8 bg-  rounded-full	blur-sm  w-60 h-60 z-20"></div>
            <div className="border-juonir  border-8  rounded-full	blur-sm  w-60 h-60 relative right-[50px]"></div>
          </div>
          <div className="text-white flex flex-col px-8 z-20 ">
            <h1 className="text-6xl  liner">AHMED ATIA</h1>
            <p className="text-3xl pt-3 ">Front End Developer</p>
          </div>
        </section>
        <div className="flex justify-between items-center">
          {/* Image section */}
          <section className="">
            <div className="text-white relative flex items-center justify-center  ">
              <div className="border-circle border-[30px] rounded-full	blur-lg w-96 h-96 blr"></div>
              <img
                src="./images/atia.png"
                className="absolute bottom-0  rounded-full pb-8"
              />
            </div>
          </section>
          {/* contact section */}
          <section className="ml-10">
            <div className="text-white flex flex-col justify-center items-center w-14 gap-5">
              {' '}
              <a
                href="https://web.facebook.com/ahmedatiaa74/"
                className=" text-caption "
                target="blank"
              >
                <svg
                  viewBox="0 0 25 25"
                  className="w-7"
                  astro-icon="ri:facebook-circle-fill"
                >
                  <path
                    fill="currentColor"
                    d="M12 2C6.477 2 2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.989C18.343 21.129 22 16.99 22 12c0-5.523-4.477-10-10-10z"
                  ></path>
                </svg>
              </a>
              <a href="https://www.instagram.com/ahmedatiaa99/" target="blank">
                <svg
                  viewBox="0 0 25 25"
                  className="w-7"
                  astro-icon="typcn:social-instagram"
                >
                  <path
                    fill="currentColor"
                    d="M18 3H6C4.3 3 3 4.3 3 6v12c0 1.7 1.3 3 3 3h12c1.7 0 3-1.3 3-3V6c0-1.7-1.3-3-3-3zm-6 6c1.7 0 3 1.3 3 3s-1.3 3-3 3-3-1.3-3-3 1.3-3 3-3zm3.8-2c0-.7.6-1.2 1.2-1.2s1.2.6 1.2 1.2-.5 1.2-1.2 1.2-1.2-.5-1.2-1.2zM18 19H6c-.6 0-1-.4-1-1v-6h2c0 2.8 2.2 5 5 5s5-2.2 5-5h2v6c0 .6-.4 1-1 1z"
                  ></path>
                </svg>
              </a>
              <a href="https://www.freelancer.com/u/atia99" target="blank">
                <svg
                  viewBox="0 0 24 24"
                  className="w-7"
                  astro-icon="simple-icons:freelancer"
                >
                  <path
                    fill="currentColor"
                    d="m14.096 3.076 1.634 2.292L24 3.076M5.503 20.924l4.474-4.374-2.692-2.89m6.133-10.584L11.027 5.23l4.022.15M4.124 3.077l.857 1.76 4.734.294m-3.058 7.072 3.497-6.522L0 5.13m7.064 7.485 3.303 3.548 3.643-3.57 1.13-6.652-4.439-.228z"
                  ></path>
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/in/ahmed-atia-b60458206/"
                target="blank"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="25"
                  fill="currentColor"
                  className="bi bi-linkedin"
                  viewBox="0 0 16 16"
                >
                  {' '}
                  <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />{' '}
                </svg>
              </a>
            </div>
          </section>
        </div>
      </div>
      <div className="p-2 w-14 trans    ">
        <img src="./images/down.svg" />
      </div>
    </main>
  )
}
