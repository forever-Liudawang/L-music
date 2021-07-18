import React,{useEffect,memo,useRef,useState} from 'react'
import {useSelector,useDispatch} from "react-redux"
import toJs from "../../util/dataToJs"
import MiniPlayer from "./MiniPlayer/MiniPlayer"
import FullPlayer from "./FullPlayer/index"
import {changeFullScreen,
    changePlayingState,
    changeCurrentIndex,
    changeCurrentSong,
    changeSequecePlayList,
    changePlayList,
    changePlayMode} from "./store/action"
import { getSongUrl,isEmptyObj,shuffle,findIndex} from "../../util/utilFunc"
import Toast from "./../../baseUI/Toast/index";
import { playMode } from '../../api/config';

const playList = [
    {
      ftype: 0,
      djId: 0,
      a: null,
      cd: '01',
      crbt: null,
      no: 1,
      st: 0,
      rt: '',
      cf: '',
      alia: [
        '手游《梦幻花园》苏州园林版推广曲'
      ],
      rtUrls: [],
      fee: 0,
      s_id: 0,
      copyright: 0,
      h: {
        br: 320000,
        fid: 0,
        size: 9400365,
        vd: -45814
      },
      mv: 0,
      al: {
        id: 84991301,
        name: '拾梦纪',
        picUrl: 'http://p1.music.126.net/M19SOoRMkcHmJvmGflXjXQ==/109951164627180052.jpg',
        tns: [],
        pic_str: '109951164627180052',
        pic: 109951164627180050
      },
      name: '拾梦纪',
      l: {
        br: 128000,
        fid: 0,
        size: 3760173,
        vd: -41672
      },
      rtype: 0,
      m: {
        br: 192000,
        fid: 0,
        size: 5640237,
        vd: -43277
      },
      cp: 1416668,
      mark: 0,
      rtUrl: null,
      mst: 9,
      dt: 234947,
      ar: [
        {
          id: 12084589,
          name: '妖扬',
          tns: [],
          alias: []
        },
        {
          id: 12578371,
          name: '金天',
          tns: [],
          alias: []
        }
      ],
      pop: 5,
      pst: 0,
      t: 0,
      v: 3,
      id: 1416767593,
      publishTime: 0,
      rurl: null
    }
];
function Player() {
    const dispatch = useDispatch()
    const audioRef = useRef()
    const toastRef = useRef()
    const [modeText, setModeText] = useState("")
    const [prevSong, setPrevSong] = useState({})
    const [songLoad, setSongLoad] = useState(true)
    const fullScreen = toJs(useSelector(state=>state.getIn(["player","fullScreen"])))
    const playing = toJs(useSelector(state=>state.getIn(["player","playing"])))
    const sequencePlayList = toJs(useSelector(state=>state.getIn(["player","sequencePlayList"])))
    const playList = toJs(useSelector(state=>state.getIn(["player","playList"])))
    const mode = toJs(useSelector(state=>state.getIn(["player","mode"])))
    const currentIndex = toJs(useSelector(state=>state.getIn(["player","currentIndex"])))
    const showPlayList = toJs(useSelector(state=>state.getIn(["player","showPlayList"])))
    const currentSong = toJs(useSelector(state=>state.getIn(["player","currentSong"])))

    //目前播放时间
    const [currentTime, setCurrentTime] = useState(0);
    //歌曲总时长
    const [duration, setDuration] = useState(0);
    //歌曲播放进度
    let percent = isNaN(currentTime / duration) ? 0 : currentTime / duration;
    const toggleFullScreen = ()=>{
        dispatch(changeFullScreen())
    }
    const handlePlaying = (e,isPlaying)=>{
        e.stopPropagation();
        audioRef.current.play();
        if(!isPlaying){
            audioRef.current.pause();
        }
        dispatch(changePlayingState(isPlaying))
    }
    //歌曲播放时更新进度
    const updateTime = e => {
        setCurrentTime(e.target.currentTime);
    };
    //全屏播放改变进度
    const handleProgressChange = percent =>{
        console.log(percent)
        const newTime = percent*duration;
        setCurrentTime(newTime)
        audioRef.current.currentTime = newTime;
        if(!playing){
            dispatch(changePlayingState(true))
        }
    }
    const handlePlaySong = ()=>{
        if (
            !playList.length ||
            currentIndex === -1 ||
            !playList[currentIndex] ||
            playList[currentIndex].id === prevSong.id ||
            !songLoad
          )return;
        const current = playList[currentIndex]
        console.log(current,"current===>>>")
        dispatch(changeCurrentSong(current))
        setPrevSong(current)
        audioRef.current.src = getSongUrl(current.id)
        setTimeout(()=>{
            audioRef.current.play().then(()=>{
                setSongLoad(true)
            })
        })
        dispatch(changePlayingState(true))
        setCurrentTime(0)
        setDuration((current.dt / 1000) | 0)
    }
    //单曲循环
    const handleLoop =  ()=>{
        audioRef.current.currentTime = 0;
        audioRef.current.play()
        dispatch(changePlayingState(true))
    }
    //上一首歌
    const handlePrev = ()=>{
        if(playList.length==1){
            handleLoop()
            return
        }
        let index= currentIndex -1;
        if(index<0) index=playList.length-1
        if(!playing)dispatch(changePlayingState(true))
        dispatch(changeCurrentIndex(index))
    }
    //下一首歌
    const handleNext = ()=>{
        if(playList.length==1){
            handleLoop()
            return
        }
        let index= currentIndex + 1;
        if(index>playList.length-1)index = 0;
        if(!playing)dispatch(changePlayingState(true))
        dispatch(changeCurrentIndex(index))
    }
    //改变播放模式
    const changeMode = ()=>{
        //顺序模式
        let newMode = (mode + 1) % 3;
        if(newMode==0){
            dispatch(changePlayList(sequencePlayList))
            const index = findIndex(currentSong,sequencePlayList)
            dispatch(changeCurrentIndex(index))
            setModeText("顺序循环");
        }else if(newMode == 1){
            //单曲循环
            dispatch(changePlayList(sequencePlayList))
            setModeText("单曲循环");
        }else{
            //随机播放
            const newList = shuffle(sequencePlayList)
            const index = findIndex(currentSong,sequencePlayList)
            dispatch(changePlayList(newList))
            dispatch(changeCurrentIndex(index))
            setModeText("随机播放");
        }
        dispatch(changePlayMode(newMode))
        toastRef.current.show();
    }
    //歌曲播放完毕
    const handlePlayEnd = ()=>{
        if (mode === playMode.loop) {
            handleLoop();
        } else {
            handleNext();
        }
    }
    useEffect(() => {
        handlePlaySong()
    },[playList,currentIndex])
    return(
        <div>
            {
                !isEmptyObj(currentSong) 
                && 
                <MiniPlayer 
                    song={currentSong}
                    playing={playing}
                    fullScreen={fullScreen}
                    handlePlaying={handlePlaying}
                    percent={percent}
                />
            }
            {
                !isEmptyObj(currentSong)
                &&
                <FullPlayer 
                    song={currentSong} 
                    toggleFullScreen={toggleFullScreen}
                    fullScreen={fullScreen}
                    playing={playing}
                    handlePlaying={handlePlaying}
                    duration={duration}
                    currentTime={currentTime}
                    percent={percent}
                    handleProgressChange={handleProgressChange}
                    handlePrev={handlePrev}
                    handleNext={handleNext}
                    changeMode={changeMode}
                    mode={mode}
                />
            }
            <audio 
                ref={audioRef}
                onTimeUpdate={updateTime}
                onEnded={handlePlayEnd}
            >
            </audio>
            <Toast text={modeText} ref={toastRef}></Toast>
        </div>
    )
}
export default memo(Player)
