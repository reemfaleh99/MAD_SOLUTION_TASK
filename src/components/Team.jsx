import React from "react";
import Button from "./Button";
import { AiOutlineLaptop } from "react-icons/ai";
import { FiFigma } from "react-icons/fi";
import { Link } from "react-router-dom";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const items = [
  {
    name: "flutter development",
    desc: "they play a crucial platform",
    img: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8fDB8fHww",
  },
  {
    name: "UI/UX design",
    desc: "creative and user-friendly designs",
    img: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?fm=jpg&q=60&w=2000",
  },
  {
    name: "frontend development",
    desc: "modern web applications",
    img: "https://images.unsplash.com/photo-1551836022-4c4c79ecde51?fm=jpg&q=60&w=2000",
  },
];

const Team = () => {
  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    gsap.from(".team", {
      opacity: 0,
      y: 100,
      duration: 1,
      stagger: 0.3,
      scrollTrigger: {
        trigger: ".team",
        start: "top 85%",
        toggleActions: "play none none reverse",
      },
    });
  });

  return (
    <div className="relative px-6 md:px-12">
      {/* circles */}
      <div className="absolute w-5 h-5 border-4 border-lilac rounded-full top-1/3 left-2/3"></div>
      <div className="absolute w-5 h-5 border-4 border-lilac rounded-full top-1/2 left-1/3"></div>
      <div className="absolute w-5 h-5 border-4 border-lilac rounded-full bottom-5 right-1/4"></div>
      {/* triangles */}
      <div className="absolute triangle-1 top-30 left-0"></div>
      <div className="absolute triangle-2 bottom-30 right-0"></div>
      {/* title */}
      <h3 className="project-title font-bold text-5xl capitalize relative text-center mt-32">
        meet our team
      </h3>
      <p className="text-center mt-10 text-xl lg:text-2xl text-black">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
        accusantium repellendus ea tempore minima consequuntur{" "}
      </p>

      <div className="grid  md:grid-cols-2 lg:grid-cols-3 gap-20 my-32 w-full">
        {items.map((item, index) => (
          <div
            className="team relative flex flex-col items-center "
            key={index}
          >
            {/* shape */}
            <div className="w-48 h-48 box-1 transform rotate-[45deg] relative border-l-0 bg-offwhite">
              <div className="absolute -bottom-1 -left-[1%] w-[6px] h-1/4 bg-purple"></div>
            </div>
            {/* shape */}
            <div className="w-48 h-48 box-2 border-yellow-500 border-5 transform rotate-[45deg] absolute -top-[5%] border-l-0 ">
              <div className="absolute -bottom-1 -left-[1%] w-[6px] h-1/4 bg-black"></div>
              <div className="absolute top-1/2 left-1/2 transform -rotate-[45deg] -translate-y-1/2 -translate-x-1/2 text-2xl capitalize text-center font-semibold"></div>
            </div>
            {/* image inside shape */}
            <div className="w-48 h-48 box-2  border-5 transform rotate-[45deg] border-l-0 overflow-hidden absolute top-0">
              <img
                src={item.img}
                alt={item.name}
                className="w-full h-full object-cover transform -rotate-[45deg]"
              />
            </div>
            {/* name */}
            <h5 className="mt-16 text-xl text-gray font-medium text-purple">
              {item.name}
            </h5>
            {/* description */}
            <p className="my-4 text-xl text-black font-medium ">{item.desc}</p>
            {/* icons */}
            <div className="flex gap-5 text-gray">
              <div>
                <AiOutlineLaptop className="w-6 h-6" />
              </div>
              <div>
                <FiFigma className="w-6 h-6" />
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="w-full flex justify-end mb-12">
        <Link to="teams">
          <Button>see more</Button>
        </Link>
      </div>
    </div>
  );
};

export default Team;
