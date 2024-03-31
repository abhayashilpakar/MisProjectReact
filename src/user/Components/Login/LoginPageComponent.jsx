import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function LoginPageComponent({
  loginUserRequest,
  reduxDispatch,
  setReduxUserState,
}) {
  const [validated, setValidated] = useState(false);
  const navigate = useNavigate();
  const handleSubmit = async (event) => {
    event.preventDefault();
    event.stopPropagation();
    const form = event.currentTarget.elements;

    const email = form.email.value;
    const password = form.password.value;
    const rememberMe = form.rememberMe.checked;

    if (event.currentTarget.checkValidity() === true && email && password) {
      try {
        const res = await loginUserRequest(email, password, rememberMe);
        console.log(res);

        if (res.userLoggedIn) {
          reduxDispatch(setReduxUserState(res.userLoggedIn));
        }

        if (res.success && !res.userLoggedIn.isAdmin) {
          navigate("/home", { replace: true });
        } else navigate("/shop", { replace: true });
      } catch (error) {
        if (
          error.response &&
          error.response.data &&
          error.response.data.message
        ) {
          console.log(error.response.data.message);
        } else if (error.response && error.response.data) {
          console.log(error.response.data);
        } else {
          console.log(error);
        }
      }
    }

    setValidated(true);
  };
  return (
    <div className="flex  flex-wrap text-slate-800">
      <div className="flex w-full flex-col md:w-full">
        <div className="my-auto mx-auto flex flex-col justify-center px-6 pt-8 md:justify-start lg:w-[28rem]">
          <p className="text-center text-3xl font-bold md:leading-tight md:text-left md:text-5xl">
            Welcome back <br />
            to <span className="text-orange-500 italic">DC</span>
          </p>
          <p className="mt-6 text-center font-medium md:text-left">
            Sign in to your account below.
          </p>

          <form
            className="flex flex-col items-stretch pt-3 md:pt-8"
            validated={validated ? "true" : "false"}
            onSubmit={handleSubmit}
          >
            <div className="flex flex-col pt-4">
              <div className="relative flex overflow-hidden rounded-md border-2 transition focus-within:border-orange-500 ">
                <input
                  type="email"
                  id="login-email"
                  name="email"
                  className="w-full flex-shrink appearance-none border-gray-300 bg-white py-2 px-4 text-base text-gray-700 placeholder-gray-400 focus:outline-none"
                  placeholder="Email"
                />
              </div>
            </div>
            <div className="mb-4 flex flex-col pt-4">
              <div className="relative flex overflow-hidden rounded-md border-2 transition focus-within:border-orange-500 ">
                <input
                  type="password"
                  name="password"
                  id="login-password"
                  className="w-full flex-shrink appearance-none border-gray-300 bg-white py-2 px-4 text-base text-gray-700 placeholder-gray-400 focus:outline-none"
                  placeholder="Password"
                />
              </div>
            </div>
            <div className="mb-4 flex flex-col pt-4">
              <div className="relative flex overflow-hidden  items-center">
                <input
                  type="checkbox"
                  id="rememberMe"
                  name="rememberMe" // Add name attribute
                  className="w-5 h-5 text-orange-500 bg-white  focus:ring-orange-500 "
                />
                <span className=" pl-3 font-semibold">Remember me </span>
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
              <Link
                href="a"
                className="whitespace-nowrap font-semibold text-gray-900 underline underline-offset-4"
                to="/signup"
              >
                Sign up for free.
              </Link>
            </p>
          </div>
        </div>
      </div>

      {/* <div className="relative hidden  select-none bg-orange-500  bg-gradient-to-br md:block md:w-1/2">
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
      </div> */}
    </div>
  );
}

export default LoginPageComponent;
