import axios from 'axios';

const api = axios.create({
  baseURL: "http://localhost:3003",
  headers: {
    Accept: "application/json"
  }
});

export function getPlanets () {
    return api.get("/planets");
}
