import axios from "axios"

export const baseUrl = "http://localhost:3002"
const axiosInstance = axios.create({
    baseURL:baseUrl
})
axiosInstance.interceptors.response.use (
    res => res.data,
    err => {
      console.log (err, "网络错误");
      Promise.reject(err)
    }
  );
  
export {
    axiosInstance
};