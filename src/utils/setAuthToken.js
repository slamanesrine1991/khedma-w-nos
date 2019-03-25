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
          //  delete axios.defaults.headers.commmon['Authorization']
          if(!axios.defaults.headers || !axios.defaults.headers.common || !axios.defaults.headers.common.Authorization) {
           
                delete axios.defaults.headers.commmon['Authorization']
            
        }

         //   axios.defaults.headers.common['Authorization'] = token;
        }
    
}
export default setAuthToken;