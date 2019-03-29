import axios from "axios";

import {
  GET_PROFILE_COMPANY,
  PROFILE_COMPANY_LOADING,
  CLEAR_CURRENT_COMPANY_PROFILE,
  GET_ERRORS,
  GET_PROFILES_COMPANY,
  SET_CURRENT_COMPANY
} from "./types";

// get current student profile
export const getCurrentProfileCompany = () => dispatch => {
  dispatch(setProfileCompanyLoading());
  axios
    .get("/api/companyprofile")
    .then(res =>
      dispatch({
        type: GET_PROFILE_COMPANY,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_PROFILE_COMPANY,
        payload: {}
      })
    );
};
// Profile loading
export const setProfileCompanyLoading = () => {
  return {
    type: PROFILE_COMPANY_LOADING
  };
};

// Clear profile
export const clearCurrentProfileCompany = () => {
  return {
    type: CLEAR_CURRENT_COMPANY_PROFILE
  };
};
// Create Profile
export const createProfileCompany = (
  profileCompanyData,
  history
) => dispatch => {
  axios
    .post("/api/companyprofile", profileCompanyData)
    .then(res => history.push("/dashboardCompany"))
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};
// Get profile by handle
export const getCompanyProfileByHandle = handle => dispatch => {
  dispatch(setProfileCompanyLoading());
  axios
    .get(`/api/companyprofile/handle/${handle}`)
    .then(res =>
      dispatch({
        type: GET_PROFILE_COMPANY,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_PROFILE_COMPANY,
        payload: null
      })
    );
};
// Add offre
export const addOffre = (offreData, history) => dispatch => {
  axios
    .post("/api/companyoffre/create", offreData)
    .then(res => history.push("/dashboardCompany"))
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};
// Get all profiles
export const getCompanyProfiles = () => dispatch => {
  dispatch(setProfileCompanyLoading());
  axios
    .get("/api/companyprofile/all")
    .then(res =>
      dispatch({
        type: GET_PROFILES_COMPANY,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_PROFILES_COMPANY,
        payload: null
      })
    );
};
//delete profile & account
export const deleteCompanyAccount = () => dispatch => {
  if (window.confirm("are you sure ? this can not be undone")) {
    axios
      .delete("/api/companyprofile")
      .then(res =>
        dispatch({
          type: SET_CURRENT_COMPANY,
          payload: {}
        })
      )
      .catch(err =>
        dispatch({
          type: GET_ERRORS,
          payload: err.response.data
        })
      );
  }
};
