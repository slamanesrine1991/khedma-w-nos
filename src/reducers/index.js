import { combineReducers } from 'redux'
import authReducer from './authReducer';
import authCompanyReducer from './authCompanyReducer';
import errorReducer from './errorReducer';
import profileStudentReducer from './profileStudentReducer'
import profileCompanyReducer from './profileCompanyReducer'

export default combineReducers({
    auth:authReducer,
    errors : errorReducer,
    profileStudent : profileStudentReducer,
    profileCompany : profileCompanyReducer,
    authCompany: authCompanyReducer
})