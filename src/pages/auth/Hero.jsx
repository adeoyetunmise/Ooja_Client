import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="min-h-screen px-4 sm:px-10 md:px-20 bg-gray-50">
      {/* Navbar Section */}
      <nav>
        <div className="max-w-7xl mx-auto flex items-center p-2 justify-between">
          {/* Logo Section */}
          <div className="text-black text-2xl font-semibold flex items-center">
            <Link to="/mainpage">
              <img src="/svgs/buy.svg" alt="Ooja logo" width={60} className="sm:w-[100px]" />
            </Link>
            <h2 className="font-iceberg md:text-3xl text-2xl sm:text-5xl">Ooja</h2>
          </div>

          {/* Mobile menu button */}
          <div className="block lg:hidden">
            <button onClick={toggleMenu} className="text-black">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </button>
          </div>

          {/* Navbar links (visible on large screens) */}
          <div className="hidden lg:flex space-x-6">
            <Link to="/login" className="bg-indigo-600 text-white py-2 px-4 rounded-md font-bold text-sm sm:text-base">
              Log In
            </Link>
            <Link to="/signup" className="bg-rose-500 text-white py-2 px-4 rounded-md font-bold text-sm sm:text-base">
              Sign Up
            </Link>
          </div>
        </div>

        {/* Mobile menu (hidden by default) */}
        {isMobileMenuOpen && (
          <div className="lg:hidden text-black p-2 space-y-1 text-center">
            <Link to="/login" className="block  py-2 px-4 rounded-md font-bold text-sm sm:text-base text-black hover:text-blue-300">
              Log In
            </Link>
            <Link to="/signup" className="block py-2 px-4 rounded-md font-bold text-sm sm:text-base text-black  hover:text-blue-300">
              Sign Up
            </Link>
          </div>
        )}
      </nav>

      {/* Main Content Section */}
      <div className="flex flex-col items-center justify-center min-h-[500px] text-center space-y-6 relative">
        <h1 className="font-extrabold font-iceberg text-4xl sm:text-6xl lg:text-7xl leading-tight">
          Welcome to the best place to buy and sell your favourite items.
          <span className="text-rose-500"> Ooja</span> is your one-stop
          <span className="text-rose-500"> marketplace</span>.
        </h1>
        <p className="text-slate-800 text-sm sm:text-lg lg:text-xl px-4 sm:px-20">
          We offer fast, reliable delivery services to bring your items right to your doorstep. At Ooja, we serve
          customers nationwide, providing a wide variety of products, from household essentials to food, groceries,
          and much more to meet all your needs.
        </p>
        <Link
          to="/signup"
          className="bg-rose-500 text-white py-2 px-6 rounded-md font-bold text-sm sm:text-base hover:bg-rose-600 transition"
        >
          Get Started
        </Link>
      </div>
    </div>
  );
};

export default Hero;
