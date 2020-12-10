// import client from "./client"
import {create} from "apisauce"

// const client = create({
//   baseURL: "http://localhost:8080"
// })

const client = create({
  baseURL: "https://popcorn-backend.herokuapp.com/"
})

const login = (email, password) => client.post('/auth/login', {email, password})

const register = (userInfo) => client.post('/auth/signup', userInfo)

export default {
  login,
  register
}
