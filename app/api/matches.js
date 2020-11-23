import client from "./client"

const endpoint = "/matches"
const getMatches = (id) => client.get(`${endpoint}/${id}`)

export default {
  getMatches,
}
