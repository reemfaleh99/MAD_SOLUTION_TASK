import React from "react";

import login from "../assets/login.png";
import {
  AiOutlineFacebook,
  AiOutlineInstagram,
  AiOutlinePhone,
} from "react-icons/ai";
import Button from "../components/Button";

const Login = () => {
  return (
    <div className="min-h-screen flex lg:flex-row flex-col justify-between gap-24 items-center px-12 my-36">
      {/* login  inputs*/}
      <div className="w-full lg:w-1/2">
        <h3 className="login font-bold text-5xl capitalize ">let's talk</h3>
        <p className=" mt-10 text-xl text-black">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
          accusantium repellendus ea tempore minima consequuntur Lorem ipsum
          dolor sit amet consectetur adipisicing elit. Consequatur accusantium
          repellendus ea tempore minima consequuntur
        </p>
        <form className="my-12">
          {/* name input */}
          <div className="flex flex-col">
            <label className="text-purple font-semibold text-lg">
              Your name
            </label>
            <input
              type="text"
              className="bg-lilac w-full 2xl:w-1/2 p-4 rounded-2xl my-2"
            />
          </div>
          {/* email input */}
          <div className="flex flex-col my-4">
            <label className="text-purple font-semibold text-lg">
              Your e-mail
            </label>
            <input
              type="email"
              className="bg-lilac w-full 2xl:w-1/2 p-4 rounded-2xl my-2"
            />
          </div>
          <div className="flex flex-col mb-12">
            <label className="text-purple font-semibold text-lg">
              Your e-mail
            </label>
            <textarea
              type="text"
              className="bg-lilac w-full 2xl:w-1/2 p-4 rounded-2xl my-2"
            />
          </div>
          <Button children="send message" />
        </form>
      </div>
      {/* login  introduction*/}
      <div className="flex flex-col items-center gap-10 w-1/2">
        <img src={login} alt="" className="w-full h-[550px] hidden md:block" />
        <div className="text-gray text-xl">
          <div className="flex items-center gap-2">
            <AiOutlinePhone />
            <span>+9639111111</span>
          </div>
          <div className="flex items-center gap-2">
            <AiOutlineFacebook />
            <span>Mad_solution</span>
          </div>
          <div className="flex items-center gap-2">
            <AiOutlineInstagram />
            <span>Mad_solution</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
