import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io5";
import { ImTwitter } from "react-icons/im";
import { FaYoutube } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
const Footer = () => {
  return (
    <div className="md:w-[123vw] md:h-[9rem] bg-[#E7ECFF]  absolute bottom-0 flex flex-col gap-3">
      <div className="flex justify-around w-[100%] ml-[10rem]  items-center mt-7">
        <p>©2023 Yourcompany</p>
        <p className="text-xl text-blue-950">Landing</p>
        <button className="w-[10rem] h-[2rem] bg-blue-950 text-white opacity-100">
          Purchase Now
        </button>
      </div>
      <div className="flex justify-center ml-[19rem]">
        <div className="pb-[1.5px] bg-slate-500 w-[90%] "></div>
      </div>
      <div className="flex justify-between w-[100%] ml-[10rem]">
        <div className="flex w-[28rem] justify-around items-center pl-[14rem] ">
          <p>Home</p>
          <p>About</p>
          <p>contact</p>
        </div>
        <div className="flex w-[25rem] gap-4 items-center">
          <FaFacebookF className="text-xl" />
          <IoLogoLinkedin className="text-xl" />
          <ImTwitter className="text-xl" />
          <FaYoutube className="text-xl" />
          <FaInstagram className="text-xl" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
