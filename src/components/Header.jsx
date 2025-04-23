import React, { useState } from 'react';
import logo from '../assets/logo-white.png';
import cart from '../assets/cart.png';
import { Menu, X } from 'lucide-react'; 

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="bg-gray-800 sticky top-0 z-50 shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
       
        <a href="/">
          <img className="w-[125px]" src={logo} alt="logo" />
        </a>

        <nav className="hidden md:flex space-x-6">
          <a className="text-white hover:text-red-500 transition duration-300" href="/">Home</a>
          <a className="text-white hover:text-red-500 transition duration-300" href="/products">Products</a>
          <a className="text-white hover:text-red-500 transition duration-300" href="/about">About</a>
          <a className="text-white hover:text-red-500 transition duration-300" href="/contact">Contact</a>
        </nav>

        <div className="flex items-center gap-4">
          <a href="/cart">
            <img className="w-7 h-7" src={cart} alt="cart" />
          </a>

          <button onClick={toggleMenu} className="md:hidden text-white">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-gray-900 px-6 py-4 space-y-4 text-center">
          <a className="block text-white hover:text-red-500" href="/">Home</a>
          <a className="block text-white hover:text-red-500" href="/products">Products</a>
          <a className="block text-white hover:text-red-500" href="/about">About</a>
          <a className="block text-white hover:text-red-500" href="/contact">Contact</a>
        </div>
      )}
    </header>
  );
};

export default Header;
