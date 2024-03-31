import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function SignInComponent({ registerApi }) {
  // State to manage form validation status
  const [validated, setValidated] = useState(false);
  const navigate = useNavigate();

  // Function to handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent default form submission
    event.stopPropagation(); // Stop event propagation

    // Extract form elements
    const form = event.currentTarget.elements;
    const email = form.email.value;
    const name = form.name.value;
    const lastName = form.lastName.value;
    const password = form.password.value;

    // Check form validity and required fields
    if (
      event.currentTarget.checkValidity() === true &&
      email &&
      name &&
      lastName &&
      password
    ) {
      try {
        // Call the register API asynchronously
        const res = await registerApi(name, lastName, email, password);
        console.log("Response:", res); // Log the entire response object
        if (res && res.data) {
          console.log("Data:", res.data); // Log the data property if it exists
        }

        if (res.success) {
          navigate("/login", { replace: true });
        }
      } catch (er) {
        // Handle errors
        console.log("Error:", er);
        console.log({
          error: er.response?.data?.message || er.response?.data,
        });
      }
    }

    setValidated(true); // Set form validation status to true
  };

  return (
    <>
      <div className="flex w-screen flex-wrap text-slate-800">
        <div className="flex w-full flex-col md:w-full ">
          <div className="my-auto mx-auto flex flex-col justify-center px-6 pt-8 md:justify-start lg:w-[28rem]">
            <p className="text-center text-3xl font-bold md:text-left md:leading-tight">
              Create your free account
            </p>
            <p className="mt-6 text-center font-medium md:text-left">
              Already using DC?
              <Link
                href="a"
                to="/login"
                className="whitespace-nowrap font-semibold text-orange-500"
              >
                Login here
              </Link>
            </p>
            <form
              className="flex flex-col items-stretch pt-3 md:pt-8"
              noValidate
              validated={validated ? "true" : "false"}
              onSubmit={handleSubmit}
            >
              <div className="flex flex-col pt-4">
                <div className="relative flex overflow-hidden rounded-md border-2 border-orange-500 transition  focus-within:border-orange-550">
                  <input
                    type="text"
                    id="login-name"
                    className="w-full flex-shrink appearance-none  bg-white py-2 px-4 text-base text-black  focus:outline-none"
                    placeholder="Name"
                    name="name" // Added name attribute
                  />
                </div>
              </div>
              <div className="flex flex-col pt-4">
                <div className="relative flex overflow-hidden rounded-md border-2   transition border-orange-500 focus-within:border-orange-550">
                  <input
                    type="text"
                    id="login-lastname"
                    className="w-full flex-shrink appearance-none  bg-white py-2 px-4 text-base text-gray-700 placeholder-gray-400 focus:outline-none"
                    placeholder="Last Name"
                    name="lastName" // Added name attribute
                  />
                </div>
              </div>
              <div className="flex flex-col pt-4">
                <div className="relative flex overflow-hidden rounded-md border-2  border-orange-500 transition focus-within:border-orange-550">
                  <input
                    type="email"
                    id="login-email"
                    className="w-full flex-shrink appearance-none border-gray-300 bg-white py-2 px-4 text-base text-gray-700 placeholder-gray-400 focus:outline-none"
                    placeholder="Email"
                    name="email" // Added name attribute
                  />
                </div>
              </div>
              <div className="mb-4 flex flex-col pt-4">
                <div className="relative flex overflow-hidden rounded-md border-2  border-orange-500 transition focus-within:border-orange-550">
                  <input
                    type="password"
                    id="login-password"
                    className="w-full flex-shrink appearance-none border-gray-300 bg-white py-2 px-4 text-base text-gray-700 placeholder-gray-400 focus:outline-none"
                    placeholder="Password (minimum 8 characters)"
                    name="password" // Added name attribute
                  />
                </div>
              </div>
              <button
                type="submit"
                className="mt-6 rounded-lg bg-orange-500 px-4 py-2 text-center text-base font-semibold text-white shadow-md outline-none ring-blue-500 ring-offset-2 transition hover:bg-orange-550 focus:ring-2 md:w-32 self-center"
              >
                Sign in
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default SignInComponent;
