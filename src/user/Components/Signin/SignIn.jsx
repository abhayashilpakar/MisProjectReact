import React from "react";

import SignInComponent from "./SignInComponent";
import axios from "axios";
const registerApi = async (name, lastName, email, password) => {
  const { data } = await axios.post(
    "http://localhost:3001/api/users/register",
    {
      name,
      lastName,
      email,
      password,
    }
  );

  return data;
};

function SignIn() {
  return <SignInComponent registerApi={registerApi} />;
}

export default SignIn;
