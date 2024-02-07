import React from "react";
import pic1 from "../assets/featured-nakuru.jpg";
import mombasa from "../assets/featured-mombasa.webp";
import kisumu from "../assets/featured-kisumu.jpg";
import kiambu from "../assets/kiambu.jpg";
import pic0 from "../assets/gallery-1.jpg";
import pic2 from "../assets/gallery-2.jpg";
import pic3 from "../assets/gallery-3.jpg";
import pic4 from "../assets/gallery-4.jpg";
import pic5 from "../assets/gallery-5.jpg";

function SectionC() {
  return (
    <div class=" max-w-[1400px] m-auto py-16 px-4 grid lg:grid-cols-2 gap-4">
      <div className="grid grid-cols-2 grid-rows-6 h-[80vh]">
        <img
          src={pic0}
          alt="/"
          className="row-span-3 w-full h-full p-2 object-cover"
        />
        <img
          src={pic2}
          alt="/"
          className="row-span-2 w-full h-full p-2 object-cover"
        />
        <img
          src={pic3}
          alt="/"
          className="row-span-2 w-full h-full p-2 object-cover"
        />
        <img
          src={pic4}
          alt="/"
          className="row-span-3 w-full h-full p-2 object-cover"
        />
        <img
          src={pic5}
          alt="/"
          className="row-span-2 w-full h-full p-2 object-cover"
        />
      </div>

      <div className="flex flex-col h-full justify-center">
        <h3 className="text-5xl md:text-6xl font-bold">
          Plan Your Next Trip With Us
        </h3>
        <p className="text-2xl py-6">
          Embark on a journey of discovery and adventure with our curated travel
          experiences.
        </p>
        <p className="pb-6">
          Experience the thrill of exploration and the joy of discovery with our
          comprehensive travel resources. Whether you're seeking tranquil
          retreats, adrenaline-fueled adventures, or cultural immersions, our
          platform offers a wealth of information and inspiration to fuel your
          wanderlust.
        </p>
        <div>
          <button className="border-black mr-4 hover:shadow-xl p-3">
            Learn More
          </button>
          <button className="bg-black text-white border-black hover:shadow-xl p-3">
            Book Event
          </button>
        </div>
      </div>
    </div>
  );
}

export default SectionC;
