import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Slider from "./components/Slider";
import About from "./components/About";
import Hero from "./components/Hero";
import FeaturedProducts from "./components/FeaturedProduct";
import Footer from "./components/Footer";

function App() {
  const [cartItems, setCartItems] = useState([]);

  // Load cart items from localStorage when the app loads
  useEffect(() => {
    try {
      const storedCart = localStorage.getItem("cartItems")||[]
      if (storedCart) {
        const parsedCart = JSON.parse(storedCart);
        setCartItems(parsedCart);
        console.log(cartItems);
      }
    } catch (error) {
      console.error("Error parsing cart items from localStorage:", error);
    }
  }, []);

  // Function to add product to cart
  const addToCart = (product) => {
    setCartItems((prevItems) => [...prevItems, product]);
    console.log(cartItems);
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <Navbar cartItems={cartItems} setCartItems={setCartItems} />
      <Slider />
      <About />
      <Hero />
      <FeaturedProducts addToCart={addToCart} />
      <Footer />
    </div>
  );
}

export default App;
