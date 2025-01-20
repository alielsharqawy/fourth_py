import React from "react";
import { FaYoutube, FaWhatsapp, FaInstagram, FaSkype } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-black text-white py-10 w-full">
      <div className="max-w-screen-xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {/* Left Section - Branding */}
        <div>
          <h2 className="text-xl font-bold mb-4">
            Little <span className="text-gray-400">Fashion</span>
          </h2>
          <p className="text-sm text-gray-400">© 2022 Little Fashion</p>
          <p className="text-sm text-gray-400">Designed by Tooplate</p>
        </div>

        {/* Middle Section - Sitemap */}
        <div>
          <h3 className="text-lg font-bold mb-4">Sitemap</h3>
          <ul className="space-y-2 text-sm">
            {["Story", "Privacy Policy", "Contact", "Products", "FAQs"].map(
              (item, index) => (
                <li key={index}>
                  <a
                    href={`#${item.toLowerCase().replace(" ", "")}`}
                    className="hover:underline"
                  >
                    {item}
                  </a>
                </li>
              )
            )}
          </ul>
        </div>

        {/* Right Section - Social Links */}
        <div>
          <h3 className="text-lg font-bold mb-4">Social</h3>
          <div className="flex space-x-4">
            {[
              { icon: FaYoutube, label: "Youtube" },
              { icon: FaWhatsapp, label: "Whatsapp" },
              { icon: FaInstagram, label: "Instagram" },
              { icon: FaSkype, label: "Skype" },
            ].map(({ icon: Icon, label }, index) => (
              <a
                key={index}
                href="#"
                className="text-gray-400 hover:text-white transition"
                aria-label={label}
              >
                <Icon size={24} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
