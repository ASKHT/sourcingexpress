import React from "react";
import rectangle from "../assets/Rectangle.png";
const Price = () => {
  return (
    <div className="md:w-[117vw] relative md:ml-[4rem]">
      <img src={rectangle} className="md:w-[120rem] h-[48rem]" />
      <div className="absolute inset-0 flex justify-center items-center flex-col gap-8 md:pl-[18rem] text-[#6F7CB2]">
        <p className="text-3xl font-semibold text-[#091133]">
          A Price To Suit Everyone
        </p>
        <div className="flex flex-col justify-center items-center ">
          <span>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean{" "}
          </span>
          <span>
            commodo ligula eget dolor. Aenean massa. Cum sociis natoque
          </span>
          <span>
            penatibus et magnis dis parturient montes, nascetur ridiculus
          </span>
        </div>
        <div className="flex flex-col justify-center items-center gap-1">
          <p className="text-4xl font-semibold text-[#091133]"> $40</p>
          <p>Ui Design Kit</p>
        </div>
        <div className="flex flex-col justify-center items-center gap-1">
          <p>See one price sample</p>
          <button className="md:w-[10rem] h-[2rem] bg-blue-950 text-white opacity-100">
            Purchase Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Price;
