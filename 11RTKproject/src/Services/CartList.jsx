import React, { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { clearAllItem, removeItem } from "./Slice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
function CartList() {
  const cartSelector = useSelector((state) => state.cart.items);
  console.log(cartSelector);

  const [cartItems, setCartItems] = useState(cartSelector);
  useEffect(() => {
    setCartItems(cartSelector);
  }, [cartSelector]);

  const dispatch = useDispatch();
  const navigate = useNavigate();
const manageQuantity=(id, q)=>{
     
  let quantity = parseInt(q)>1?parseInt(q):1;
  const cartTempItems = cartSelector.map((items)=>{
    return items.id==id?
    {...items,quantity}:items

    }
  )
  
    setCartItems(cartTempItems)
}
const handlePlaceOrder=()=>{
  localStorage.clear();
  dispatch(clearAllItem());
  alert("Your order has been placed successfully!");
  navigate("/")
}

  return (
    <div className="cart-container max-w-200 m-auto bg-white p-5 shadow-[1px_4px_10px_rgba(0,0,0,0.1)] rounded-2xl mb-25">
      <div className="cart-header flex justify-between border-b-2 border-b-gray-400  items-center mb-5 pb-5">
        <h2 className="text-2xl m-0">Your Cart Items</h2>
        <span>{cartItems.length} items</span>
      </div>
      {cartItems.length > 0
        ? cartItems.map((items) => (
            <div
              key={items.id}
              className="cart-item flex justify-between items-center py-3.75 px-0 border-b"
            >
              {/* <div className="item-info flex items-center gap-13.75">
              <img className="w-20 h-20 object-cover rounded-[10px]" src={items.thumbnail} alt="" />
              <div className="items-details">
                <h4>{items.title}</h4>
                <p>{items.brand}</p>
              </div>
              <div className="item-action text-right">
                <span className="price text-[16px] font-bold mb-2.5 block ">${items.price}</span>
                <button className="btn bg-red-500 text-white py-3 px-6 rounded-lg text-[16px] hover:bg-red-600">Remove</button>
              </div>
            </div> */}
              <div className="item-info flex items-center justify-between w-full">
                <div className="flex items-center gap-[13.75px]">
                  <img
                    className="w-20 h-20 object-cover rounded-[10px]"
                    src={items.thumbnail}
                    alt=""
                  />

                  <div className="items-details">
                    <h4>{items.title}</h4>
                    <p>{items.brand}</p>
                  </div>
                </div>
                <div className="item-action text-right">
                  <div style={{ display: "flex" }}>
                    <input onChange={(e)=>{manageQuantity(items.id,e.target.value)}}
                      style={{
                        margin: "15px",
                        border: "1px solid grey",
                        padding: "10px",
                        borderRadius: "5px",
                        outline: "none",
                      }}
                      type="number"
                      placeholder="enter quantity"
                      value={items.quantity?items.quantity:1}
                    />
                    <div>
                      <span className="price text-[16px] font-bold mb-2.5 block">
                        ${(items.quantity?items.price*items.quantity:items.price).toFixed(2)}
                      </span>
                      <button onClick={()=>dispatch(removeItem(items))} className="bg-red-500 text-white py-3 px-6 rounded-lg text-[16px] hover:bg-red-600">
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))
        : null}
      <div className="cart-footer text-right mb-3.75 font-bold text-black">
        Total:{cartItems.reduce((sum, item) => item.quantity? sum+item.price*item.quantity:sum + item.price, 0).toFixed(2)}
      </div>
      <button onClick={handlePlaceOrder} className="bg-blue-500 text-white py-3 px-6 rounded-lg text-[16px] hover:bg-blue-600">
                       Place Order
                      </button>
    </div>
  );
}

export default CartList;
