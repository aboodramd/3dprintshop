
import React from 'react'

const Navbar = () => {
  return (
    <nav className="bg-[#1098c8] text-white p-4 flex justify-between">
      <h1 className="font-bold text-xl">3D Print Shop</h1>
      <div className="space-x-4">
        <a href="#services">Services</a>
        <a href="#store">Store</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
      </div>
    </nav>
  )
}

export default Navbar
