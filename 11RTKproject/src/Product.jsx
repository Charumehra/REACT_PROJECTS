import React from "react";
import { useDispatch } from "react-redux";
import { AddToCart } from "./AddToCart";

function Product() {
  const dispatch= useDispatch();
  return (
    <div
      className="product-card bg-white rounded-xl shadow-[0_4px_12px_rgba(0,0,0,0.1)] max-w-225 flex overflow-hidden
"
    >
      <div
        className="product-image flex-1
"
      >
        <img
          className="w-full h-full object-cover
"
          src="https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg"
          alt=""
        />
      </div>
      <div className="product-info flex-1 p-7.5">
        <h1 className="text-[26px] mb-3.75">DSLR Camera</h1>
        <p
          className="price text-[22px] font-bold mb-5 text-[#e63946]
"
        >
          $129.89
        </p>
        <p className="description text-[16px] text-[#555] mb-6.25 leading-normal">
          High-quality DSLR camera delivering sharp images, fast autofocus, and
          full creative control for stunning photography and videos.
        </p>
        <button onClick={()=>dispatch(AddToCart(1))} className="btn bg-[#457b9d]text-white py-3 px-6 border-none rounded-lg cursor-pointer text-[16px] transition duration-300 hover:bg-[#1d3557] hover:text-white">
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default Product;
