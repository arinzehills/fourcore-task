import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Icon } from '@iconify/react/dist/iconify.js';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const {items:cart} = useSelector((state) => state.cart);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-50 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-end justify-center text-black text-2xl font-bold">4Core Commerce <div className='px-1 py-1 rounded-full bg-red-500'></div></Link>
        <div className="block lg:hidden">
          <button
            onClick={toggleMenu}
            className="text-black focus:outline-none"
          >
            {/* <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {!isOpen ? (
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M4 6h16M4 12h16M4 18h16"
                  className="block"
                />
              ) : (
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M6 18L18 6M6 6l12 12"
                  className="block"
                />
              )}
            </svg> */}
          </button>
        </div>
        <div className={`flex`}>
          <Link to="/cart" className="flex gap-2 items-center justify-center text-black lg:mt-0 mr-4">
            <span className='sm:block hidden'>Cart ({cart?.length})</span><span><Icon icon="iconoir:cart" /></span>
          </Link>
          <Link to="/login" className="flex gap-2 flex-row items-center justify-center text-black  lg:mt-0">
          <span className='sm:block hidden'> Account </span><span><Icon icon="iconamoon:profile-thin" /></span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
