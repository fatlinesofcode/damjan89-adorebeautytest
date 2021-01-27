import axios from "axios";

export function getCategoriesService() {
  return new Promise(((resolve, reject) => {
    axios.get('http://localhost:3000/api/categories/').then((resp)=>{
      if(resp && resp.data){
        resolve(resp.data)
      } else {
        reject(resp.data)
      }
    }).catch((err)=>{
      reject(err)
    })
  }))
}
