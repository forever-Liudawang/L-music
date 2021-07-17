import axios from "axios"

export const baseUrl = "http://192.168.1.90:3002"
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
  
// 播放模式
export const playMode = {
  sequence: 0,
  loop: 1,
  random: 2
};

export {
    axiosInstance
};