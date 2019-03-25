import {GET_PROFILE_STUDENT, PROFILE_STUDENT_LOADING, CLEAR_CURRENT_STUDENT_PROFILE} from '../actions/types' 
const initilState ={
    profileStudent : null,
    profilesStudent : null,
    loading: false
};
export default function(state = initilState, action){
    switch (action.type){
        case PROFILE_STUDENT_LOADING:
        return{
            ...state,
            loading:true
        }
        case GET_PROFILE_STUDENT:
         return {
             ...state,
             profileStudent : action.payload,
             loading:false
         };
         case CLEAR_CURRENT_STUDENT_PROFILE:
         return {
             ...state,
             profileStudent:null
         };

        default:
        return state;
    } 
}