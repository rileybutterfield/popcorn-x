import client from "./client"

const endpoint = "/likes"
const getLikes = () => client.get(endpoint)
const postLike = (info) => client.post(endpoint, info)

export default {
  getLikes,
  postLike
}
