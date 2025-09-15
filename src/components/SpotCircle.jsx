import React from "react";

const colorMap = {
  purple: "bg-purple",
  pink: "bg-pink",
  black: "bg-black",
};

const blurMap = {
  sm: "blur-sm",
  md: "blur-md",
  lg: "blur-lg",
  xl: "blur-xl",
  "2xl": "blur-2xl",
  "3xl": "blur-3xl",
};

const SpotCircle = ({ bgColor, blur }) => {
  return (
    <div
      className={`w-[400px] h-[400px] rounded-full ${blurMap[blur]} ${colorMap[bgColor]}  blur-[${blur}] -z-10`}
    ></div>
  );
};

export default SpotCircle;
