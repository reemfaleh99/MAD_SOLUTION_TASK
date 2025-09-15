import React, { useEffect, useState } from "react";
import Button from "./Button";
import { AiOutlinePhone } from "react-icons/ai";
import { Link } from "react-router-dom";

const navItem = [
  { name: "home", path: "/" },
  {
    name: "about us",
    path: "/",
  },
  {
    name: "our projects",
    path: "projects",
  },
  {
    name: "services",
    path: "service",
  },
  {
    name: "careers",
    path: "/",
  },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div
      className={`fixed p-12 top-0 flex items-center justify-between w-full inset-x-0 z-50 transition-colors duration-300 ${
        isScrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      {" "}
      <div className="text-xl font-medium capitalize">lorem</div>
      <ul className="flex gap-5 hidden">
        {navItem.map((item, index) => (
          <Link to={item.path}>
            <li
              className="text-xl font-medium capitalize cursor-pointer hover:text-purple duration-[0.3s] relative overflow-hidden nav-li"
              key={index}
            >
              {item.name}
            </li>
          </Link>
        ))}
      </ul>
      <div className="hidden">
        <Button type="secondary">
          <AiOutlinePhone className="w-8 h-8 " />
          contact us
        </Button>
      </div>
    </div>
  );
};

export default Navbar;
