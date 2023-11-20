import React from "react";
import header from "../assets/header-bg.png";

function SectionA() {
  return (
    <div className="w-full h-screen">
      <img
        className="top-0 left-0 h-screen object-cover"
        src={header}
        alt="/"
      ></img>
      <div className="bg-black/30 absolute top-0 w-full h-screen" />
      <div className="absolute top-0 w-full h-full flex flex-col justify-center items-center text-white">
        <div className="md:left-[10%] max-w-[1100px] m-auto absolute p-4">
          <p className="font-semibold  lg:text-md">All Inclusive</p>
          <h1 className="font-bold text-5xl md:text-7xl drop-shadow-2xl">
            Private Tours
          </h1>
          <p className="max-w-[600px] py-2 text-xl drop-shadow-2xl">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi
            suscipit animi molestias ipsam odio sint maxime porro dicta, tempora
            aliquam.
          </p>
          <button
            className="bg-white text-black w-32 hover:bg-gray-300
          hover:ease-in-out duration-300"
          >
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default SectionA;
