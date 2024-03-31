import React, { useState } from "react";
import { useSelector } from "react-redux";

function ProfileComponent({ updateUserProfileApi }) {
  const [validated, setValidated] = useState(false);
  // const dispatch = useDispatch();
  const { userInfo } = useSelector((state) => state.userRegisterLogin);

  const onChange = () => {
    const password = document.querySelector("input[name=password]");
    const confirm = document.querySelector("input[name=confirmPassword]");
    if (confirm.value === password.value) {
      confirm.setCustomValidity("");
    } else {
      confirm.setCustomValidity("Passwords do not match");
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent default form submission
    event.stopPropagation(); // Stop event propagation

    const form = event.currentTarget.elements;
    const name = form.name.value;
    const lastName = form.lastName.value;
    const password = form.password.value;
    const address = form.address.value;
    const city = form.city.value;
    const country = form.country.value;
    const state = form.state.value;
    const phoneNumber = form.phoneNumber.value;
    const zipcode = form.zipcode.value;

    if (
      event.currentTarget.checkValidity() === true &&
      form.password.value === form.confirmPassword.value
    ) {
      try {
        const response = await updateUserProfileApi(
          name,
          lastName,
          phoneNumber,
          address,
          country,
          state,
          password,
          city,
          zipcode
        );
        console.log(response.data);
      } catch (error) {
        console.error("Error updating profile:", error);
      }
    }
    setValidated(true);
  };

  return (
    <div>
      <section className="py-16 bg-gray-100 ">
        <div className="max-w-6xl px-4 mx-auto ">
          <div className="p-8 px-4 bg-white ">
            <div className="grid grid-cols-1 lg:grid-cols-[30%,1fr] gap-6">
              <div>
                <h2 className="px-4 text-lg font-medium leading-6">
                  Your Information
                </h2>
                <div className="p-4 mb-6">
                  {/* <label className="block text-sm font-medium">Photo</label> */}
                  <div className="flex items-center mt-1">
                    <span className="inline-block w-20 h-20 overflow-hidden bg-gray-100 rounded-full">
                      <svg
                        className="w-full h-full "
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z"></path>
                      </svg>
                    </span>
                    <button
                      type="button"
                      className="px-3 py-2 ml-5 text-sm font-medium leading-4  bg-white border border-gray-300 rounded shadow-sm "
                    >
                      Change
                    </button>
                  </div>
                </div>
              </div>
              <div>
                <form
                  action="#"
                  method="post"
                  validated={validated ? "true" : "false"}
                  onSubmit={handleSubmit}
                >
                  <div className="flex flex-wrap items-center">
                    <div className="w-full px-4 mb-6 lg:w-2/4">
                      <label
                        className="block mb-2 text-sm font-medium "
                        for="da"
                      >
                        First Name
                      </label>
                      <input
                        className="block w-full px-4 py-3 mb-2 text-sm  bg-white border rounded "
                        type="text"
                        name="name"
                        // value={userInfo.name}
                        placeholder="Enter a name"
                        id="da"
                      />
                    </div>
                    <div className="w-full px-4 mb-6 lg:w-2/4">
                      <label
                        className="block mb-2 text-sm font-medium "
                        id="da"
                      >
                        Last Name
                      </label>
                      <input
                        className="block w-full px-4 py-3 mb-2 text-sm  bg-white border rounded "
                        type="text"
                        name="lastName"
                        // value={userInfo.lastName}
                        placeholder="Enter a name"
                      />
                    </div>
                  </div>
                  <div className="px-4 mb-6">
                    <label className="block mb-2 text-sm font-medium ">
                      Email
                    </label>
                    <input
                      className="block w-full px-4 py-3 mb-2 text-sm  bg-white border rounded "
                      type="text"
                      value={userInfo.email}
                      disabled
                      placeholder="Enter a name"
                    />
                  </div>
                  <div className="px-4 mb-6">
                    <label className="block mb-2 text-sm font-medium ">
                      Password
                    </label>
                    <input
                      className="block w-full px-4 py-3 mb-2 text-sm  bg-white border rounded "
                      type="password"
                      name="password"
                      required
                      onChange={onChange}
                      placeholder="Enter your password"
                    />
                  </div>
                  <div className="px-4 mb-6">
                    <label className="block mb-2 text-sm font-medium ">
                      Confirm Password
                    </label>
                    <input
                      className="block w-full px-4 py-3 mb-2 text-sm  bg-white border rounded "
                      type="password"
                      name="confirmPassword"
                      onChange={onChange}
                      placeholder="Re-enter your password"
                    />
                  </div>
                  <div className="flex flex-wrap items-center">
                    <div className="w-full px-4 mb-6 lg:w-2/4">
                      <label className="block mb-2 text-sm font-medium ">
                        Phone Number
                      </label>
                      <input
                        className="block w-full px-4 py-3 mb-2 text-sm  bg-white border rounded "
                        type="text"
                        name="phoneNumber"
                        placeholder="Enter a your number "
                      />
                    </div>
                    <div className="w-full px-4 mb-6 lg:w-2/4">
                      <label className="block mb-2 text-sm font-medium ">
                        Address
                      </label>
                      <input
                        className="block w-full px-4 py-3 mb-2 text-sm  bg-white border rounded "
                        type="text"
                        name="address"
                        placeholder="Enter a Adddress"
                      />
                    </div>
                    <div className="w-full px-4 mb-6 lg:w-2/4">
                      <label className="block mb-2 text-sm font-medium ">
                        Country
                      </label>
                      <input
                        className="block w-full px-4 py-3 mb-2 text-sm  bg-white border rounded "
                        type="text"
                        name="country"
                        placeholder="Enter a name"
                      />
                    </div>
                    <div className="w-full px-4 mb-6 lg:w-2/4">
                      <label className="block mb-2 text-sm font-medium ">
                        Zip Code
                      </label>
                      <input
                        className="block w-full px-4 py-3 mb-2 text-sm  bg-white border rounded "
                        type="text"
                        name="zipcode"
                        placeholder="Enter a name"
                      />
                    </div>
                    <div className="w-full px-4 mb-6 lg:w-2/4">
                      <label className="block mb-2 text-sm font-medium ">
                        City
                      </label>
                      <input
                        className="block w-full px-4 py-3 mb-2 text-sm  bg-white border rounded "
                        type="text"
                        name="city"
                        placeholder="Enter a name"
                      />
                    </div>
                    <div className="w-full px-4 mb-6 lg:w-2/4">
                      <label className="block mb-2 text-sm font-medium ">
                        State or
                      </label>
                      <input
                        className="block w-full px-4 py-3 mb-2 text-sm  bg-white border rounded "
                        type="text"
                        name="state"
                        placeholder="Enter a name"
                      />
                    </div>
                  </div>
                  {/* <div className="px-4 mb-6">
                    <label
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                      for="file_input"
                    >
                      Upload file
                    </label>
                    <input
                      className="block w-full text-sm text-gray-600 border border-gray-200 rounded cursor-pointer file:hover:bg-gray-200 file:border-solid file:border-0 file:cursor-pointer dark:file:border-gray-700 dark:file:text-gray-300 dark:file:hover:bg-gray-500 dark:file:bg-gray-600 file:mr-5 file:px-5 file:py-3 bg-gray-50 dark:text-gray-400 dark:bg-gray-800 dark:border-gray-800 dark:placeholder-gray-400 file:border-r file:border-gray-300 file:bg-gray-100 "
                      type="file"
                    />
                  </div> */}
                  <div className="px-4 ">
                    <div className="flex ">
                      <button
                        type="submit"
                        className="inline-block px-6 py-2.5 bg-orange-500  text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-orange-600 hover:shadow-lg "
                      >
                        Submit
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ProfileComponent;
