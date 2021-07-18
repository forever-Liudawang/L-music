import React,{memo,useState,useRef,useEffect,useCallback}from 'react'
import {Container,TopDesc,Menu} from "./style"
import {CSSTransition} from "react-transition-group"
import Header from '../../baseUI/Header';
import Scroll from '../../baseUI/scroll';
import SongList from '../SongList';
import style from '../../assets/global-style';
import {getAlbumList} from "./store"
import {useDispatch,useSelector} from "react-redux"
import toJs from "../../util/dataToJs"
import Loading from '../../baseUI/loading2';
import {changeCurrentAlbum} from "./store"
import MusicNote from "../../baseUI/MusicNote"
function Album(props) {
    const [showStatus, setShowStatus] = useState (true);
    const [isMarquee, setIsMarquee] = useState(false)
    const currentAlbum = toJs(useSelector(state=>{return state.getIn(["album","currentAlbum"])}))
    const enterLoading = toJs(useSelector(state=>{return state.getIn(["album","enterLoading"])}))
    const {id} = props && props.match.params
    const headerEl = useRef();
    const musicNoteRef = useRef()
    const dispatch = useDispatch();
    const handleBack = useCallback(()=>{
      //onExited={props.history.goBack} 退出动画执行结束时跳转路由。
      setShowStatus(false)
    },[])
    const HEADER_HEIGHT = 45;
    const handleScroll = useCallback((pos)=>{
      let minScrollY = -HEADER_HEIGHT;
      let percent = Math.abs(pos.y/minScrollY);
      let headerDom = headerEl.current;
      // 滑过顶部的高度开始变化
      if (pos.y < minScrollY) {
          headerDom.style.backgroundColor = style["theme-color"];
          headerDom.style.opacity = Math.min(1, (percent-1)/2);
          setIsMarquee(true);
      } else {
          headerDom.style.backgroundColor = "";
          headerDom.style.opacity = 1;
          setIsMarquee(false);
      }
    })
    const musicAnimation = (x, y) => {
        musicNoteRef.current.startAnimation({ x, y });
    };
    useEffect(() => {
      dispatch(getAlbumList(id))
      return ()=>{
          dispatch(changeCurrentAlbum(null))
      }
    }, [])
    return (
        <CSSTransition
            in={showStatus}  
            timeout={300} 
            classNames="fly" 
            appear={true} 
            unmountOnExit
            onExited={props.history.goBack}
        >
            <Container>
              {
                currentAlbum && <>
                    <Header ref={headerEl} title={currentAlbum.name} handleClick={handleBack} isMarquee={isMarquee}/>
                    <Scroll bounceTop={false} onScroll={handleScroll}>
                        <div>
                            <TopDesc background={currentAlbum.coverImgUrl}>
                                <div className="background">
                                    <div className="filter"></div>
                                </div>
                                <div className="img_wrapper">
                                    <div className="decorate"></div>
                                    <img src={currentAlbum.coverImgUrl} alt=""/>
                                    <div className="play_count">
                                    <i className="iconfont play">&#xe885;</i>
                                    <span className="count">{Math.floor (currentAlbum.subscribedCount/1000)/10} 万 </span>
                                    </div>
                                </div>
                                <div className="desc_wrapper">
                                    <div className="title">{currentAlbum.name}</div>
                                    <div className="person">
                                    <div className="avatar">
                                        <img src={currentAlbum.creator.avatarUrl} alt=""/>
                                    </div>
                                    <div className="name">{currentAlbum.creator.nickname}</div>
                                    </div>
                                </div>
                            </TopDesc>
                            <Menu>
                                <div>
                                    <i className="iconfont">&#xe6ad;</i>
                                    评论
                                </div>
                                <div>
                                    <i className="iconfont">&#xe86f;</i>
                                    点赞
                                </div>
                                <div>
                                    <i className="iconfont">&#xe62d;</i>
                                    收藏
                                </div>
                                <div>
                                    <i className="iconfont">&#xe606;</i>
                                    更多
                                </div>
                            </Menu>
                            <SongList currentAlbum={currentAlbum} musicAnimation={musicAnimation}/>
                        </div>  
                    </Scroll>
                    <MusicNote ref={musicNoteRef}></MusicNote>
                </>
              }
              { enterLoading ? <Loading></Loading> : null}
            </Container>
        </CSSTransition>
    )
}
export default  memo(Album)
