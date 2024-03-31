import React from "react";
import LoginPageComponent from "./LoginPageComponent";
import axios from "axios";

import { useDispatch } from "react-redux";
import { setReduxUserState } from "../../redux/actions/userAction";

const loginUserRequest = async (email, password, rememberMe) => {
  const { data } = await axios.post("http://localhost:3001/api/users/login", {
    email,
    password,
    rememberMe,
  });
  // localStorage.setItem("access_token", data.userLoggedIn.token);

  if (data.userLoggedIn.rememberMe) {
    localStorage.setItem("userInfo", JSON.stringify(data.userLoggedIn));
  } else {
    sessionStorage.setItem("userInfo", JSON.stringify(data.userLoggedIn));
  }

  return data;
};
function LoginPage() {
  const reduxDispatch = useDispatch();
  return (
    <LoginPageComponent
      loginUserRequest={loginUserRequest}
      reduxDispatch={reduxDispatch}
      setReduxUserState={setReduxUserState}
    />
  );
}

export default LoginPage;
