import React from "react";

function LoginPage() {
  return (
    <div className="flex  flex-wrap text-slate-800">
      <div className="flex w-full flex-col md:w-1/2">
        <div className="flex justify-center md:justify-start md:pl-12">
          <a href="a" className="text-2xl font-bold text-orange-500 ">
            Wobble .
          </a>
        </div>
        <div className="my-auto mx-auto flex flex-col justify-center px-6 pt-8 md:justify-start lg:w-[28rem]">
          <p className="text-center text-3xl font-bold md:leading-tight md:text-left md:text-5xl">
            Welcome back <br />
            to <span className="text-orange-500 ">Wobble</span>
          </p>
          <p className="mt-6 text-center font-medium md:text-left">
            Sign in to your account below.
          </p>

          <form className="flex flex-col items-stretch pt-3 md:pt-8">
            <div className="flex flex-col pt-4">
              <div className="relative flex overflow-hidden rounded-md border-2 transition focus-within:border-orange-500 ">
                <input
                  type="email"
                  id="login-email"
                  className="w-full flex-shrink appearance-none border-gray-300 bg-white py-2 px-4 text-base text-gray-700 placeholder-gray-400 focus:outline-none"
                  placeholder="Email"
                />
              </div>
            </div>
            <div className="mb-4 flex flex-col pt-4">
              <div className="relative flex overflow-hidden rounded-md border-2 transition focus-within:border-orange-500 ">
                <input
                  type="password"
                  id="login-password"
                  className="w-full flex-shrink appearance-none border-gray-300 bg-white py-2 px-4 text-base text-gray-700 placeholder-gray-400 focus:outline-none"
                  placeholder="Password"
                />
              </div>
            </div>
            <a
              href="a"
              className="mb-6 text-center text-sm font-medium text-gray-500  md:text-left"
            >
              Forgot password?
            </a>
            <button
              type="submit"
              className="rounded-lg bg-orange-500  px-4 py-2 text-center text-base font-semibold text-white shadow-md outline-none ring-orange-500  ring-offset-2 transition hover:bg-orange-400 focus:ring-2 md:w-32"
            >
              Sign in
            </button>
          </form>
          <div className=" py-4 text-center">
            <p className="text-gray-500 ">
              Don't have an account?
              <a
                href="a"
                className="whitespace-nowrap font-semibold text-gray-900 underline underline-offset-4"
              >
                Sign up for free.
              </a>
            </p>
          </div>
        </div>
      </div>
      <div className="relative hidden  select-none bg-orange-500  bg-gradient-to-br md:block md:w-1/2">
        <div className="py-16 px-8 text-white xl:w-[40rem]">
          <span className="rounded-full bg-white px-3 py-1 font-medium text-orange-500 ">
            New Feature
          </span>
          <p className="my-6 text-3xl font-semibold leading-10">
            Create animations with
            <span className="abg-white whitespace-nowrap py-2 text-white">
              drag and drop
            </span>
            .
          </p>
          <p className="mb-4">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt
            necessitatibus nostrum repellendus ab totam.
          </p>
          <a
            href="a"
            className="font-semibold tracking-wide text-white underline underline-offset-4"
          >
            Learn More
          </a>
        </div>
        <img
          className="ml-8 w-11/12 max-w-lg rounded-lg object-cover"
          src="/images/aaFKzowNcgxqSdxMw11na.png"
          alt=""
        />
      </div>
    </div>
  );
}

export default LoginPage;
