import { Outlet, Navigate } from "react-router-dom";

import axios from "axios";
import React, { useEffect, useState } from "react";
import LoginPage from "./Login/LoginPage";

const ProtectedRoutesComponent = ({ admin }) => {
  const [isAuth, setIsAuth] = useState();

  useEffect(() => {
    axios.get("http://localhost/3001/api/get-token").then(function (data) {
      if (data.data.token) {
        setIsAuth(data.data.token);
      }
      return isAuth;
    });
  }, [isAuth]);

  if (isAuth === undefined) return <LoginPage />;

  return isAuth && admin && isAuth !== "admin" ? (
    <Navigate to="/login" />
  ) : isAuth && admin ? (
    <Outlet />
  ) : isAuth && !admin ? (
    <>
      <Outlet />
    </>
  ) : (
    <Navigate to="/login" />
  );
};

export default ProtectedRoutesComponent;
