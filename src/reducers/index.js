import { combineReducers } from 'redux'
import authReducer from './authReducer';
import errorReducer from './errorReducer';
import profileStudentReducer from './profileStudentReducer'

export default combineReducers({
    auth:authReducer,
    errors : errorReducer,
    profileStudent : profileStudentReducer
})