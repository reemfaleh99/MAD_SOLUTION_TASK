import React from "react";
import SpotCircle from "./SpotCircle";
import Button from "./Button";

import arrow from "../assets/arrow.png";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { Link } from "react-router-dom";

const Projects = () => {
  return (
    <div className="w-full h-auto ">
      {/* title */}
      <h3 className="project-title font-bold text-5xl capitalize relative text-center">
        see our projects
      </h3>

      <div className="flex xl:flex-row flex-col justify-between items-center my-32 w-full xl:w-[90%] mx-auto space-y-12">
        {/* project info */}
        <AiOutlineArrowLeft className="w-12 h-12" />
        <div className="relative w-full xl:w-1/2">
          <h4 className="text-3xl font-bold">Car website design</h4>
          <p className="my-8 font-medium leading-relaxed text-lg w-full">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae
            molestiae aspernatur reprehenderit porro placeat cumque eaque. Lorem
            ipsum dolor sit amet consectetur adipisicing elit. Vitae molestiae
            aspernatur reprehenderit porro placeat cumque eaque totam
            consequatur accusantium? Lorem ipsum, dolor sit amet consectetur
            adipisicing elit. Vitae molestiae aspernatur reprehenderit porro
            placeat cumque eaque. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Vitae molestiae aspernatur reprehenderit porro
            placeat cumque eaque totam consequatur accusantium?
            <span className="text-purple font-semibold ml-2">see more</span>
          </p>
          {/* circle behind */}
          <div className="absolute top-0 -left-[20%] -z-10">
            <SpotCircle bgColor="pink" blur="xl" />
          </div>
        </div>
        {/* project pics */}
        <div className="flex gap-2 ">
          <div>
            <div className="w-48 h-36 bg-gray-300 rounded-xl"></div>
            <div className="flex items-end text-gray">
              <img
                src={arrow}
                alt=""
                className="w-24 h-24 transfrom rotate-[180deg] scale-x-[-1]"
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
                className="w-36 h-36 transfrom rotate-[180deg]"
              />
            </div>
            <div className="w-48 h-36 bg-gray-300 rounded-xl"></div>

            <div className="flex items-center text-gray">
              <span>home page</span>
              <img
                src={arrow}
                alt=""
                className="w-36 h-36 transfrom rotate-[180deg]"
              />
            </div>
          </div>
        </div>
        <AiOutlineArrowRight className="w-12 h-12" />
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
