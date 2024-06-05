import React from "react";
import blob from "../assets/Path.png";
import group from "../assets/Group.png";
const Header = () => {
  return (
    <>
      <div className="w-[84rem] h-[42rem] right-0 flex justify-center items-center cursor-pointer">
        <div className="flex w-full justify-between text-[#505F98] absolute top-2 items-center">
          <div className="flex w-[15rem] justify-between ml-[19rem] mt-6">
            <p>Home</p>
            <p>About</p>
            <p>Contact</p>
          </div>
          <div className="text-black flex justify-between pt-3 cursor-pointer w-[37rem] mt-6 items-center">
            <div>
              <p className="text-lg text-[#37447E] cursor-pointer font-bold  z-10">
                Landing
              </p>
            </div>
            <div>
              <button className="w-[10rem] h-[2rem] bg-blue-950 text-white  z-10  ">
                Buy Now
              </button>
            </div>
          </div>
        </div>
        <div className="relative w-[38rem] flex flex-col h-auto gap-[2rem] pb-3 ">
          <div className=" text-4xl text-black font-semibold">
            <p className="text-[#091133]">Introduce Your Product</p>
            <p className="text-[#091133]"> Quickly & Effectively</p>
          </div>
          <div className="text-container whitespace-pre-line text-[#6F7CB2]">
            <span>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
            </span>
            <span>Aenean commodo ligula eget dolor.</span>
            <span>
              Aenean massa. Cum sociis natoque penatibus et magnis dis
              parturient montes, nascetur ridiculus mus.
            </span>
            <br />
            <br />
            <span>
              Donec quam felis, ultricies nec, pellentesque eu, pretium quis,
              sem.
            </span>
            <span>Nulla consequat massa quis enim.</span>
          </div>
          <div className="flex gap-2">
            <button className="w-[10rem] h-[2rem] bg-blue-950 text-white z-100 backdrop-opacity-100 ">
              Purchase Ui kit
            </button>
            <button className="w-[10rem] h-[2rem] bg-white text-blue-950 opacity-80 border-2 border-blue-950">
              Learn More
            </button>
          </div>
        </div>
        {/* overlapping image over each other */}
        <div className="absolute right-0">
          <img
            src={blob}
            style={{
              width: "54rem",
              height: "42rem",
            }}
            className="backdrop-opacity-100"
          />
          <div className="absolute right-1 bottom-[2rem]  flex items-center justify-end">
            <img src={group} style={{ maxWidth: "70%", maxHeight: "70%" }} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
