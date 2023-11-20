import React, { useState } from "react";
import { Icon } from "@iconify/react";
import Image1 from "../assets/gallery-6.jpg";
import Image2 from "../assets/gallery-5.jpg";
import Image3 from "../assets/gallery-4.jpg";

function Places() {
  const slides = [Image1, Image2, Image3];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div className="max-w-[1400px] h-[580px] w-full m-auto py-16 px-4 relative mt-[20rem] group:">
      <div
        className="w-full h-full rounded-2xl bg-center bg-cover duration-500"
        style={{ backgroundImage: `url(${slides[currentIndex]})` }}
      ></div>
      <div className="absolute top-[50%] -translate-x-0 translate-y-[50%] left-5 text-2xl rounded-full p-2 group-hover:bg-black/40 text-white cursor-pointer">
        <Icon onClick={prevSlide} icon="eva:arrowhead-left-fill" />
      </div>
      <div className="absolute top-[50%] -translate-x-0 translate-y-[50%] right-5 text-2xl rounded-full p-2 group-hover:bg-black/40 text-white cursor-pointer">
        <Icon onClick={nextSlide} icon="eva:arrowhead-right-fill" />
      </div>

      <div className="flex top-4 justify-center py-2">
        {slides.map((slide, slideIndex) => (
          <div
            className="text-xl cursor-pointer"
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
          >
            <Icon icon="octicon:dot-16" width="30" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Places;
