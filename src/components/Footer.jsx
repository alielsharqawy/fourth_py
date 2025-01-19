import React from "react";
import { FaYoutube, FaWhatsapp, FaInstagram, FaSkype } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-black text-white py-10 w-full">
      <div className="max-w-screen-xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {/* Left Section */}
        <div>
          <h2 className="text-xl font-bold mb-4">
            Little <span className="text-gray-400">Fashion</span>
          </h2>
          <p className="text-sm text-gray-400">
            Copyright © 2022 Little Fashion
          </p>
          <p className="text-sm text-gray-400">Designed by Tooplate</p>
        </div>

        {/* Middle Section - Sitemap */}
        <div>
          <h3 className="text-lg font-bold mb-4">Sitemap</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#story" className="hover:underline">
                Story
              </a>
            </li>
            <li>
              <a href="#privacy" className="hover:underline">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:underline">
                Contact
              </a>
            </li>
            <li>
              <a href="#products" className="hover:underline">
                Products
              </a>
            </li>
            <li>
              <a href="#faqs" className="hover:underline">
                FAQs
              </a>
            </li>
          </ul>
        </div>

        {/* Right Section - Social */}
        <div>
          <h3 className="text-lg font-bold mb-4">Social</h3>
          <div className="flex space-x-4">
            <a
              href="#"
              className="text-gray-400 hover:text-white transition"
              aria-label="Youtube"
            >
              <FaYoutube size={24} />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition"
              aria-label="Whatsapp"
            >
              <FaWhatsapp size={24} />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition"
              aria-label="Instagram"
            >
              <FaInstagram size={24} />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition"
              aria-label="Skype"
            >
              <FaSkype size={24} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
