import axios from "axios"

export const instance = axios.create({
  baseURL: "https://social-network.samuraijs.com/api/1.1/",
  withCredentials: true,
  headers: {
    "API-KEY": "48a19545-bfe2-4577-b60c-be93a4f04014",
  },
})
