import {axiosInstance} from "./config"

export const getBannerRequest = () => {
    return axiosInstance.get ('/banner');
}
  
export const getRecommendListRequest = () => {
    return axiosInstance.get ('/personalized');
}

export const getHotSingerListRequest = (count) => {
    return axiosInstance.get(`/top/artists?offset=${count}`);
}
export const getSingerListRequest= (type,alpha,area,offset) => {
    console.log(type,alpha,area,offset)
    return axiosInstance.get(`/artist/list?type=${type}&area=${area}&initial=${alpha?alpha.toLowerCase():""}&offset=${offset}`);
}