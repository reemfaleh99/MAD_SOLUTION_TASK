import React from "react";

// change color and shape
const colorMap = {
  primary: {
    color: "text-white",
    bg: "bg-purple",
  },
  secondary: {
    color: "text-purple",
    bg: "bg-transparent",
  },
};

const Button = ({ children, type = "primary" }) => {
  const { color, bg } = colorMap[type];
  return (
    <div
      className={`hover:bg-lilac cursor-pointer w-fit ${color} ${bg} px-16 py-3 rounded-full border-2 border-purple text-xl font-medium flex items-center gap-4 capitalize`}
    >
      {children}
    </div>
  );
};

export default Button;
