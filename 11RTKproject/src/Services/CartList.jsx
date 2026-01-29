import React from 'react'
import { useSelector } from "react-redux";
function CartList() {
  const cartSelector = useSelector((state)=>state.cart.items)
  console.log(cartSelector)
  return (
    <div className="cart-container max-w-200 m-auto bg-white p-5 shadow-[1px_4px_10px_rgba(0,0,0,0.1)] rounded-2xl ">
      <div className="cart-header flex justify-between border-b-2 border-b-gray-400  items-center mb-5 pb-5">
        <h2 className='text-2xl m-0'>Your Cart Items</h2>
        <span>{cartSelector.length} items</span>
      </div>
      {
        cartSelector.length > 0 ? cartSelector.map((items)=>(
          <div key={items.id} claassName="cart-item">
            <div className="item-info">
              <img src={items.thumbnail} alt="" />
              <div className="items-details">
                <h4>{items.title}</h4>
                <p>{items.brand}</p>
              </div>
              <div className="item-action">
                <span className="price">${items.price}</span>
                <button className="btn bg-red-500 text-white py-3 px-6 rounded-lg text-[16px] hover:bg-red-600">Remove</button>
              </div>
            </div>
          </div>
        ))
        : null
      }
    </div>
  )
}

export default CartList