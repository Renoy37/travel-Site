import React, { useState } from "react";
import { Icon } from "@iconify/react";

function Navbar() {
  const [isnav, setIsNav] = useState(false);

  const handleToggleMenu = () => {
    setIsNav(!isnav);
  };

  return (
    <div className="absolute w-full flex justify-between p-4 items-center">
      <h1 className="text-white font-bold text-2xl z-20">Experiences</h1>
      <Icon
        onClick={handleToggleMenu}
        className="z-20 text-white cursor-pointer"
        icon="ic:round-menu"
      />
      <div
        className={`fixed text-gray-300 right-0 top-0 w-[50%] lg:w-[35%] md:w-[40%]  h-screen bg-black/90 px-4 py-7 flex-col z-10 transition-all ease-in-out duration-500 ${
          isnav ? "" : "opacity-0 pointer-events-none"
        }`}
      >
        <ul className="flex flex-col fixed text-gray-300 w-[50%] lg:w-[35%] md:w-[40%] sm:w-[50%] h-full items-center justify-center right-0">
          <li className="font-bold text-2xl p-8 cursor-pointer hover:text-gray-400">
            Home
          </li>
          <li className="font-bold text-2xl p-8 cursor-pointer hover:text-gray-400">
            Gallery
          </li>
          <li className="font-bold text-2xl p-8 cursor-pointer hover:text-gray-400">
            About
          </li>
          <li className="font-bold text-2xl p-8 cursor-pointer hover:text-gray-400">
            Contact
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
