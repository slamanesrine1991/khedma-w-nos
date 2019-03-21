import { SET_CURRENT_USER } from "../../../../formation/tiktok/8. Redux & Authentication/7.1 devconnector_S8.zip/devconnector_S8/client/src/actions/types";

const initialState={
    isAuthenticated:false,
    user:{}
}
export default finction(state=initialState,action){
 switch(action.type){
     default:return state;
 }
}