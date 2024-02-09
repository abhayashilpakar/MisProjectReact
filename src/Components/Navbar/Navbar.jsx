import React, { useState } from "react";
import { Link } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { FiX } from "react-icons/fi";

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  const closeMobileMenu = () => {
    if (window.innerWidth <= 768) {
      setIsMobileMenuOpen(false);
    }
  };
  return (
    <div>
      <nav className="">
        <div className="container-xl mx-auto  py-3 md:flex md:justify-between md:items-center ">
          <div className="flex justify-between items-center">
            <div className="mr-2 size-20">
              <Link to="/home">
                <svg
                  version="1.0"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 300.000000 300.000000"
                  preserveAspectRatio="xMidYMid meet"
                  className=" self-center"
                >
                  <g
                    transform="translate(0.000000,300.000000) scale(0.100000,-0.100000)"
                    fill="#000000"
                    stroke="none"
                  >
                    <path d="M1080 1959 c-86 -10 -137 -36 -180 -90 -55 -70 -60 -107 -57 -394 2 -234 4 -253 24 -291 81 -152 278 -194 474 -100 48 22 55 23 80 11 51 -27 162 -36 419 -33 l255 3 3 24 c2 13 -2 28 -10 33 -7 4 -100 6 -208 2 -174 -5 -395 6 -420 21 -4 3 15 29 43 59 33 34 63 78 82 122 26 62 29 80 29 174 0 97 -2 110 -31 172 -17 37 -55 92 -83 122 -44 47 -48 55 -33 62 10 4 157 10 326 12 l308 4 -3 26 -3 27 -210 5 c-247 6 -395 -2 -452 -25 -40 -16 -42 -16 -90 8 -40 21 -103 37 -193 51 -8 1 -40 -1 -70 -5z m175 -80 l67 -20 -55 -58 c-120 -126 -155 -270 -102 -428 29 -86 68 -148 121 -191 20 -17 34 -34 30 -40 -11 -18 -122 -46 -186 -46 -72 0 -122 19 -166 62 -51 51 -55 73 -55 346 -1 237 0 255 20 294 22 43 64 79 109 92 50 15 148 10 217 -11z m180 -106 c150 -153 165 -350 38 -507 -26 -33 -58 -66 -70 -74 -21 -13 -25 -11 -78 42 -35 35 -68 81 -88 123 -27 58 -32 79 -32 148 0 69 4 89 31 145 28 59 122 170 144 170 4 0 29 -21 55 -47z" />
                  </g>
                </svg>
              </Link>
            </div>

            <div className="flex md:hidden">
              <button
                type="button"
                className="text-gray-500 hover:text-gray-600 focus:outline-none focus:text-gray-600 "
                onClick={handleToggle}
              >
                <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current">
                  <path d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"></path>
                </svg>
              </button>
            </div>
          </div>

          <div
            className={`md:flex items-center relative ${
              isMobileMenuOpen ? "" : "hidden "
            }`}
          >
            <button
              type="button"
              className="text-gray-500 md:hidden hover:text-gray-600 absolute right-0 -top-12 focus:outline-none focus:text-gray-600  z-50"
              onClick={handleToggle}
            >
              <FiX className="h-6 w-6 fill-current" />
            </button>

            <div className="navLink flex flex-col max-[768px]:absolute max-[768px]:w-screen max-[768px]:h-svh  max-[768px]:justify-center -left-4 -top-24 max-[768px]:bg-black/95 max:rounded-full md:flex-row  items-center   z-20  max-[768px]:gap-10 ">
              <Link
                className=" no-underline my-1 text-sm max-[600px]:texl-3xl text-gray-700 transition ease-in-out duration-300 font-medium  hover:text-orange-500 md:mx-4 md:my-0  underline-offset-8 decoration-8"
                to="/home"
                onClick={closeMobileMenu}
              >
                Home
              </Link>
              <Link
                className="my-1 text-sm text-gray-700 font-medium hover:text-orange-500 md:mx-4 md:my-0 underline-offset-8"
                to="/shop"
                onClick={closeMobileMenu}
              >
                Shop
              </Link>
              <Link
                className="my-1 text-sm text-gray-700 font-medium hover:text-orange-500 md:mx-4 md:my-0 underline-offset-8"
                to="/contact"
                onClick={closeMobileMenu}
              >
                Contact
              </Link>
              <Link
                className="my-1 text-sm text-gray-700 font-medium hover:text-orange-500 md:mx-4 md:my-0 underline-offset-8"
                to="/about"
                onClick={closeMobileMenu}
              >
                About
              </Link>

              <Link
                to="/shoppingcart"
                className="relative text-xl text-gray-700 hover:text-gray-600"
                onClick={closeMobileMenu}
              >
                <HiOutlineShoppingCart />
                <span className="absolute top-0 left-0 rounded-full bg-orange-500 text-white p-1 text-xs"></span>
              </Link>

              <Link
                to="/login"
                className="my-1 text-xl font-medium md:mx-4 md:my-0 "
                onClick={closeMobileMenu}
              >
                <CgProfile />
              </Link>

              <button
                className="uppercase py-2 px-4 rounded-lg underline-offset-4  bg-orange-500 border-2 border-transparent text-white text-md  hover:bg-orange-10"
                onClick={closeMobileMenu}
              >
                sign-in
              </button>
            </div>

            {/* <div className="flex  md:block"></div>

            <div className="flex  md:block"></div> */}
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
