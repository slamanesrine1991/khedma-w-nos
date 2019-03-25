import axios from 'axios';

import {
    GET_PROFILE_STUDENT,
    PROFILE_STUDENT_LOADING,
    GET_ERRORS,
    CLEAR_CURRENT_STUDENT_PROFILE,
    GET_PROFILES_STUDENT ,
    SET_CURRENT_STUDENT} from './types';

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
// Get profile by handle
export const getStudentProfileByHandle = handle => dispatch => {
  dispatch(setStudentProfileLoading());
  axios
    .get(`/api/studentprofile/handle/${handle}`)
    .then(res =>
      dispatch({
        type: GET_PROFILE_STUDENT,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_PROFILE_STUDENT,
        payload: null
      })
    );
};  
//delete profile & account
export const deleteStudentAccount  =() =>dispatch =>{
if (window.confirm('are you sure ? this can not be undone')){
  axios
  .delete('/api/studentprofile')
  .then(res =>
    dispatch({
      type: SET_CURRENT_STUDENT,
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
}  ;

// Get all profiles
export const getStudentProfiles = () => dispatch => {
  dispatch(setStudentProfileLoading());
  axios
    .get('/api/studentprofile/all')
    .then(res =>
      dispatch({
        type: GET_PROFILES_STUDENT,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_PROFILES_STUDENT ,
        payload: null
      })
    );
};

// Profile loading
export const setStudentProfileLoading = () => {
  return {
    type: PROFILE_STUDENT_LOADING
  };
};
// Add experience
export const addExperience = (expData, history) => dispatch => {
  axios
    .post('/api/studentprofile/experience', expData)
    .then(res => history.push('/dashboard'))
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};
// Delete Experience
export const deleteExperience = id => dispatch => {
  axios
    .delete(`/api/studentprofile/experience/${id}`)
    .then(res =>
      dispatch({
        type: GET_PROFILE_STUDENT,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};
/// Add education
export const addEducation = (eduData, history) => dispatch => {
  axios
    .post('/api/studentprofile/education', eduData)
    .then(res => history.push('/dashboard'))
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};
// Delete Education
export const deleteEducation = id => dispatch => {
  axios
    .delete(`/api/studentprofile/education/${id}`)
    .then(res =>
      dispatch({
        type: GET_PROFILE_STUDENT,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};
  