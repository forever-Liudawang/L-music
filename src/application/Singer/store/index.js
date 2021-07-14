import { fromJS } from 'immutable';
import {getSingerInfoRequest} from "../../../api/request"
const defaultState = fromJS({
  artist: {},
  songsOfArtist: [],
  loading: true
});

//constants.js
export const CHANGE_ARTIST = 'singer/CHANGE_ARTIST';
export const CHANGE_SONGS_OF_ARTIST = 'singer/CHANGE_SONGS_OF_ARTIST';
export const CHANGE_ENTER_LOADING = 'singer/CHNAGE_ENTER_LOADING';


const changeArtist = (data) => ({
    type: CHANGE_ARTIST,
    data: fromJS(data)
  });
  
  const changeSongs = (data) => ({
    type: CHANGE_SONGS_OF_ARTIST,
    data: fromJS(data)
  })
  export const changeEnterLoading = (data) => ({
    type: CHANGE_ENTER_LOADING,
    data
  })
  
  export const getSingerInfo = (id) => {
    return dispatch => {
      getSingerInfoRequest(id).then(data => {
        dispatch(changeArtist(data.artist));
        dispatch(changeSongs(data.hotSongs));
        dispatch(changeEnterLoading(false));
      })
    }
  }

//reducer.js
export const reducer = (state = defaultState, action) => {
    switch (action.type) {
      case CHANGE_ARTIST:
        return state.set('artist', action.data);
      case CHANGE_SONGS_OF_ARTIST:
        return state.set('songsOfArtist', action.data);
      case CHANGE_ENTER_LOADING:
        return state.set('loading', action.data);
      default:
        return state;
    }
  }