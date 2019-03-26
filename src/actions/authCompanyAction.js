import {GET_ERRORS, SET_CURRENT_COMPANY} from './types';
import axios from 'axios';
import jwt_decode from 'jwt-decode';
import setAuthToken from '../utils/setAuthToken';

export const registerCompany=(companyData,history)=> dispatch =>{

  axios.post('/api/companyRegister', companyData)
       .then(res=>history.push('/componyLogin')) 
       .catch(err=>dispatch({
           type : GET_ERRORS,
           payload : err.response.data

       }))
};
//login - get student token
export const loginCompany =(companyData)=> dispatch => {
 axios.post('/api/companyLogin',companyData)
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
     dispatch(setCurrentCompany(decoded));

 })   
 .catch (err => {
    dispatch({
        type : GET_ERRORS,
        payload : err.response.data
    })
});
}
//set logged in student
export const setCurrentCompany = decoded => {
    return{
        type : SET_CURRENT_COMPANY,
        payload : decoded
    }
}
export const logoutCompany = () => dispatch => {
    // remove token from local storage
    localStorage.removeItem('jwtToken');
    setAuthToken(false);
    // set current student to empty wich will set isAuthenticated to false
    dispatch(setCurrentCompany({}));

}