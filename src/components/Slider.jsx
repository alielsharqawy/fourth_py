import React, { useState } from "react";
import hero from "../assets/1.jpg";
import hero2 from "../assets/2.jpg";
import hero3 from "../assets/3.jpg";

const images = [
  {
    src: hero,
    title: "Talk to us",
    description:
      "Tooplate is one of the best HTML CSS template websites for everyone.",
  },
  {
    src: hero2,
    title: "Explore More",
    description: "Discover new opportunities with our top-notch solutions.",
  },
  {
    src: hero3,
    title: "Work With Us",
    description: "Join hands with us for unparalleled growth and success.",
  },
];

function Slider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="relative w-full">
      {/* Slider Images */}
      <div className="overflow-hidden relative">
        <img
          src={images[currentIndex].src}
          alt={`Slide ${currentIndex + 1}`}
          className="w-full h-screen object-cover"
        />
        {/* Overlay Text */}
        <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center items-start text-left px-10 sm:px-20">
          <h1 className="text-4xl sm:text-6xl text-white font-bold mb-4">
            {images[currentIndex].title}
          </h1>
          <p className="text-white text-lg sm:text-xl mb-6 max-w-2xl">
            {images[currentIndex].description}
          </p>
          <button className="bg-black text-white py-4 px-6 rounded-full text-xl hover:bg-orange-700">
            Work With Us
          </button>
        </div>
      </div>

      

      {/* Dots Navigation (Side) */}
      <div className="absolute top-1/2 right-8 transform -translate-y-1/2 flex flex-col space-y-3">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-8 h-8 rounded-full ${
              index === currentIndex ? "bg-white" : "bg-gray-400"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
}

export default Slider;
