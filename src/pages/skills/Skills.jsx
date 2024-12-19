import React from "react";
import Feature from "../../components/atoms/skill/Feature";
import { Link } from "react-router-dom";
import "../../components/workspace/works.css";
export default function Skills() {
  return (
    <main className="over w-screen h-screen relative">
      <section className="dots desktop:max-w-3xl tablet:max-w-xl mobile:w-full h-full tablet:h-auto p-5 tablet:absolute tablet:top-2/4 tablet:left-0 tablet:translate-x-2/4 tablet:-translate-y-2/4 tablet:rounded-xl mobile:rounded-none mobile:pt-10 tablet:pt-5">
        <div className="flex justify-center items-center pb-3">
          <Link to={"/projects"}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              fill="currentColor"
              className="bi bi-arrow-left text-primary absolute top-0 left-0 m-5 cursor-pointer hover:-translate-x-1"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
              />{" "}
            </svg>
          </Link>
          <h1 className="text-4xl font-mono text-primary font-bold">Skills</h1>
        </div>
        <Feature name="Html5" dataval="100" value="100" />
        <Feature name="CSS / CSS3" dataval="100" value="100" />
        <Feature name=" Preprocessor - (SCSS, SASS)" dataval="92" value="92" />
        <Feature name="javascript" dataval="80" value="80" />
        <Feature name="react.js" dataval="95" value="95" />
        <Feature name="NExt.js" dataval="80" value="80" />
        <Feature name="tailwind" dataval="100" value="100" />
        <Feature name="Bootstrap" dataval="100" value="100" />
        <Feature name="Typescript" dataval="70" value="70" />
        <Feature name=" PSD, Figma, PDF, XD" dataval="100" value="100" />
      </section>
    </main>
  );
}
