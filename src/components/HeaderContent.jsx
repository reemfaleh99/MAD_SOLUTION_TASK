import React from "react";
import Button from "./Button";

import headerPic from "../assets/header.png";
import { Link } from "react-router-dom";

const HeaderContent = () => {
  return (
    <div className="px-12 flex justify-between gap-24 absolute top-1/2 transform -translate-y-1/4">
      <div>
        {/* mad solutiion rectangle shape and info */}
        <div className="relative title">
          <div className="lines">
            <div className="top-line"></div>
            <div className="left-line"></div>
            <div className="bottom-line"></div>
          </div>
          <h1 className="uppercase text-9xl font-semibold text-purple">mad</h1>
          <h1 className="uppercase text-9xl font-semibold text-purple">
            solution
          </h1>
          <p className="my-8 text-xl font-medium">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
            quae delectus tempore quos? Odio illum architecto officia,
            reiciendis repudiandae magnam cumque explicabo numquam possimus
            animi sapiente ad autem ipsa eius!
          </p>
        </div>
        <div className="my-24">
          <Link to="login">
            <Button children="get started" />
          </Link>
        </div>
      </div>
      {/* intro pic */}
      <div className="w-1/2 hidden lg:block">
        <img className="" src={headerPic} alt="" />
      </div>
    </div>
  );
};

export default HeaderContent;
