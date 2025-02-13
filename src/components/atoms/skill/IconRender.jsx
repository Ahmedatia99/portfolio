import React from "react";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiNextdotjs, SiTypescript } from "react-icons/si";
import { FaSass, FaGitAlt, FaReact, FaJs } from "react-icons/fa";
import { TbBrandFramerMotion } from "react-icons/tb";

const iconMap = {
  RiTailwindCssFill,
  FaReact,
  SiTypescript,
  FaJs,
  SiNextdotjs,
  TbBrandFramerMotion,
  FaSass,
  FaGitAlt,
};
export default function IconRender({ iconName }) {
  const IconComponent = iconMap[iconName];
  return IconComponent ? (
    <IconComponent size={20} />
  ) : (
    <span> Icon Not Found </span>
  );
}
