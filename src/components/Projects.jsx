import React, { useState } from "react";
import SpotCircle from "./SpotCircle";
import Button from "./Button";

import projects from "../assets/data/projects"; // array من المشاريع

import arrow from "../assets/arrow.png";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { Link } from "react-router-dom";

const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  //arrow left
  const prevProject = () => {
    setCurrentIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  };
  //arrow right
  const nextProject = () => {
    setCurrentIndex((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
  };

  const project = projects[currentIndex];

  return (
    <div className="w-full h-auto">
      {/* title */}
      <h3 className="project-title font-bold text-5xl capitalize relative text-center">
        see our projects
      </h3>

      <div className="flex xl:flex-row flex-col justify-between items-center my-32 w-full xl:w-[90%] mx-auto space-y-12">
        {/* left arrow */}

        <AiOutlineArrowLeft
          onClick={prevProject}
          className="w-12 h-12 cursor-pointer hover:text-purple duration-300"
        />

        {/* project info */}
        <div className="relative w-full xl:w-1/2">
          <h4 className="text-3xl font-bold">{project.title}</h4>
          <p className="my-8 font-medium leading-relaxed text-lg w-full">
            {project.description}
            <span className="text-purple font-semibold ml-2">see more</span>
          </p>

          {/* circle behind */}
          <div className="absolute top-0 -left-[20%] -z-10">
            <SpotCircle bgColor="pink" blur="xl" />
          </div>
        </div>

        {/* project pics */}
        <div className="flex gap-2">
          <div>
            <div className="w-48 h-36 bg-gray-300 rounded-xl"></div>
            <div className="flex items-end text-gray">
              <img
                src={arrow}
                alt=""
                className="w-24 h-24 transform rotate-[180deg] scale-x-[-1]"
              />
              <span>home page</span>
            </div>
            <div className="w-48 h-36 bg-gray-300 rounded-xl"></div>
          </div>
          <div>
            <div className="flex items-center text-gray">
              <span>home page</span>
              <img
                src={arrow}
                alt=""
                className="w-36 h-36 transform rotate-[180deg]"
              />
            </div>
            <div className="w-48 h-36 bg-gray-300 rounded-xl"></div>

            <div className="flex items-center text-gray">
              <span>home page</span>
              <img
                src={arrow}
                alt=""
                className="w-36 h-36 transform rotate-[180deg]"
              />
            </div>
          </div>
        </div>
        {/* right arrow */}
        <AiOutlineArrowRight
          onClick={nextProject}
          className="w-12 h-12 cursor-pointer hover:text-purple duration-300"
        />
      </div>

      <div className="w-full flex justify-end mb-12">
        <Link to="projects">
          <Button>see more</Button>
        </Link>
      </div>
    </div>
  );
};

export default Projects;
