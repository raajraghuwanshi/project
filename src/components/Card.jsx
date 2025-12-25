import React from "react";

const Card = ({ product}) => {
  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden">
      {/* Image */}
      <div className="relative">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-56 object-cover"
        />

        {/* Stock Badge */}
        {product.inStock ? (
          <span className="absolute top-3 left-3 bg-green-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
            In Stock
          </span>
        ) : (
          <span className="absolute top-3 left-3 bg-red-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
            Out of Stock
          </span>
        )}
      </div>

      {/* Content */}
      <div className="p-5">
        {/* Name */}
        <h2 className="text-lg font-semibold text-gray-800 truncate">
          {product.name}
        </h2>

        {/* Brand & Category */}
        <p className="text-sm text-gray-500 mt-1">
          {product.brand} • {product.category}
        </p>

        {/* Rating */}
        <div className="flex items-center mt-2 text-yellow-500">
          ⭐ <span className="ml-1 text-gray-700">{product.rating}</span>
        </div>

        {/* Price */}
        <div className="mt-4">
          <span className="text-xl font-bold text-indigo-600">
            ₹{product.price}
          </span>
        </div>

        {/* Buttons */}
        <div className="flex gap-3 mt-5">
          <button
            disabled={!product.inStock}
            className={`flex-1 py-2 rounded-lg font-semibold transition
              ${
                product.inStock
                  ? "bg-indigo-600 text-white hover:bg-indigo-700"
                  : "bg-gray-300 text-gray-500 cursor-not-allowed"
              }`}
          >
            Add to Cart
          </button>

          <button className="flex-1 border border-indigo-600 text-indigo-600 py-2 rounded-lg hover:bg-indigo-50 transition">
            View
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
