import React from 'react'

export default function Contact() {
  return (
    <footer className="bg-footer h-screen text-center  mt-20">
      <div className="mx-6 py-10 text-center md:text-left">
        <div className="grid-1 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div className="text-caption">
            <h6 className="mb-4 flex items-center text-white font-spaceMono justify-center capitalize md:justify-start">
              <img className="mr-3" src="./images/icons/Storefront-logo.svg" />
              NFT MarketPlace
            </h6>
            <p className="text-base">
              NFT marketplace UI created with Anima for Figma.
            </p>
            <div className="flex flex-col desktop:items-start mobile:items-center desktop:justify-start mobile:justify-center border-caption mt-5 lg:justify-between">
              {/* Social media */}
              <p className="text-base mb-3">Join our community</p>
              <div className="flex justify-center">
                <a
                  className=" text-white mr-5"
                  href="https://www.freelancer.com/u/atia99"
                >
                  <img
                    className=" w-8 h-8"
                    src="./images/contact/freelancer-icon.svg"
                  />
                </a>{' '}
                <a
                  href="https://twitter.com/ahmedatiaa99"
                  className="mr-6 text-caption "
                  target="blank"
                >
                  <img className=" " src="./images/contact/TwitterLogo.svg" />
                </a>
                <a
                  href="https://www.instagram.com/ahmedatiaa99/"
                  className="mr-6 text-caption"
                  target="blank"
                >
                  <img className="" src="./images/contact/InstagramLogo.svg" />
                </a>
                <a
                  href="https://discord.com/channels/@me"
                  className="mr-6 text-caption "
                  target="blank"
                >
                  <img className="" src="./images/contact/DiscordLogo.svg" />
                </a>
              </div>
            </div>
          </div>
          <div className="">
            <h6 className="mb-4 flex justify-center capitalize font-spaceMono md:justify-start">
              Explore
            </h6>
            <p className="mb-4">
              <a href="#!" className="text-caption ">
                Marketplace
              </a>
            </p>
            <p className="mb-4">
              <a href="#!" className="text-caption ">
                Rankings
              </a>
            </p>
            <p className="mb-4">
              <a href="#!" className="text-caption ">
                Connect a wallet
              </a>
            </p>
          </div>
          <div>
            <h6 className="mb-4 flex justify-center capitalize font-spaceMono md:justify-start">
              Join our weekly digest
            </h6>
            <p className="text-base text-caption mb-5">
              Get exclusive promotions & updates straight to your inbox.
            </p>
            <div className="flex flex-wrap relative">
              <input
                type="email"
                placeholder="Enter your email here"
                className="desktop:px-3 mobile:px-3 desktop:py-4 mobile:py-3 placeholder-slate-300 text-slate-600  w-full bg-white rounded-xl text-sm border border-action outline-none focus:outline-none focus:ring  pr-10 "
              />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-morning py-3  text-center flex justify-center ">
        <span className="flex justify-center items-center desktop:text-lg mobile:text-xs">
          Made With{'  '}
          <img
            src="./images/contact/iconmonstr-favorite-1.svg"
            className=" w-3 h-3 mx-1"
          />
          By{' '}
          <a
            className="desktop:text-lg mobile:text-xs text-white  mx-1 flex justify-center"
            href="https://www.freelancer.com/u/atia99"
          >
            Ahmed Atia
          </a>{' '}
          © 2023
        </span>
      </div>
    </footer>
  )
}
