import client from "./client"

const endpoint = "/movies"
const getMovies = () => client.get(endpoint)

export default {
  getMovies
}
