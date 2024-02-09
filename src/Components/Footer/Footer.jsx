import React from "react";

function Footer() {
  return (
    <footer className="bg-gray-50">
      <div className="mx-auto grid max-w-screen-xl gap-y-8 gap-x-12 px-4  md:grid-cols-2 xl:grid-cols-4 xl:px-10">
        <div className="max-w-sm">
          <div className="mb-1 flex  items-center space-x-2 ">
            <svg
              version="1.0"
              xmlns="http://www.w3.org/2000/svg"
              width="100.000000pt"
              height="100.000000pt"
              viewBox="0 0 300.000000 300.000000"
              preserveAspectRatio="xMidYMid meet"
            >
              <g
                transform="translate(0.000000,300.000000) scale(0.100000,-0.100000)"
                fill="#f59b16"
                stroke="none"
              >
                <path d="M1080 1959 c-86 -10 -137 -36 -180 -90 -55 -70 -60 -107 -57 -394 2 -234 4 -253 24 -291 81 -152 278 -194 474 -100 48 22 55 23 80 11 51 -27 162 -36 419 -33 l255 3 3 24 c2 13 -2 28 -10 33 -7 4 -100 6 -208 2 -174 -5 -395 6 -420 21 -4 3 15 29 43 59 33 34 63 78 82 122 26 62 29 80 29 174 0 97 -2 110 -31 172 -17 37 -55 92 -83 122 -44 47 -48 55 -33 62 10 4 157 10 326 12 l308 4 -3 26 -3 27 -210 5 c-247 6 -395 -2 -452 -25 -40 -16 -42 -16 -90 8 -40 21 -103 37 -193 51 -8 1 -40 -1 -70 -5z m175 -80 l67 -20 -55 -58 c-120 -126 -155 -270 -102 -428 29 -86 68 -148 121 -191 20 -17 34 -34 30 -40 -11 -18 -122 -46 -186 -46 -72 0 -122 19 -166 62 -51 51 -55 73 -55 346 -1 237 0 255 20 294 22 43 64 79 109 92 50 15 148 10 217 -11z m180 -106 c150 -153 165 -350 38 -507 -26 -33 -58 -66 -70 -74 -21 -13 -25 -11 -78 42 -35 35 -68 81 -88 123 -27 58 -32 79 -32 148 0 69 4 89 31 145 28 59 122 170 144 170 4 0 29 -21 55 -47z" />
              </g>
            </svg>
          </div>
          <div className="text-gray-500">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis ad a
            officia ea expedita!
          </div>
        </div>
        <div className="">
          <div className="mt-4 mb-2 font-medium xl:mb-4">Address</div>
          <div className="text-gray-500">
            Mangal Bazzar Ikhalakhu, <br />
            Lalitpur, <br />
            Kathmandu , Nepal
          </div>
        </div>
        <div className="">
          <div className="mt-4 mb-2 font-medium xl:mb-4">Links</div>
          <nav aria-label="Footer Navigation" className="text-gray-500">
            <ul className="space-y-3">
              <li>
                <a className="hover:text-blue-600 hover:underline" href="a">
                  About us
                </a>
              </li>
              <li>
                <a className="hover:text-blue-600 hover:underline" href="a">
                  Blog
                </a>
              </li>

              <li>
                <a className="hover:text-blue-600 hover:underline" href="a">
                  Support Hub
                </a>
              </li>
              <li>
                <a className="hover:text-blue-600 hover:underline" href="a">
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="">
          <div className="mt-4 mb-2 font-medium xl:mb-4">
            Subscribe to our Newsletter
          </div>
          <div className="flex flex-col">
            <div className="mb-4">
              <input
                type="email"
                className="focus:outline mb-2 block h-14 w-full rounded-xl text-black  px-4 sm:w-80 focus:outline-none focus:ring-1 focus:ring-blue-600"
                placeholder="Enter your email"
              />
              <button className="block rounded-2xl bg-orange-500 px-6 py-3 font-medium text-white">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gray-100">
        <div className="mx-auto flex max-w-screen-xl flex-col gap-y-4 px-4 py-3 text-center text-gray-600 sm:flex-row sm:justify-between sm:text-left">
          <div className="">
            © 2024 <strong style={{ color: "orange" }}>DC</strong> | All Rights
            Reserved
          </div>
          <div className="">
            <a className="" href="a">
              Privacy Policy
            </a>
            <span>|</span>
            <a className="" href="a">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
