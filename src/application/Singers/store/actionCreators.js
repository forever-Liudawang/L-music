import {
    CHANGE_SINGER_LIST,
    CHANGE_CATOGORY,
    CHANGE_ALPHA,
    CHANGE_PAGE_COUNT,
    CHANGE_PULLUP_LOADING,
    CHANGE_PULLDOWN_LOADING,
    CHANGE_ENTER_LOADING
} from './constants';
import {
    fromJS
} from 'immutable'; // 将 JS 对象转换成 immutable 对象
import {
    getHotSingerListRequest,
    getSingerListRequest
} from "../../../api/request"


const changeSingerList = (data) => ({
    type: CHANGE_SINGER_LIST,
    data: fromJS(data)
});

//页数
export const changePageCount = (data) => ({
    type: CHANGE_PAGE_COUNT,
    data
});

//进场loading
export const changeEnterLoading = (data) => ({
    type: CHANGE_ENTER_LOADING,
    data
});

//滑动最底部loading
export const changePullUpLoading = (data) => ({
    type: CHANGE_PULLUP_LOADING,
    data
});

//顶部下拉刷新loading
export const changePullDownLoading = (data) => ({
    type: CHANGE_PULLDOWN_LOADING,
    data
});

//第一次加载热门歌手
export const getHotSingerList = () => {
    return (dispatch) => {
        getHotSingerListRequest(0).then(res => {
            const data = res.artists;
            dispatch(changeSingerList(data));
            dispatch(changeEnterLoading(false));
            dispatch(changePullDownLoading(false));
        }).catch(() => {
            console.log('热门歌手数据获取失败');
        })
    }
};

//加载更多热门歌手
export const refreshMoreHotSingerList = () => {
    return (dispatch, getState) => {
        const pageCount = getState().getIn(['singer', 'pageCount']);
        const singerList = getState().getIn(['singer', 'singerList']).toJS();
        getHotSingerListRequest(pageCount).then(res => {
            const data = [...singerList, ...res.artists];
            dispatch(changeSingerList(data));
            dispatch(changePullUpLoading(false));
        }).catch(() => {
            console.log('热门歌手数据获取失败');
        });
    }
};

//第一次加载对应类别的歌手
export const getSingerList = (type,alpha,area) => {
    return (dispatch, getState) => {
        getSingerListRequest(type,alpha,area,0).then(res => {
            const data = res.artists;
            dispatch(changeSingerList(data));
            dispatch(changeEnterLoading(false));
            dispatch(changePullDownLoading(false));
        }).catch(() => {
            console.log('歌手数据获取失败');
        });
    }
};

//加载更多歌手
export const getMoreSingerList = (type,alpha,area) => {
    return (dispatch, getState) => {
        const pageCount = getState().getIn(['singer', 'pageCount']);
        const singerList = getState().getIn(['singer', 'singerList']).toJS();
        console.log(pageCount,"pageCount===>>>")
        getSingerListRequest(type,alpha,area, pageCount*10).then(res => {
            const data = [...singerList, ...res.artists];
            dispatch(changeSingerList(data));
            dispatch(changePullUpLoading(false));
        }).catch(() => {
            console.log('歌手数据获取失败');
        });
    }
};