import React from "react";
import Button from "./Button";
import { Link } from "react-router-dom";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const items = [
  {
    name: "flutter development",
    desc: "they play a crucial role in creating hight-quality mobile application that run smoothly on both Android and ios platffrom",
  },
  {
    name: "flutter development",
    desc: "they play a crucial role in creating hight-quality mobile application that run smoothly on both Android and ios platffrom",
  },
  {
    name: "flutter development",
    desc: "they play a crucial role in creating hight-quality mobile application that run smoothly on both Android and ios platffrom",
  },
  {
    name: "flutter development",
    desc: "they play a crucial role in creating hight-quality mobile application that run smoothly on both Android and ios platffrom",
  },
  {
    name: "flutter development",
    desc: "they play a crucial role in creating hight-quality mobile application that run smoothly on both Android and ios platffrom",
  },
  {
    name: "flutter development",
    desc: "they play a crucial role in creating hight-quality mobile application that run smoothly on both Android and ios platffrom",
  },
];

const Services = () => {
  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    gsap.from(".service", {
      opacity: 0,
      y: 100,
      duration: 1,
      stagger: 0.3,
      scrollTrigger: {
        trigger: ".service",
        start: "top 85%",
        toggleActions: "play none none reverse",
      },
    });
  });
  return (
    <div className="bg-offwhite py-12 px-6 md:px-12">
      {/* title */}
      <h3 className="project-title font-bold text-5xl capitalize relative text-center">
        our services
      </h3>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-20 my-32 w-full">
        {items.map((item, index) => (
          <div
            className="service relative flex flex-col items-center "
            key={index}
          >
            {/* first shape */}
            <div className="w-48 h-48 box-1 transform rotate-[45deg] relative border-l-0 ">
              <div className="absolute -bottom-1 -left-[1%] w-[6px] h-1/4 bg-purple"></div>
            </div>
            {/* ssecond shape */}
            <div className="w-48 h-48 box-2 transform rotate-[45deg] absolute -top-[5%] border-l-0 ">
              <div className="absolute -bottom-1 -left-[1%] w-[6px] h-1/4 bg-black"></div>
              {/* name */}
              <div className="absolute top-1/2 left-1/2 transform -rotate-[45deg] -translate-y-1/2 -translate-x-1/2 text-2xl capitalize text-center font-semibold">
                {item.name}
              </div>
            </div>
            {/* description */}
            <p className="mt-16 text-xl text-gray font-medium w-3/4">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
      <div className="w-full flex justify-end mb-12">
        <Link to="service">
          <Button>see more</Button>
        </Link>
      </div>
    </div>
  );
};

export default Services;
