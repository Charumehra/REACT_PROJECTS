import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem, removeItem } from "./Services/Slice";
import { fetchProducts } from "./Services/productSlice";

function Product() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProducts());
  }, []);
  const productSelector = useSelector((state) => state.products.items);
  console.log(productSelector);

  const cartSelector = useSelector((state)=>state.cart.items);
    console.log(cartSelector.length);
  return (
    <div className="grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-5 mt-7.5">
      {productSelector.length &&
        productSelector.map((item) => (
          <div
            key={item.id}
            className="card bg-white rounded-[10px] shadow-[0_2px_6px_rgba(0,0,0,0.1)] overflow-hidden flex flex-col transition-all duration-300 ease-in-out hover:-translate-y-1.5"
          >
            <img src={item.thumbnail} className="w-full h-45 object-cover" />
            <div className="content p-3.75 flex flex-col gap-2">
              <div className="title text-[16px] font-bold whitespace-nowrap overflow-hidden truncate">
                {item.title}
              </div>
              <div className="brand text-[13px] text-[#666] ">{item.brand}</div>
              <div className="price text-[16px] font-bold text-[#2a9d8f]">
                ${item.price}
              </div>
              <div className="rating text-[13px] text-[#999] ">
                {item.rating}
              </div>
              {cartSelector.find(cartItem => cartItem.id === item.id)
  ? (
    <button
      onClick={() => dispatch(removeItem(item))}
      className="btn bg-[#e76f51] text-white py-3 px-6 rounded-lg text-[16px] hover:bg-[#ba3a26]"
    >
      Remove from Cart
    </button>
  )
  : (
    <button
      onClick={() => dispatch(addItem(item))}
      className="btn bg-[#457b9d] text-white py-3 px-6 rounded-lg text-[16px] hover:bg-[#1d4d74]"
    >
      Add to Cart
    </button>
  )
}

            </div>
          </div>
        ))}
    </div>
  );
}

export default Product;
