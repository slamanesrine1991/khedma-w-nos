import axios from 'axios';

import {
    GET_PROFILE_COMPANY,PROFILE_COMPANY_LOADING,CLEAR_CURRENT_COMPANY_PROFILE,GET_ERRORS
  } from './types';

// get current student profile
export const getCurrentProfileCompany = () => dispatch => {
dispatch(setProfileCompanyLoading());
axios.get('/api/componyprofile')
.then(res => dispatch ({
    type : GET_PROFILE_COMPANY,
    payload : res.data
}))
.catch (err => dispatch({
    type:GET_PROFILE_COMPANY,
    payload: {}
}));
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
export const createProfileCompany = (profileCompanyData, history) => dispatch => {
    axios
      .post('/api/companyprofile', profileCompanyData)
      .then(res => history.push('/dashboardCompany'))
      .catch(err =>
        dispatch({
          type: GET_ERRORS,
          payload: err.response.data
        })
      );
  }; 