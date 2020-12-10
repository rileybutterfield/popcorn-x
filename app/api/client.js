import {create} from "apisauce"

// const apiClient = create({
//   baseURL: "http://localhost:8080/api"
// })

const apiClient = create({
  baseURL: "https://popcorn-backend.herokuapp.com/api"
})


export default apiClient
