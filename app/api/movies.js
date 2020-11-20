import client from "./client"

const endpoint = "/movies"
const getMovies = () => client.get(endpoint)
const getSingleMovie = (id) => client.get(`/movies/${id}`)

export default {
  getMovies,
  getSingleMovie
}
