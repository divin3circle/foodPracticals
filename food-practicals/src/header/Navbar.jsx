import { useState } from "react";
import { AiOutlineClose, AiOutlineContacts, AiOutlineHome, AiOutlineMenu, AiOutlineSearch, AiOutlineShoppingCart } from "react-icons/ai";
import {  FaHotjar, FaShoppingBag } from "react-icons/fa";
import { GiKiwiFruit } from "react-icons/gi";
import { Link } from "react-router-dom"

const Navbar = () => {
    const [nav, setNav] = useState(false);
  

  return (
    <div className="max-w-[1640px] mx-auto flex justify-between items-center p-4">
      {/* Left Side Navbar */}
      <div className="flex items-center">
        <div onClick={() => setNav(!nav)} className="cursor-pointer">
          <AiOutlineMenu size={32} />
        </div>
        <h1 className="font-title text-lg xs:text-2xl md:text-3xl lg:text-4xl px-2 cursor-pointer">
          <Link to="/">
            Food<span className="font-bold font-cursive">PRACTICALS</span>
          </Link>
        </h1>
      </div>
      {/* Right Side Navbar Search Input */}
      <div className="bg-tertiary rounded-xl flex items-center p-1 w-[200px] xs:w-[400px] md:w-[500px]">
        <AiOutlineSearch size={20} />
        <input
          type="text"
          placeholder="Search"
          className="bg-transparent border-none outline-none md:py-2 py-1 p-2 focus:outline-none w-full font-cursive"
        />
      </div>
      {/* Right Side Navbar cart */}
      <div className="cursor-pointer">
        <button className=" bg-tertiary hidden lg:flex items-center py-2 rounded-lg px-2 font-cursive font-semibold hover:bg-text border-tertiary border-2 hover:text-black hover:scale-105 ease-in duration-150">
          <Link to="/contact">
            <AiOutlineShoppingCart size={24} />
          </Link>
          <p className="ml-2 font-cursive">Cart</p>
        </button>
      </div>
      {/* Mobile Menu */}
      <div>
        {/* Start of Overlay */}
        {nav ? (
          <div
            className="bg-black/90 fixed w-full h-screen z-10 top-0 left-0"
            onClick={() => setNav(!nav)}
          ></div>
        ) : (
          ""
        )}

        {/* End of Overlay */}

        {/* Start of Mobile Menu */}
        <div
          className={
            nav
              ? "fixed left-0 top-0 w-[300px] h-screen bg-tertiary z-20 duration-300"
              : "fixed left-[-100%] top-0 w-[300px] h-screen bg-tertiary z-20 ease-in duration-300"
          }
        >
          {/* Close Menu Icon */}
          <div className="my-2">
            <AiOutlineClose
              size={32}
              className="absolute right-4 cursor-pointer "
              onClick={() => setNav(!nav)}
            />
          </div>
          {/* End Close Menu Icon */}
          {/* Start of Nav Bar */}
          <h2 className="text-center mb-10 text-xl font-bold font-title">
            Food<span className="font-cursive">PRACTICALS</span>
          </h2>
          <nav>
            <ul className="flex flex-col p-4">
              <li
                className="mb-4 w-[75%] flex font-title font-bold p-2 text-xl"
                onClick={() => setNav(!nav)}
              >
                <AiOutlineHome size={26} className="mr-2" />
                <a href="/">Home</a>
              </li>
              <li className="mb-4" onClick={() => setNav(!nav)}>
                <Link
                  to="/chilly"
                  className="w-[75%] flex font-title font-bold p-2 text-xl"
                >
                  <FaHotjar size={26} className="mr-2" />
                  Chilli Sauce
                </Link>
              </li>
              <li className="mb-4" onClick={() => setNav(!nav)}>
                <Link
                  to="/chilly"
                  className="w-[75%] flex font-title font-bold p-2 text-xl"
                >
                  <GiKiwiFruit size={26} className="mr-2" />
                  Tomato Sauce
                </Link>
              </li>
              <li className="mb-4" onClick={() => setNav(!nav)}>
                <Link
                  to="/new"
                  className="w-[75%] flex font-title font-bold p-2 text-xl"
                >
                  <FaShoppingBag size={26} className="mr-2" />
                  New Arrivals
                </Link>
              </li>
              <li className="mb-4" onClick={() => setNav(!nav)}>
                <Link
                  to="/contact"
                  className="w-[75%] flex font-title font-bold p-2 text-xl"
                >
                  <AiOutlineContacts size={26} className="mr-2" />
                  Contact Us
                </Link>
              </li>
            </ul>
          </nav>

          {/*  End Nav Bar */}
        </div>

        {/* Start of Mobile Menu */}
      </div>
    </div>
  );
}

export default Navbar;
