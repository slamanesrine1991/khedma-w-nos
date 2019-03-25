import {GET_ERRORS, SET_CURRENT_STUDENT} from './types';
import axios from 'axios';
import jwt_decode from 'jwt-decode';
import setAuthToken from '../utils/setAuthToken';

export const registerStudent=(studentData,history)=> dispatch =>{

  axios.post('/api/studentRegister', studentData)
       .then(res=>history.push('/login')) 
       .catch(err=>dispatch({
           type : GET_ERRORS,
           payload : err.response.data

       }))
};
//login - get student token
export const loginStudent =(studentData)=> dispatch => {
 axios.post('/api/studentLogin',studentData)
 .then (res=> {
     // save to localstorage
     const {token} = res.data;
     //set token to local storage
     localStorage.setItem('jwtToken',token);
     //set token to auth header
     setAuthToken (token);
     //decode token to get user data
     const decoded = jwt_decode(token);
     // set current student
     dispatch(setCurrentStudent(decoded));

 })   
 .catch (err => {
    dispatch({
        type : GET_ERRORS,
        payload : err.response.data
    })
});
}
//set logged in student
export const setCurrentStudent = decoded => {
    return{
        type : SET_CURRENT_STUDENT,
        payload : decoded
    }
}
//log student out
export const logoutStudent = () => dispatch => {
    // remove token from local storage
    localStorage.removeItem('jwtToken');
    setAuthToken(false);
    // set current student to empty wich will set isAuthenticated to false
    dispatch(setCurrentStudent({}));

}