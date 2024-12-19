import React from "react";

export default function Experience() {
  return (
    <main className="h-screen flex justify-center items-center w-full bg-primary lg:py-10 md:py-10 sm:py-5 mobile:py-5 flex-wrap">
      <article className="px-10">
        <div>
          <h1
            className="lg:text-6xl text-4xl font-extrabold max-w-xs text-morning"
            data-aos="flip-left"
          >
            Over the years,
          </h1>
          <div className=" lg:text-base max-sm:text-xs text-sm text-white lg:max-w-sm md:max-w-xs flex flex-col items-center font-mono">
            <p className="py-5" data-aos="fade-down">
              I've dedicated myself to crafting modern and responsive web
              interfaces that prioritize user satisfaction. My experience spans
              a variety of projects, including building sleek, accessible
              marketing websites and functional web applications designed to
              meet business needs.
            </p>
            <p className="pb-5 sm:pb-3 mobile:pb-3" data-aos="fade-down">
              As a passionate frontend developer, I strive to deliver clean,
              maintainable code and intuitive user experiences. With expertise
              in technologies like HTML, CSS, JavaScript, and React, I enjoy
              bringing ideas to life with a focus on detail and performance
            </p>
            <p className="pb-5 sm:pb-3 mobile:pb-3" data-aos="fade-down">
              I hold a Bachelor's degree in Computer Science, which laid the
              foundation for my journey into web development. I’m constantly
              learning and growing, staying updated with the latest tools and
              trends to ensure my work meets modern standards.
            </p>
            <p className="pb-5 sm:pb-3 mobile:pb-3" data-aos="fade-down">
              Through collaboration with clients and teams, I’ve developed a
              deep appreciation for how design and code can work together to
              create impactful digital solutions.
            </p>
          </div>
        </div>
      </article>
      <div className="max-w-xl lg:min-w-2xl aspect-auto" data-aos="zoom-out">
        <img src="./images/experience.svg" />
      </div>
    </main>
  );
}
