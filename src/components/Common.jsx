import React, { useState, useEffect } from "react";
import fourth from "../assets/fourth.png";
import fifth from "../assets/fifth.png";

const Common = ({ image, item, index }) => {
  const [loaded, setLoaded] = useState(false); // State to track whether the image is loaded

  useEffect(() => {
    setLoaded(true); // Set loaded to true when the component mounts
  }, []);

  return (
    <div className="flex items-center pl-[14rem] pb-20 gap-[15rem]">
      <div>
        <img src={image} className="w-[37rem] h-[22rem]" alt="" />
      </div>
      <div
        className={`text-container whitespace-pre-line w-[45rem] flex flex-col gap-1 text-[#6F7CB2] `}
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
        {index === 2 && (
          <button className="w-[10rem] h-[2rem] bg-blue-950 text-white opacity-100">
            Purchase Now
          </button>
        )}
      </div>
    </div>
  );
};

export default Common;
