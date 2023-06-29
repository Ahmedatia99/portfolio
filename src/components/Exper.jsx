import React from "react";

export default function Experience() {
  return (
    <main className="flex justify-center items-center lg:gap-52 gap-0 h-screen w-full bg-primary lg:py-16 md:py-16 sm:py-5 mobile:py-5 flex-wrap">
      <article className="px-10">
        <div>
          <h1
            className="lg:text-6xl text-4xl font-extrabold max-w-xs text-morning"
            data-aos="flip-left"
          >
            Over the years,
          </h1>
          <div className="lg:text-sm text-xs text-white lg:max-w-sm md:max-w-xs flex flex-col items-center font-mono">
            <p className="py-5" data-aos="fade-down">
              I've built products for companies and businesses around the globe
              ranging from marketing websites to complex solutions and
              enterprise apps with focus on fast, elegant and accessible user
              experiences.
            </p>
            <p className="pb-5 sm:pb-3 mobile:pb-3" data-aos="fade-down">
              Currently, I work at Shopify as a Senior Frontend Engineer
              crafting thoughtful and inclusive experiences that adhere to web
              standards for over 3 million merchants across the world
            </p>
            <p className="pb-5 sm:pb-3 mobile:pb-3" data-aos="fade-down">
              . Before now, I was Principal Frontend Engineer at hellotax, where
              I worked on a suite of tools and services tailored towards
              automated VAT compliance for multi-channel sellers in Europe.
            </p>
            <p className="pb-5 sm:pb-3 mobile:pb-3" data-aos="fade-down">
              Prior to hellotax, I was Senior frontend engineering consultant
              with Pixel2HTML, building JavaScript applications and interfaces
              for orgs and individuals
            </p>
            <p className="pb-5 sm:pb-3 mobile:pb-3" data-aos="fade-down">
              . I once also led the frontend team at Conectar, an e-learning
              startup through building multiple React applications into a single
              robust learning platform.
            </p>
          </div>
        </div>
      </article>
      <div className="max-w-xl" data-aos="zoom-out">
        <img src="./images/experience.svg" />
      </div>
    </main>
  );
}
