import React, { useState } from "react";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai"; 
import { FiShoppingCart } from "react-icons/fi"; 
import productsData from "../json/data.json"; 

function FeaturedProducts({ addToCart }) {
  const [likedProducts, setLikedProducts] = useState([]);
  const [showAll, setShowAll] = useState(false);

  // Toggle the like status of a product
  const toggleLike = (productId) => {
    setLikedProducts((prev) =>
      prev.includes(productId)
        ? prev.filter((id) => id !== productId)
        : [...prev, productId]
    );
  };

  // Determine the products to display
  const displayedProducts = showAll
    ? productsData.products.slice(0, 20)
    : productsData.products.slice(0, 4);

  return (
    <section className="mx-auto px-4 py-16 max-w-screen-xl">
      {/* Section Title */}
      <h1 className="text-4xl font-bold text-center mb-10">
        Featured Products
      </h1>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {displayedProducts.map((product) => (
          <div
            key={product.id}
            className="border rounded-lg shadow-lg overflow-hidden transition-transform hover:scale-105 flex flex-col"
          >
            {/* Product Image */}
            <div className="relative h-60">
              <img
                src={product.img1}
                alt={product.title}
                className="w-full h-full object-cover"
              />
              {product.label && (
                <span className="absolute top-2 left-2 bg-orange-500 text-white text-sm px-3 py-1 rounded-full">
                  {product.label}
                </span>
              )}
              {/* Like Button */}
              <button
                onClick={() => toggleLike(product.id)}
                className="absolute top-2 right-2 bg-white text-gray-500 p-2 rounded-full shadow hover:text-red-500"
              >
                {likedProducts.includes(product.id) ? (
                  <AiFillHeart className="text-red-500" size={20} />
                ) : (
                  <AiOutlineHeart size={20} />
                )}
              </button>
            </div>

            {/* Product Details */}
            <div className="p-4 flex flex-col mt-auto">
              <h2 className="text-lg font-semibold">{product.title}</h2>
              <p className="text-gray-500 text-sm">{product.description}</p>
              <div className="flex justify-between items-center mt-4">
                <span className="text-lg font-bold">${product.price}</span>
                {/* Add to Cart Button */}
                <button
                  onClick={() => addToCart(product)}
                  className="text-gray-500 hover:text-orange-500 transition"
                >
                  <FiShoppingCart size={24} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* View All / View Less Button */}
      <div className="text-center mt-10">
        <button
          onClick={() => setShowAll(!showAll)}
          className="px-6 py-2 text-xl bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition"
        >
          {showAll ? "View Less" : "View All Products"}
        </button>
      </div>
    </section>
  );
}

export default FeaturedProducts;
