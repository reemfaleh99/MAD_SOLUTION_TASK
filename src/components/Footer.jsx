import React from "react";
import { AiFillFacebook, AiFillInstagram } from "react-icons/ai";

import bgImg from "../assets/wave-soft-vertical-hq (1).png";

const Footer = () => {
  return (
    <footer className="relative">
      {/* wavy background */}
      <div className="h-[20vh] md:h-[10%]">
        <img src={bgImg} alt="" className="w-full h-full object-cover" />
      </div>
      {/* footer info */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-full px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-black text-lg">
          <div className="flex gap-8">
            <span>Privacy Policy</span>
            <span>Terms and Use</span>
          </div>
          <div className="flex items-center gap-6">
            <AiFillFacebook className="w-8 h-8" />
            <AiFillInstagram className="w-8 h-8" />
            <span className="text-sm">All rights reserved 2023</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
