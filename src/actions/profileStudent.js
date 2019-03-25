import axios from 'axios';

import {
    GET_PROFILE_STUDENT,
    PROFILE_STUDENT_LOADING,
    GET_ERRORS,
    CLEAR_CURRENT_STUDENT_PROFILE} from './types';

// get current student profile
export const getCurrentProfileStudent = () => dispatch => {
dispatch(setProfileStudentLoading());
axios.get('/api/studentprofile')
.then(res => dispatch ({
    type : GET_PROFILE_STUDENT,
    payload : res.data
}))
.catch (err => dispatch({
    type:GET_PROFILE_STUDENT,
    payload: {}
}));
};

// Profile loading
export const setProfileStudentLoading = () => {
    return {
      type: PROFILE_STUDENT_LOADING
    };
  };
 // Create Profile
export const createProfileStudent = (profileStudentData, history) => dispatch => {
  axios
    .post('/api/studentprofile', profileStudentData)
    .then(res => history.push('/dashboard'))
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
}; 
  // Clear profile
export const clearCurrentProfileStudent = () => {
    return {
      type: CLEAR_CURRENT_STUDENT_PROFILE
    };
  };
  