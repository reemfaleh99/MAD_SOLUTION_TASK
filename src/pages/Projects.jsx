import React from "react";
import SpotCircle from "../components/SpotCircle";

import project from "../assets/data/projects";

const Projects = () => {
  return (
    // shows all the projects
    <div className="my-32 px-12  w-full py-48 mx-auto space-y-24">
      <h3 className="project-title font-bold text-5xl capitalize relative text-center">
        see our projects
      </h3>
      {project.map((item, index) => {
        //changing items position
        const isReverse = item.reverse ?? index % 2 === 1;

        return (
          <div
            key={item.id}
            className={`flex flex-col lg:flex-row items-center justify-between gap-36 relative ${
              isReverse ? "lg:flex-row-reverse" : ""
            }`}
          >
            <img
              src={item.image}
              alt=""
              className={`w-full lg:w-1/3 h-[400px] rounded-xl object-cover`}
            />
            {/* descriptions */}
            <div className="relative w-full lg:w-1/3">
              {/* decoration */}
              {item.decorations &&
                item.decorations.map((item, index) => (
                  <div key={index} className={item}></div>
                ))}

              <h4 className="text-3xl font-bold">{item.title}</h4>
              <p className="my-8 text-xl font-medium">
                {item.description}
                <span className="text-purple font-semibold ml-2">see more</span>
              </p>
              {/* circles */}
              <div className={`absolute -top-1/3 -left-1/4 -z-10`}>
                <SpotCircle bgColor="pink" blur="xl" />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Projects;
