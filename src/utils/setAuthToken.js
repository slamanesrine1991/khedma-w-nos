import axios from 'axios';
const setAuthToken = token => {
    if(token){
    //apply to every request
    if(!axios.defaults.headers || !axios.defaults.headers.common || !axios.defaults.headers.common.Authorization) {
        axios.defaults.headers = {
            common: {
                Authorization: token
            }
        }
    }
        }else{
            // delete auth header
            delete axios.defaults.headers.commmon['Authorization']
        }
    
}
export default setAuthToken;