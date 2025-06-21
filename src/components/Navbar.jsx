import React, { useState } from "react";
import { FaTimes } from "react-icons/fa";
import { FaBagShopping, FaBars } from "react-icons/fa6";
import { Link, NavLink } from "react-router-dom";

const navItems = [
  { path: "/", label: "Furniture" },
  { path: "/shop", label: "Shop" },
  { path: "/about", label: "About" },
  { path: "/contact", label: "Contact" },
];

const NavItems = ({toggleMenu}) => {
  return (
    <ul className="flex flex-col md:flex-row items-center md:space-x-8 gap-8">
      {navItems.map((item, index) => (
        <li key={index} onClick={toggleMenu}>
          <NavLink
            to={item.path}
            className={({ isActive}) =>
              isActive 
                ? "text-[#E58411] font-bold" 
                : "hover:text-[#E58411]"
            }
          >
            {item.label}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const toggleMenu = () => {
        setIsMenuOpen(prevState => !prevState)
    }
   
  return (
    <header>
      <nav className="max-w-screen-2xl container mx-auto flex justify-between items-center py-6 px-4">
        {/* logo */}
        <Link to="/" className="font-bold">Logo</Link>

        {/* hamburger menu for mobile */}
        <div onClick={toggleMenu} className="md:hidden text-xl cursor-pointer hover:text-[#E58411]">
            {isMenuOpen ? null : <FaBars />}
        </div>

        {/* desktop menu items */}
        <div className="hidden md:flex">
          <NavItems />
        </div>

        {/* mobile menu items */}
        <div className={`fixed top-0 left-0 w-full h-screen bg-black bg-opacity-80 flex flex-col items-center justify-center space-y-8 text-white transition-transform transform ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'} md:hidden`}>
            <div className="absolute top-4 right-4 text-xl cursor-pointer" onClick={toggleMenu}>
                <FaTimes />
            </div>
            <NavItems toggleMenu={toggleMenu}/>
        </div>

        {/* cart items */}
        <div className="relative hidden md:block cursor-pointer">
            <FaBagShopping className="text-xl"/>
            <sup className="absolute top-0 -right-3 bg-[#E58411] text-white w-5 h-5 rounded-full flex justify-center items-center text-xs">0</sup>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
