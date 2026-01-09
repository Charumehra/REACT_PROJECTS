import React from 'react'
import { useDispatch } from 'react-redux'
import { clearAllItem } from './Services/Slice';

function ClearCart() {
    const dispatch = useDispatch();
  return (
    <>
    <button onClick={()=>{dispatch(clearAllItem())}} className="px-6 py-2
        bg-red-600 text-white
        font-semibold
        rounded-lg
        shadow-md
        hover:bg-red-700
        hover:shadow-lg
        active:scale-95
        transition-all duration-300
      ">Clear Cart</button>
    </>
  )
}

export default ClearCart