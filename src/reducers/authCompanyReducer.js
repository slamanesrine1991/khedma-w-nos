import {SET_CURRENT_COMPANY } from '../actions/types';
import isEmpty from '../validation/is-empty'
const initialState={
    isAuthorize:false,
    company:{},
    
}
export default function(state =initialState, action) {
 switch(action.type){
     case SET_CURRENT_COMPANY:
     return{
         ...state,
         isAuthorize: !isEmpty (action.payload),
         company : action.payload
     }
     default:return state;
 }
}