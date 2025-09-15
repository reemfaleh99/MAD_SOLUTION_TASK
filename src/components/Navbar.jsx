import React, { useEffect, useState } from "react";
import Button from "./Button";
import { AiOutlineMenu, AiOutlinePhone } from "react-icons/ai";
import { Link, NavLink } from "react-router-dom";

const navItem = [
  { name: "home", path: "/" },
  { name: "about us", path: "/" },
  { name: "our projects", path: "projects" },
  { name: "services", path: "service" },
  { name: "careers", path: "/" },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // change nav background
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed p-12 top-0 flex items-center justify-between w-full inset-x-0 z-50 transition-colors duration-300 ${
        isScrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <div className="text-xl font-medium capitalize">lorem</div>

      {/* Desktop menu */}
      <ul className="gap-5 hidden lg:flex items-center">
        {navItem.map((item, index) => (
          <Link to={item.path} key={index}>
            <li className="text-xl font-medium capitalize cursor-pointer hover:text-purple duration-300 relative overflow-hidden nav-li">
              {item.name}
            </li>
          </Link>
        ))}
      </ul>

      <div className="hidden lg:block">
        <Button type="secondary">
          <AiOutlinePhone className="w-8 h-8 " />
          contact us
        </Button>
      </div>

      {/* Mobile menu button */}
      <div
        className="lg:hidden"
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
      >
        <AiOutlineMenu />
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="absolute top-28 left-0 w-full h-screen bg-white shadow-md lg:hidden">
          <ul className="flex flex-col items-center justify-center p-6 h-full w-full gap-12">
            {navItem.map((menu, menuIndex) => (
              <li key={menuIndex}>
                <Link
                  to={menu.path}
                  className="block text-center my-5 text-gray-800 font-semibold hover:text-purple text-xl"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {menu.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
