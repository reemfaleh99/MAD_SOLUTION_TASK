import React from "react";
import SpotCircle from "./SpotCircle";
import Navbar from "./Navbar";
import HeaderContent from "./HeaderContent";
import { AiOutlineArrowDown } from "react-icons/ai";

const Header = () => {
  return (
    <div className="h-screen w-full relative overflow-y-hidden ">
      {/* circles behind */}
      <div className="grid grid-rows-2 gap-5 absolute top-0 inset-x-0">
        <div className="flex justify-center gap-72 ">
          <SpotCircle bgColor="black" blur="3xl" />
          <SpotCircle bgColor="purple" blur="3xl" />
        </div>
        <div className="flex justify-end gap-72">
          <SpotCircle bgColor="pink" blur="3xl" />
          <SpotCircle bgColor="purple" blur="3xl" />
        </div>
      </div>
      {/* header info */}
      <HeaderContent />
      <div className="absolute bottom-0 left-1/2 bg-white px-5 py-2 rounded-tl-full rounded-tr-full">
        <AiOutlineArrowDown className="w-10 h-10 " />
      </div>
    </div>
  );
};

export default Header;
