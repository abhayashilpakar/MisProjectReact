import React from "react";

import { Link } from "react-router-dom";
import Product from "../Components/product/Product";

function Home() {
  return (
    <>
      <div className="">
        <section className="pt-7  ">
          <div className="container-xl  mx-auto ">
            <div className="row align-items-center">
              <div className="col-md-6 text-md-start text-center py-6">
                <h1 className="mb-2 fs-9 fw-bold ">
                  Our Newest & Trendy Shoes Collection
                </h1>
                <h2 className="mb-2 font-bold">Discover Your Own Shoes</h2>

                <p className="mb-6 lead text-secondary">
                  Tools tutorials, design and innovation experts, all
                  <br className="d-none d-xl-block" />
                  in one place! The most intuitive way to imagine
                  <br className="d-none d-xl-block" />
                  your next user experience.
                </p>
                <div className="flex mt-8 max-[768px]:justify-center">
                  <Link
                    href="{}"
                    className="uppercase py-2 px-4 rounded-lg underline-offset-4  bg-orange-500 border-2 border-transparent text-white text-md mr-4 hover:bg-orange-400"
                  >
                    Shop Now
                  </Link>
                  <Link
                    href="{}"
                    className="uppercase py-2 px-4 underline-offset-4 rounded-lg bg-transparent border-2 border-orange-500  text-black hover:bg-pink-500  text-md"
                  >
                    Read more
                  </Link>
                </div>
              </div>

              <div className="col-md-6 text-end  ">
                <div className="max-[768px]:hidden  relative">
                  <img
                    className="pt-7 pt-md-0 img-fluid "
                    src="assets/img/fashionshoes.png"
                    alt=""
                  />
                  <div className="  absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-opacity-75 bg-orange-200 rounded-full p-11 -z-10"></div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Product />
    </>
  );
}

export default Home;
