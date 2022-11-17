import axios from "axios"
const dddd = axios.create({
  baseURL: "https://api.publicapis.org/",
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
function dddd1_get__read(payload) {
  return dddd.get(`/`)
}
export const apiService = { dddd1_get__read }
