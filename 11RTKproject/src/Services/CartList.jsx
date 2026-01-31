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
          <div key={items.id} className="cart-item flex justify-between items-center py-3.75 px-0 border-b">
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

  {/* LEFT GROUP: Image + Details */}
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

  {/* RIGHT EDGE: Action */}
  <div className="item-action text-right">
    <span className="price text-[16px] font-bold mb-2.5 block">
      ${items.price}
    </span>
    <button className="bg-red-500 text-white py-3 px-6 rounded-lg text-[16px] hover:bg-red-600">
      Remove
    </button>
  </div>

</div>

          </div>
        ))
        : null
      }
      <div className='cart-footer text-right mb-3.75 font-bold text-black'>
        Total:{cartSelector.reduce((sum,item)=>sum+item.price,0)}
      </div>
    </div>
  )
}

export default CartList