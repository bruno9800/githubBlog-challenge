import axios from 'axios'


export const GITHUB_USER = 'bruno9800'
export const GITHUB_BLOG_REPO = 'githubBlog-challenge'

export const api = axios.create({
  baseURL: 'https://api.github.com',
})