import { combineReducers } from 'redux'
import authReducer from './authReducer';
import authCompanyReducer from './authCompanyReducer';
import authAdminReducer from './authAdminReducer';
import errorReducer from './errorReducer';
import profileStudentReducer from './profileStudentReducer'
import profileCompanyReducer from './profileCompanyReducer'
import offersReducer from "./jobOffersReducer";
import companiesReducer from "./companiesReducer";
import appliedReducer from "./appliedReducer";

export default combineReducers({
    auth:authReducer,
    errors : errorReducer,
    profileStudent : profileStudentReducer,
    profileCompany : profileCompanyReducer,
    authCompany: authCompanyReducer,
    authAdmin: authAdminReducer,
    offersReducer,
    companiesReducer,
    appliedReducer
})