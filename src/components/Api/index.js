
import axios from 'axios';


let endpoint = 'https://us-central1-enye-challenge2.cloudfunctions.net/usersDetails';

export const ApiRequest =  data =>{
    axios.post(endpoint, data)
         .then(res => {
             if (res.status === 200){
                console.log(res)
             }
         }).catch(error => {
             console.error(error)
         })
    
}

