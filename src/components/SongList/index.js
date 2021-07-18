import React,{memo} from 'react'
import {useDispatch,useSelector} from "react-redux"
import {SongItem,SongList} from "./style"
import {changeFullScreen,
    changePlayingState,
    changeCurrentIndex,
    changeCurrentSong,
    changeSequecePlayList,
    changePlayList,
    changePlayMode} from "../../application/Player/store/action"
import toJs from "../../util/dataToJs"
// 处理歌手列表拼接歌手名字
const getName = list => {
    let str = "";
    list.map ((item, index) => {
      str += index === 0 ? item.name : "/" + item.name;
      return item;
    });
    return str;
};
const getCount = (num)=>{
    return Math.floor(num/10000) + "万"
}

function SongListBox(props) {
    const {currentAlbum,hotSongs,musicAnimation} = props
    const dispatch = useDispatch()
    const playList = toJs(useSelector(state=>state.getIn(["player","playList"])))
    //播放音乐
    const handleSelect = (e,index)=>{
        dispatch(changeCurrentIndex(index))
        dispatch(changePlayList(hotSongs?hotSongs:currentAlbum.tracks))
        dispatch(changeSequecePlayList(hotSongs?hotSongs:currentAlbum.tracks))
        musicAnimation(e.nativeEvent.clientX, e.nativeEvent.clientY)
    }
    return (
        <SongList showBackground={true}>
            <div className="first_line">
                <div className="play_all">
                <i className="iconfont">&#xe6e3;</i>
                <span > 播放全部 <span className="sum">(共 {hotSongs ? hotSongs.length: currentAlbum.tracks.length} 首)</span></span>
                </div>
                {
                    !hotSongs && <div className="add_list">
                                    <i className="iconfont">&#xe62d;</i>
                                    <span> 收藏 ({getCount(currentAlbum.subscribedCount)})</span>
                                </div>
                }
            </div>
            <SongItem>
                {
                    (hotSongs?hotSongs:currentAlbum.tracks).map((item, index) => {
                        return (
                        <li key={index} onClick={(e)=>handleSelect(e,index)}>
                            <span className="index">{index + 1}</span>
                            <div className="info">
                            <span>{item.name}</span>
                            <span>
                                { getName(item.ar) } - { item.al.name }
                            </span>
                            </div>
                        </li>
                        )
                    })
                }
            </SongItem>
        </SongList>
    )
}
export default  memo(SongListBox)
