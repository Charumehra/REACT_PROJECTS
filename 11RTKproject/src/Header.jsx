import React from 'react'
import AddToCart from './AddToCart'
import ClearCart from './ClearCart'

function Header() {
  return (
    <header className="flex items-center justify-between p-4 bg-white shadow-md">
      <div className="text-2xl font-bold logo">Shop4uhh</div>
      <nav>
        <ul className="flex gap-6">
          <li><a href="#" className="hover:text-blue-500">Home</a></li>
          <li><a href="#" className="hover:text-blue-500">Products</a></li>
        </ul>
      </nav>
      <ClearCart />
      <AddToCart />
    </header>
  )
}

export default Header
