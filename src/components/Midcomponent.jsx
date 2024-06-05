import React from "react";
import third from "../assets/undraw_happy_news_hxmt.png";
import fourth from "../assets/fourth.png";
import fifth from "../assets/fifth.png";
import { FaEdit } from "react-icons/fa";
import Common from "../components/Common.jsx";
import { useState, useEffect } from "react";
import Price from "./Price.jsx";
import Footer from "./Footer.jsx";
const Midcomponent = () => {
  const images = [third, fourth, fifth];
  const [loaded, setLoaded] = useState(false); // State to track whether the image is loaded

  useEffect(() => {
    setLoaded(true); // Set loaded to true when the component mounts
  }, []);
  return (
    <div className="flex  absolute top-[44rem] justify-center items-center md:w-[80%] flex-col gap-[8rem]">
      <div className="flex items-center pl-[14rem] pb-20 gap-[15rem]">
        <div
          className={`text-container whitespace-pre-line w-[42rem] flex flex-col gap-1 text-[#6F7CB2] `}
        >
          <p className="text-4xl text-black">Light,Fast & Powerful</p>
          <span>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</span>
          <span>Aenean commodo ligula eget dolor.</span>
          <span>
            Aenean massa. Cum sociis natoque penatibus et magnis dis parturient
            montes, nascetur ridiculus mus.
          </span>

          <span>
            Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
          </span>
          <span>Nulla consequat massa quis enim.</span>
          <br />
          <div className="flex gap-5">
            <div className="flex flex-col gap-1 ">
              <FaEdit className="text-xl" />
              <p className="text-xl  font-semibold">This goes here</p>
              <div className="flex flex-col">
                <span>Donec quam felis</span>
                <span>Nulla consequat massa quis enim.</span>
              </div>
            </div>
            <div className="flex flex-col gap-1 ">
              <FaEdit className="text-xl" />
              <p className="text-xl  font-semibold">This goes here</p>
              <div className="flex flex-col">
                <span>Donec quam felis</span>
                <span>Nulla consequat massa quis enim.</span>
              </div>
            </div>
          </div>
        </div>
        <div>
          <img src={third} className="md:w-[32rem] h-[24rem]" />
        </div>
      </div>
      {/* common component consist of the three components which has three common content and different image */}
      {images.map((item, idx) => (
        <Common image={item} key={idx} index={idx} />
      ))}

      <div className="relative">
        <Price />
        <Footer />
      </div>
    </div>
  );
};

export default Midcomponent;
