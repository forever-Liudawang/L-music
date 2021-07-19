import React,{useCallback,useRef,useState} from 'react';
import { PlayListWrapper, ScrollWrapper,ListHeader,ListContent} from './style';
import { prefixStyle } from './../../../api/utils';
import {CSSTransition } from "react-transition-group";
import {useSelector,useDispatch} from "react-redux"
import toJs from "../../../util/dataToJs"
import Scroll from "../../../baseUI/scroll"
import { playMode } from '../../../api/config';
import {changeFullScreen,
    changePlayingState,
    changeCurrentIndex,
    changeCurrentSong,
    changeSequecePlayList,
    changePlayList,
    changeShowPlayList,
    deleteSong,
    changePlayMode} from "../store/action"
function PlayList (props) {
    const {handlePlayList} = props;
    const [isShow, setIsShow] = useState(false)
    const transform = prefixStyle("transform");
    const playListRef = useRef();
    const listWrapperRef = useRef();
    const playing = toJs(useSelector(state=>state.getIn(["player","playing"])))
    const sequencePlayList = toJs(useSelector(state=>state.getIn(["player","sequencePlayList"])))
    const playList = toJs(useSelector(state=>state.getIn(["player","playList"])))
    const mode = toJs(useSelector(state=>state.getIn(["player","mode"])))
    const currentIndex = toJs(useSelector(state=>state.getIn(["player","currentIndex"])))
    const showPlayList = toJs(useSelector(state=>state.getIn(["player","showPlayList"])))
    const currentSong = toJs(useSelector(state=>state.getIn(["player","currentSong"])))
    const dispatch = useDispatch()
    const onEnterCB = useCallback(() => {
        // 让列表显示
        setIsShow(true);
        // 最开始是隐藏在下面
        listWrapperRef.current.style[transform] = `translate3d(0, 100%, 0)`;
    }, [transform]);

    const onEnteringCB = useCallback(() => {
        // 让列表展现
        listWrapperRef.current.style["transition"] = "all 0.3s";
        listWrapperRef.current.style[transform] = `translate3d(0, 0, 0)`;
    }, [transform]);

    const onExitingCB = useCallback(() => {
        listWrapperRef.current.style["transition"] = "all 0.3s";
        listWrapperRef.current.style[transform] = `translate3d(0px, 100%, 0px)`;
    }, [transform]);

    const onExitedCB = useCallback(() => {
        setIsShow(false);
        listWrapperRef.current.style[transform] = `translate3d(0px, 100%, 0px)`;
    }, [transform]);

    const getCurrentIcon = (item) => {
        // 是不是当前正在播放的歌曲
        const current = currentSong.id === item.id;
        const className = current ? 'icon-play' : '';
        const content = current ? '&#xe6e3;': '';
        return (
          <i className={`current iconfont ${className}`} dangerouslySetInnerHTML={{__html:content}}></i>
        )
    };
    const getName = list => {
        let str = "";
        list.map((item, index) => {
          str += index === 0 ? item.name : "/" + item.name;
          return item;
        });
        return str;
    };
    const changeMode = (e) => {
        let newMode = (mode + 1) % 3;
        // 具体逻辑比较复杂 后面来实现
    };
    const getPlayMode = () => {
        let content, text;
        if (mode === playMode.sequence) {
            content = "&#xe625;";
            text = "顺序播放";
        } else if (mode === playMode.loop) {
            content = "&#xe653;";
            text = "单曲循环";
        } else {
            content = "&#xe61b;";
            text = "随机播放";
        }
        return (
            <div>
            <i className="iconfont" onClick={(e) => changeMode(e)}  dangerouslySetInnerHTML={{__html: content}}></i>
            <span className="text" onClick={(e) => changeMode(e)}>{text}</span>
            </div>
        )
    };
    //切换歌曲
    const handleChangeSong = (e,index)=>{
        e.stopPropagation();
        dispatch(changeCurrentIndex(index))
    }
    //从播放列表中删除歌曲
    const handleDeleteSong = (e,item)=>{
        dispatch(deleteSong(item))
    }
  return (
    <CSSTransition 
      in={showPlayList} 
      timeout={300} 
      classNames="list-fade"
      onEnter={onEnterCB}
      onEntering={onEnteringCB}
      onExiting={onExitingCB}
      onExited={onExitedCB}
    >
      <PlayListWrapper 
        ref={playListRef} 
        style={isShow === true ? { display: "block" } : { display: "none" }} 
        onClick={() => handlePlayList(false)}
      >
        <div className="list_wrapper" ref={listWrapperRef} >
            <ListHeader>
            <h1 className="title">
                { getPlayMode() }
                <span className="iconfont clear" onClick={()=>{}}>&#xe63d;</span>
            </h1>
            </ListHeader>
            <ScrollWrapper>
                <Scroll>
                    <ListContent>
                        {
                            playList.map((item, index) => {
                                return (
                                    <li className="item" key={item.id} onClick={(e)=>handleChangeSong(e,index)}>
                                        {getCurrentIcon(item)}
                                        <span className="text">{item.name} - {getName(item.ar)}</span>
                                        <span className="like">
                                            <i className="iconfont">&#xe601;</i>
                                        </span>
                                        <span className="delete" onClick={(e)=>handleDeleteSong(e,item)}>
                                            <i className="iconfont">&#xe63d;</i>
                                        </span>
                                    </li>
                                )
                            })
                        }
                    </ListContent>
                </Scroll>
            </ScrollWrapper>
        </div>
      </PlayListWrapper>
    </CSSTransition>
  )
}
export default PlayList;