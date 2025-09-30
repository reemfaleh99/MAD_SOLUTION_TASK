import React from "react";
import SpotCircle from "./SpotCircle";
import Navbar from "./Navbar";
import HeaderContent from "./HeaderContent";
import { AiOutlineArrowDown } from "react-icons/ai";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Header = () => {
  //animation
  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    gsap.from(".header", {
      opacity: 0,
      y: 100,
      duration: 1,
      stagger: 0.3,
      scrollTrigger: {
        trigger: ".header",
        start: "top 85%",
        toggleActions: "play none none reverse",
      },
    });
  });

  //take you down
  const handleClickDown = () => {
    window.scrollBy({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };
  return (
    <div className="h-screen w-full relative overflow-hidden header">
      {/* circles behind */}
      <div className="grid grid-rows-2 gap-5 absolute top-0 inset-x-0">
        <div className="flex justify-center gap-32 lg:gap-72 ">
          <SpotCircle bgColor="black" blur="3xl" />
          <SpotCircle bgColor="purple" blur="3xl" />
        </div>
        <div className="flex justify-end gap-32 lg:gap-72">
          <SpotCircle bgColor="pink" blur="3xl" />
          <SpotCircle bgColor="purple" blur="3xl" />
        </div>
      </div>
      {/* header info */}
      <HeaderContent />
      <div
        className="absolute bottom-0 left-1/2 bg-white px-5 py-2 rounded-tl-full rounded-tr-full cursor-pointer hover:bg-lilac transition duration-300 hidden lg:block"
        onClick={handleClickDown}
      >
        <AiOutlineArrowDown className="w-10 h-10" />
      </div>
    </div>
  );
};

export default Header;
