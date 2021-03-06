import React ,{memo,useState,useRef,useEffect} from 'react'
import { CSSTransition } from "react-transition-group";
import {useDispatch,useSelector} from "react-redux"
import {Container,ImgWrapper,Collection,ListContainer,MaskBox} from "./style"
import Scroll from '../../baseUI/scroll';
import Header from '../../baseUI/Header';
import SongList from '../../components/SongList';
import toJs from '../../util/dataToJs';
import Loading from "../../baseUI/loading"
import { getSingerInfo } from "./store"
import MusicNote from "../../baseUI/MusicNote"
function Singer(props) {
    const {id} =props.match.params
    const [showStatus, setShowStatus] = useState(true);
    const artist = toJs(useSelector(state=>state.getIn(["singerInfo","artist"])))
    const loading = toJs(useSelector(state=>state.getIn(["singerInfo","loading"])))
    const songsOfArtist = toJs(useSelector(state=>state.getIn(["singerInfo","songsOfArtist"])))
    const dispatch = useDispatch()
    const headerRef = useRef()
    const imgRef = useRef()
    const maskRef = useRef()
    const collRef = useRef()
    const musicNoteRef = useRef()
    let imgHeight = null;
    let imgWidth = null;
    const imgDom = imgRef.current;
    const collDom = collRef.current;
    const handleScroll = (pos)=>{
      if(!imgHeight){
        imgHeight = Math.floor(getComputedStyle(imgDom,null).height.replace("px",""))
        imgWidth = Math.floor(getComputedStyle(imgDom,null).width.replace("px",""))
      }
      const  y = pos.y;
      const percent = Math.abs(y/imgHeight)
      if(y>0){
        imgDom.style.height = imgHeight + y + 'px'
        imgDom.style.imgWidth = imgHeight + y + 'px'
      }else{
        collDom.style["opacity"] = `${1 - percent * 2}`;
      }
      imgDom.style.height = imgHeight + pos.y +'px'
    }
    const handleBack = ()=>{
      setShowStatus(false)
    }
    const musicAnimation = (x, y) => {
      musicNoteRef.current.startAnimation({ x, y });
    };
    useEffect(() => {
      dispatch(getSingerInfo(id))
    }, [])
    return (
        <CSSTransition
            in={showStatus}
            timeout={300}
            classNames="fly"
            appear={true}
            unmountOnExit
            onExited={() => props.history.goBack()}
        >
          <>
            <Container>
              <Header ref={headerRef} handleClick={handleBack}/>
              <ImgWrapper bgUrl={artist.picUrl} ref={imgRef}>
                  <div className="filter"></div>
              </ImgWrapper>
                  <Scroll onScroll={handleScroll}>
                      <ListContainer>
                        <Collection ref={collRef}>
                          <i className="iconfont">&#xe62d;</i>
                            &nbsp;
                          <span className="text">??????</span>
                        </Collection>
                        <SongList hotSongs={songsOfArtist} musicAnimation={musicAnimation} />
                      </ListContainer>
                  </Scroll>
                  <MusicNote ref={musicNoteRef}></MusicNote>
            </Container>
            { loading ? (<Loading></Loading>) : null}
            </>
        </CSSTransition>
    )
}
export default  memo(Singer)
