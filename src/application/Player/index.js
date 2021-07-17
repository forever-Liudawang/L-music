import React,{useEffect,memo} from 'react'
import {useSelector,useDispatch} from "react-redux"
import toJs from "../../util/dataToJs"
import MiniPlayer from "./MiniPlayer/MiniPlayer"
import FullPlayer from "./FullPlayer/index"
import {changeFullScreen} from "./store/action"
function Player() {
    const dispatch = useDispatch()
    const fullScreen = toJs(useSelector(state=>state.getIn(["player","fullScreen"])))
    const playing = toJs(useSelector(state=>state.getIn(["player","playing"])))
    const sequencePlayList = toJs(useSelector(state=>state.getIn(["player","sequencePlayList"])))
    const playList = toJs(useSelector(state=>state.getIn(["player","playList"])))
    const mode = toJs(useSelector(state=>state.getIn(["player","mode"])))
    const currentIndex = toJs(useSelector(state=>state.getIn(["player","currentIndex"])))
    const showPlayList = toJs(useSelector(state=>state.getIn(["player","showPlayList"])))
    //const currentSong = toJs(useSelector(state=>state.getIn(["player","currentSong"])))
    const toggleFullScreen = ()=>{
        dispatch(changeFullScreen())
    }
    useEffect(() => {
        
    },[])
    const currentSong = {
        al: { picUrl: "https://p1.music.126.net/JL_id1CFwNJpzgrXwemh4Q==/109951164172892390.jpg" },
        name: "木偶人",
        ar: [{name: "薛之谦"}]
    }
    return(
        <div>
            <MiniPlayer song={currentSong}/>
            <FullPlayer song={currentSong} toggleFullScreen={toggleFullScreen}/>
        </div>
    )
}
export default memo(Player)
