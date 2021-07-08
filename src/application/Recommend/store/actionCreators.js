import * as actionType from "./constants"
import { fromJS } from 'immutable';// 将 JS 对象转换成 immutable 对象
import {getBannerRequest,getRecommendListRequest} from "../../../api/request"
export const changeBannerList = (data)=>({
    type:actionType.CHANGE_BANNER,
    data: fromJS(data)
})
export const changeRecommendList = (data)=>({
    type:actionType.CHANGE_RECOMMEND_LIST,
    data:fromJS(data)
})
export const changeLoadingState = (data)=>({
    type:actionType.CHANGE_ENTER_LOADING,
    data
})
export const getBannerList = ()=>{
    return dispatch=>{
        getBannerRequest().then(data=>{
            dispatch(changeBannerList(data.banners))
        })
        .catch(err=>{
            console.log("轮播图数据错误");
        })
    }
}
export const getRecommendList = ()=>{
    return dispatch=>{
        getRecommendListRequest().then(data=>{
            dispatch(changeRecommendList(data.result))
            dispatch(changeLoadingState(false))
        })
        .catch(err=>{
            console.log("推荐歌单数据错误");
        })
    }
}