import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function AddToCartButton({ onClick }) {
  const cartSelector = useSelector((state)=>state.cart.items);
  console.log(cartSelector.length);
  return (
    <>
    <Link to="/cart">
    <button
      onClick={onClick}
      className="flex w-20 items-center gap-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors"
    >
      {/* Shopping cart SVG */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13l-1.35 2.7a1 1 0 00.9 1.5h12.1M7 13H5.4M16 21a1 1 0 100-2 1 1 0 000 2zm-8 0a1 1 0 100-2 1 1 0 000 2z"
        />
      </svg>
      <span className="cart-count">{cartSelector.length?cartSelector.length:0}</span>
    </button>
    </Link>
    </>
  );
}

export default AddToCartButton;
