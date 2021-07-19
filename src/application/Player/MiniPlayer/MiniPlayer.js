import react,{memo,useRef} from "react"
import { useSelector,useDispatch} from "react-redux"
import { MiniPlayerContainer } from './style';
import { CSSTransition } from "react-transition-group";
import {changeFullScreen} from "../store/action"
import toJs from "../../../util/dataToJs"
import ProcessCircle from "../../../baseUI/ProcessCircle/ProcessCircle"
import ProcessBar from "../../../baseUI/ProcessBar/ProcessBar"
// 处理歌手列表拼接歌手名字
const getName = list => {
    let str = "";
    list.map ((item, index) => {
      str += index === 0 ? item.name : "/" + item.name;
      return item;
    });
    return str;
};
const MiniPlayer = (props)=>{
    const {song,fullScreen, playing, percent,handlePlaying,handlePlayList} = props;
    
    const miniPlayRef = useRef()
    const dispatch = useDispatch()
    const handleChangeFull = ()=>{
        dispatch(changeFullScreen(true))
    }
    const handleShowPlayList = (e)=>{
        handlePlayList(true)
        e.stopPropagation()
    }
    return (
        <CSSTransition
            in={!fullScreen} 
            timeout={400} 
            classNames="mini" 
            onEnter={() => {
                miniPlayRef.current.style.display = "flex";
            }}
            onExited={() => {
                miniPlayRef.current.style.display = "none";
            }}
        >
            <MiniPlayerContainer ref={miniPlayRef}>
                <div className="icon">
                    <div className="imgWrapper" onClick={handleChangeFull}>
                        <img className={`play ${playing?"":"pause"}`} src={song.al.picUrl} width="40" height="40" alt="img"/>
                    </div>
                </div>
                <div className="text">
                    <h2 className="name">{song.name}</h2>
                    <p className="desc">{getName(song.ar)}</p>
                </div>
                <div className="control">
                    <ProcessCircle radius={32} percent={percent}>
                        { playing ? 
                            <i className="icon-mini iconfont icon-pause" onClick={e => handlePlaying(e, false)}>&#xe650;</i>
                            :
                            <i className="icon-mini iconfont icon-play" onClick={e => handlePlaying(e, true)}>&#xe61e;</i> 
                        }                    
                    </ProcessCircle>
                </div>
                <div className="control" onClick={handleShowPlayList}>
                    <i className="iconfont">&#xe640;</i>
                </div>
            </MiniPlayerContainer>
        </CSSTransition>
    )
}
export default memo(MiniPlayer)