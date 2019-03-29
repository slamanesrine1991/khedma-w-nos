import { GET_ERRORS, SET_CURRENT_ADMIN, CLEAR_CURRENT_ADMIN } from "./types";
import axios from "axios";
import jwt_decode from "jwt-decode";
import setAuthToken from "../utils/setAuthToken";

export const registerAdmin = (adminData, history) => dispatch => {
  axios
    .post("/api/admin/adminRegister", adminData)
    .then(res => history.push("/login-admin"))
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};
//login - get student token
export const loginAdmin = adminData => dispatch => {
  axios
    .post("/api/admin/adminLogin", adminData)
    .then(res => {
      // save to localstorage
      const { token } = res.data;
      //set token to local storage
      localStorage.setItem("jwtToken", token);
      //set token to auth header
      setAuthToken(token);
      //decode token to get user data
      const decoded = jwt_decode(token);
      // set current student
      dispatch(setCurrentAdmin(decoded));
    })
    .catch(err => {
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      });
    });
};
//set logged in student
export const setCurrentAdmin = decoded => {
  return {
    type: SET_CURRENT_ADMIN,
    payload: decoded
  };
};
//log student out
export const logoutAdmin = () => dispatch => {
  // remove token from local storage
  localStorage.removeItem("jwtToken");
  setAuthToken(false);
  // set current student to empty wich will set isAuthenticated to false
  dispatch(setCurrentAdmin({}));
};

// Clear profile
export const clearCurrentAdmin = () => {
  return {
    type: CLEAR_CURRENT_ADMIN
  };
};
