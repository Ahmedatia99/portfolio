import React from "react";
import projects from "../constants/projects.json";
import { Link } from "react-router-dom";
import { MdKeyboardArrowRight } from "react-icons/md";
import { FaArrowRightLong } from "react-icons/fa6";
import ProjectCard from "./atoms/ProjectCard";

export default function Projects() {
  return (
    <main className="relative h-screen flex  flex-col justify-center items-center bg-supcolor z-50">
      <ProjectCard data={projects} limit={4} />
      <Link
        to={"/projects"}
        className="link relative transition-all flex items-center px text-fonts border-solid border-primary border-2 rounded-lg px-10 py-3 w-fit justify-center"
      >
        <span className="relative z-30 mr-1 font-kanit">Show all projects</span>
        <MdKeyboardArrowRight className="cursor-pointer relative z-30 transition-all" />
      </Link>
      <img
        src="./images/icon-dotted-map-2.png"
        alt="wallpaper"
        className="absolute right-0 top-0"
      />
    </main>
  );
}
