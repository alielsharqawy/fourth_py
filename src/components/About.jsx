import React, { useState } from "react";
import hero from "../assets/a1.jpg";
import hero2 from "../assets/a2.jpg";
import hero3 from "../assets/a3.jpg";

const sections = [
  {
    id: "introduction",
    title: "Introduction",
    image: hero,
    heading: "Welcome to Little Fashion",
    content:
      "Little Fashion is your go-to source for high-quality designs and templates tailored to your needs.",
  },
  {
    id: "how-we-work",
    title: "How we work?",
    image: hero2,
    heading: "Our Work Process",
    content:
      "We focus on delivering exceptional results through a structured approach that guarantees customer satisfaction.",
  },
  {
    id: "capabilities",
    title: "Capabilities",
    image: hero3,
    heading: "Our Capabilities",
    content:
      "We provide cutting-edge solutions that elevate your business and set you apart in the market.",
  },
];

function About() {
  const [activeSection, setActiveSection] = useState(sections[0]);

  return (
    <section className="container mx-auto px-6 py-16">
      {/* Title */}
      <h1 className="text-4xl font-bold text-center mb-10">
        Get started with <span className="text-orange-600">Little </span>Fashion
      </h1>

      <div className="flex flex-col lg:flex-row items-center lg:items-start gap-10">
        {/* Left Navigation */}
        <div className="flex flex-col text-left w-full lg:w-1/4">
          <ul className="space-y-4">
            {sections.map((section) => (
              <li
                key={section.id}
                className={`cursor-pointer font-medium text-2xl border-l-4 pl-4 ${
                  activeSection.id === section.id
                    ? "text-orange-600 border-orange-600"
                    : "text-gray-600 border-transparent hover:text-orange-600"
                }`}
                onClick={() => setActiveSection(section)}
              >
                {section.title}
              </li>
            ))}
          </ul>
        </div>

        {/* Center Image */}
        <div className="w-full">
          <img
            src={activeSection.image}
            alt={activeSection.title}
            className="w-full h-auto object-cover"
          />
        </div>

        {/* Right Content */}
        <div className="w-full lg:w-1/3 text-left">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            {activeSection.heading}
          </h2>
          <p className="text-gray-600 mb-6">{activeSection.content}</p>
          <a href="#" className="hover:text-orange-600 font-medium ">
            LEARN MORE ABOUT US
          </a>
        </div>
      </div>
    </section>
  );
}

export default About;
