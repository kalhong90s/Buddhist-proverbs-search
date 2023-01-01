import axios from 'axios';

const address = 'https://dummyjson.com/users'

const api = {
  loadData: async () => {

    return await axios.get(address).then(function (response) {
      // handle success
      return response;
    }).catch(function (error) {
      // handle error
      console.log(error);
    })
      
    // id          
    // titil
    // buddhistProverbs
    // meaning 
    // classification
    // details
    // reference
    // level




    // return fetch(address).then(r => {
    //   console.log("r.json:"+r.json());
    //   r.json()});
  }
}

export default api;







