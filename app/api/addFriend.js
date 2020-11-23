import client from "./client"

// baseURL: "http://localhost:8080/api"

const addNewFriend = (info) => client.put(`/users/addFriend/${info.userId}`, info)


export default {
  addNewFriend,
}
