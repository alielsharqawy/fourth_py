import React, { useState } from "react";
import { MdOutlinePerson } from "react-icons/md";
import { TbShoppingBag } from "react-icons/tb";
import { AiOutlineMenu } from "react-icons/ai";

function Navbar({ cartItems, setCartItems }) {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Remove item from cart
  const removeItem = (index) => {
    setCartItems((prevItems) => prevItems.filter((_, i) => i !== index));
  };

  // Clear all items from cart
  const clearCart = () => setCartItems([]);

  // Calculate total price
  const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);

  return (
    <header className="bg-white shadow-md fixed w-full top-0 z-10">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        {/* Logo */}
        <div className="text-2xl font-bold text-orange-600">
          Little <span className="text-gray-900">Fashion</span>
        </div>

        {/* Desktop Navbar Links */}
        <nav className="hidden md:flex space-x-8 text-gray-600">
          {["Home", "Story", "Products", "FAQs", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="hover:text-orange-600 transition text-xl"
            >
              {item}
            </a>
          ))}
        </nav>

        {/* Icons Section */}
        <div className="flex items-center space-x-6 relative">
          {/* Account Icon */}
          <button
            aria-label="Account"
            className="hover:text-orange-600 transition"
          >
            <MdOutlinePerson size={35} />
          </button>

          {/* Shopping Cart Icon */}
          <button
            aria-label="Shopping Cart"
            onClick={() => setIsCartOpen(!isCartOpen)}
            className="relative hover:text-orange-600 transition"
          >
            <TbShoppingBag size={35} />
            {cartItems.length > 0 && (
              <span className="absolute top-0 right-0 bg-orange-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                {cartItems.length}
              </span>
            )}
          </button>

          {/* Shopping Cart Dropdown */}
          {isCartOpen && (
            <div className="absolute right-0 top-12 bg-white shadow-lg border rounded-lg w-80 p-4">
              <h3 className="text-lg font-semibold mb-4">Shopping Cart</h3>
              {cartItems.length === 0 ? (
                <p className="text-gray-500">Your cart is empty.</p>
              ) : (
                <>
                  <ul className="space-y-4 max-h-60 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-100">
                    {cartItems.map((item, index) => (
                      <li
                        key={index}
                        className="flex justify-between items-center border-b pb-2"
                      >
                        <div>
                          <h4 className="text-sm font-medium">
                            {index + 1}. {item.title}
                          </h4>
                          <p className="text-xs text-gray-500">
                            ${item.price.toFixed(2)}
                          </p>
                        </div>
                        <div className="flex items-center space-x-2">
                          <img
                            src={item.img1}
                            alt={item.title}
                            className="w-12 h-12 object-cover rounded"
                          />
                          <button
                            onClick={() => removeItem(index)}
                            className="text-red-500 hover:text-red-700 text-sm"
                          >
                            Remove
                          </button>
                        </div>
                      </li>
                    ))}
                  </ul>

                  {/* Total Section */}
                  <div className="mt-4 border-t pt-4">
                    <div className="flex justify-between text-sm">
                      <span className="font-medium">Total:</span>
                      <span className="font-bold">
                        ${totalPrice.toFixed(2)}
                      </span>
                    </div>
                    <button
                      onClick={clearCart}
                      className="w-full mt-4 bg-red-500 text-white py-2 rounded-lg hover:bg-red-600"
                    >
                      Clear Cart
                    </button>
                  </div>
                </>
              )}
            </div>
          )}
        </div>

        {/* Mobile Menu Icon */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-gray-600 focus:outline-none"
          aria-label="Toggle Menu"
        >
          <AiOutlineMenu size={35} />
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <nav className="md:hidden bg-white shadow-lg">
          <ul className="flex flex-col space-y-4 px-6 py-4 text-gray-600">
            {["Home", "Story", "Products", "FAQs", "Contact"].map((item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase()}`}
                  className="block hover:text-orange-600 text-lg"
                  onClick={() => setIsMenuOpen(false)} // Close menu on link click
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}

export default Navbar;
