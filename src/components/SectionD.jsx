import React from "react";
import Gallery6 from "../assets/featured-kisumu.jpg";
import Gallery7 from "../assets/featured-mombasa.webp";
import Gallery8 from "../assets/featured-nakuru.jpg";

function SectionD() {
  return (
    <div className="max-w-[1400px] h-[500px] bg-blue-100 mx-auto my-20 pt-16 lg:mb-[20%] md:mb-[35%] px-4 grid lg:grid-cols-3 gap-4">
      <div className="g:top-20 relative lg:col-span-1 col-span-2">
        <h1 className="text-3xl md:text-5xl font-bold">Travel Around Kenya</h1>
        <p className="text-lg md:text-2xl pt-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, et
          fuga! Animi optio tempore eveniet? Dignissimos consequuntur molestiae
          perferendis consectetur.
        </p>
      </div>

      <div className="grid grid-cols-2 col-span-2 gap-2">
        <img src={Gallery6} className="object-cover w-full h-full" alt="/" />
        <img
          src={Gallery8}
          className="row-span-2 object-cover w-full h-full"
          alt="/"
        />
        <img src={Gallery7} className="object-cover w-full h-full" alt="/" />
      </div>
    </div>
  );
}

export default SectionD;
