import {GET_PROFILE_COMPANY,CLEAR_CURRENT_COMPANY_PROFILE,PROFILE_COMPANY_LOADING, GET_PROFILES_COMPANY
} from '../actions/types' 
const initilState ={
 profileCompany : null,
 profilesCompany : null,
 loading: false
};
export default function(state = initilState, action){
 switch (action.type){
    
     case GET_PROFILE_COMPANY:
      return {
          ...state,
          profileCompany : action.payload,
          loading:false
      };
      case PROFILE_COMPANY_LOADING:
      return{
          ...state,
          loading:true
      }
      case CLEAR_CURRENT_COMPANY_PROFILE:
      return {
          ...state,
          profileCompany:null
      };
     
      case  GET_PROFILES_COMPANY:
      return {
          ...state,
          profilesCompany:action.payload,
          loading: false
      };
      
     
     default:
     return state;
 } 
}