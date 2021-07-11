import {axiosInstance} from "./config"

//轮播图
export const getBannerRequest = () => {
    return axiosInstance.get ('/banner');
}
  
//推荐列表
export const getRecommendListRequest = () => {
    return axiosInstance.get ('/personalized');
}
//热门歌手
export const getHotSingerListRequest = (count) => {
    return axiosInstance.get(`/top/artists?offset=${count}`);
}
//获取歌手列表
export const getSingerListRequest= (type,alpha,area,offset) => {
    console.log(type,alpha,area,offset)
    return axiosInstance.get(`/artist/list?type=${type}&area=${area}&initial=${alpha?alpha.toLowerCase():""}&offset=${offset}`);
}

//排行榜
export const getRankListRequest = () => {
    return axiosInstance.get (`/toplist/detail`);
};