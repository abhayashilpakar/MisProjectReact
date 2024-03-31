import { LOGIN_USER, LOGOUT_USER } from "../constants/userConstants";
import axios from "axios";
export const setReduxUserState = (userCreated) => (dispatch) => {
  dispatch({
    type: LOGIN_USER,
    payload: userCreated,
  });
};

export const logout = () => (dispatch) => {
  document.location.href = "/login";
  axios.get("http://locahost/3001/api/logout");
  localStorage.removeItem("userInfo");
  sessionStorage.removeItem("userInfo");
  dispatch({ type: LOGOUT_USER });
};
