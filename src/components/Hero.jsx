import React from "react";
import heroImage from "../assets/a2.jpg"; // Replace with your image path

function Hero() {
  return (
    <section className="flex flex-col lg:flex-row w-full h-[70vh]">
      {/* Left Image Section */}
      <div className="flex-1">
        <img
          src={heroImage}
          alt="Retail Shop Owner"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Right Content Section */}
      <div className="flex-1 flex flex-col justify-center bg-blue-50 p-8">
        <h1 className="text-4xl font-bold mb-4">
          <span className="text-orange-600">Retail</span> Shop Owners
        </h1>
        <p className="text-gray-600 mb-6">
          Credits go to Unsplash and FreePik websites for images used in this
          Little Fashion by Tooplate.
        </p>
        <a
          href="#"
          className="inline-block text-lg text-orange-600 hover:text-orange-700 font-medium transition"
        >
          EXPLORE PRODUCTS
        </a>
      </div>
    </section>
  );
}

export default Hero;
