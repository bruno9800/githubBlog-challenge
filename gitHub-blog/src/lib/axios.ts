import axios from 'axios'


export const api = axios.create({
  baseURL: 'https://api.github.com/users/bruno9800',
})