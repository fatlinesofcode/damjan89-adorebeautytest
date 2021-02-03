import axios from "axios";
export function getProductsService(page, perPage, category) {
  if(!page) page = 1
  if(!perPage) perPage = 50
  let query = `limit=${perPage}&page=${page}`
  if(category) query+=`&categories:in=${category}`
  return new Promise(((resolve, reject) => {
    axios.get(`/api/products/?${query}`).then((resp)=>{
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
