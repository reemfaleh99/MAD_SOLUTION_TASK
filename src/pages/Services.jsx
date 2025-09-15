import React from "react";
import SpotCircle from "../components/SpotCircle";

const Services = () => {
  return (
    <div className="my-32 px-12 relative w-full py-48 mx-auto space-y-24">
      {" "}
      <h3 className="project-title font-bold text-5xl capitalize relative text-center">
        our services
      </h3>
      <p className="mt-10 text-xl text-black w-3xl text-center mx-auto">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
        accusantium repellendus ea tempore minima consequuntur. Lorem ipsum
        dolor sit amet consectetur adipisicing elit. Consequatur accusantium
        repellendus ea tempore minima consequuntur.
      </p>
      <div className="flex flex-col lg:flex-row items-center justify-between gap-36 relative">
        <img
          src="https://images.unsplash.com/photo-1615914143778-1a1a6e50c5dd?q=80&w=1168&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
          className="w-full lg:w-1/3 h-[450px] rounded-xl "
        />
        <div className="relative w-full lg:w-1/3">
          <div className="absolute w-5 h-5 border-4 border-lilac rounded-full top-1/3 -left-1/2"></div>
          <div className="absolute w-5 h-5 border-4 border-lilac rounded-full top-1/2 -left-1/3"></div>
          <h4 className="text-3xl font-bold">Car website design</h4>
          <p className="my-8 text-xl font-medium ">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae
            molestiae aspernatur reprehenderit porro placeat cumque eaque. Lorem
            ipsum dolor sit amet consectetur adipisicing elit. Vitae molestiae
            aspernatur reprehenderit porro placeat cumque eaque totam
            consequatur accusantium?
            <span className="text-purple font-semibold ml-2">see more</span>
          </p>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row items-center justify-between gap-36 relative">
        <div className="absolute w-5 h-5 border-4 border-lilac rounded-full top-1/3 left-1/2"></div>
        <div className="absolute w-5 h-5 border-4 border-lilac rounded-full top-1/2 left-1/3"></div>
        <div className="absolute w-5 h-5 border-4 border-lilac rounded-full bottom-1/2 right-1/3"></div>
        <div className="relative w-full lg:w-1/3">
          <h4 className="text-3xl font-bold">Car website design</h4>
          <p className="my-8 text-xl font-medium ">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae
            molestiae aspernatur reprehenderit porro placeat cumque eaque. Lorem
            ipsum dolor sit amet consectetur adipisicing elit. Vitae molestiae
            aspernatur reprehenderit porro placeat cumque eaque totam
            consequatur accusantium?
            <span className="text-purple font-semibold ml-2">see more</span>
          </p>
        </div>
        <img
          src="https://images.unsplash.com/photo-1615914143778-1a1a6e50c5dd?q=80&w=1168&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
          className="w-full lg:w-1/3 h-[400px] rounded-xl "
        />{" "}
      </div>
      <div className="flex flex-col lg:flex-row items-center justify-between gap-36 relative">
        <img
          src="https://images.unsplash.com/photo-1615914143778-1a1a6e50c5dd?q=80&w=1168&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
          className="w-full lg:w-1/3 h-[400px] rounded-xl "
        />
        <div className="relative w-full lg:w-1/3">
          <div className="absolute w-5 h-5 border-4 border-lilac rounded-full top-1/3 -left-1/2"></div>
          <div className="absolute w-5 h-5 border-4 border-lilac rounded-full top-1/2 -left-1/3"></div>
          <div className="absolute w-5 h-5 border-4 border-lilac rounded-full bottom-1/2 right-0"></div>
          <h4 className="text-3xl font-bold">Car website design</h4>
          <p className="my-8 text-xl font-medium">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae
            molestiae aspernatur reprehenderit porro placeat cumque eaque. Lorem
            ipsum dolor sit amet consectetur adipisicing elit. Vitae molestiae
            aspernatur reprehenderit porro placeat cumque eaque totam
            consequatur accusantium?
            <span className="text-purple font-semibold ml-2">see more</span>
          </p>
        </div>
      </div>
      <div className="flex flex-col items-center hidden lg:block">
        <div className="curve part1"></div>
        <div className="curve part2"></div>
        <div className="curve part3"></div>
        <div className="curve part4"></div>
      </div>{" "}
    </div>
  );
};

export default Services;
