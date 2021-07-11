import {
    fromJS
} from 'immutable';
import {
    getRankListRequest
} from '../../../api/request';
import getCategoryList from "../getCategoryList"
//constants
export const CHANGE_RANK_LIST = 'home/rank/CHANGE_RANK_LIST';
export const CHANGE_LOADING = 'home/rank/CHANGE_LOADING';

const changeRankList = (data) => ({
    type: CHANGE_RANK_LIST,
    data: data
})

const changeLoading = (data) => ({
    type: CHANGE_LOADING,
    data
})
export const getRankList = () => {
    return dispatch => {
        getRankListRequest().then(data => {
            let res = data && data.list;
            const list = getCategoryList(res)
            dispatch(changeRankList(list));
            dispatch(changeLoading(false));
        })
    }
}
//reducer
const defaultState = fromJS ({
    rankList:{},
    loading: true
})

const reducer = (state = defaultState, action) => {
    switch (action.type) {
      case CHANGE_RANK_LIST:
        let newState = state.set('rankList',action.data);
        return newState;
      case CHANGE_LOADING:
        return state.set ('loading', action.data);
      default:
        return state;
    }
  }
  
export { reducer };