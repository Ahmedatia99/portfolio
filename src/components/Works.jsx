import { React, useState, useMemo } from "react";
import projects from "../constants/projects.json";
import { Link } from "react-router-dom";
import ProjectCard from "./atoms/ProjectCard";
import { AiFillHome } from "react-icons/ai";

export default function Works() {
  const [activeBtn, setActiveBtn] = useState("all");
  const filterData = useMemo(() => {
    return activeBtn === "all"
      ? projects
      : projects.filter((item) => item.tech.includes(activeBtn));
  }, [activeBtn]);
  const tech = ["react", "next", "typescript", "all"];

  return (
    <main className="relative h-screen flex  flex-col justify-center items-center bg-supcolor z-50">
      <div className="flex mb-10 shadow-xl border-primary border-2 rounded-lg relative z-10 bg-white">
        {tech.map((el) => (
          <button
            onClick={() => setActiveBtn(el)}
            className={`${
              activeBtn === el
                ? "bg-primary text-white border-none rounded-none"
                : ""
            } md:px-6 px-2 py-2 border-r-2 last-of-type:border-none border-gray-300 capitalize`}
          >
            {el}
          </button>
        ))}
      </div>
      {filterData.length > 0 ? (
        <ProjectCard data={filterData} limit={0} starter={0} />
      ) : (
        <>
          <img
            src="./images/course.png"
            className="aspect-auto max-w-sm h-auto my-10"
            loading="lazy"
          />
          <h1 className="text-primary font-semibold">
            No projects available Now
          </h1>
        </>
      )}
      <img
        src="./images/icon-dotted-map-2.png"
        alt="wallpaper"
        className="absolute right-0 top-0 z-0"
      />
      <Link to="/">
        <AiFillHome
          size={30}
          className="absolute left-5 md:left-12 top-5 md:top-10 text-primary"
        />
      </Link>
    </main>
  );
}
