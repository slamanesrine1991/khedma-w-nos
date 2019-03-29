import {SET_CURRENT_ADMIN} from '../actions/types';
import isEmpty from '../validation/is-empty'
const initialState={
    isTestify:false,
    admin:{},
    
}
export default function(state =initialState, action) {
 switch(action.type){
     case SET_CURRENT_ADMIN:
     return{
         ...state,
         isTestify: !isEmpty (action.payload),
         admin : action.payload
     }
     default:return state;
 }
}