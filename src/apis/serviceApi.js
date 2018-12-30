import axios from 'axios';

const api = axios.create({
  baseURL: "http://localhost:8081",
  headers: {
    Accept: "application/json"
  }
});

export function getPlanets () {
    return api.get("/planets");
}
