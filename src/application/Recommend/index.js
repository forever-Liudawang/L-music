import React,{useEffect, memo}from 'react'
import Slider from "../../components/slider"
import RecommendList from "../../components/list"
import Scroll from "../../baseUI/scroll"
import {Content} from "./style"
import {useDispatch,useSelector} from "react-redux"
import {getBannerList,getRecommendList} from "./store/actionCreators"
import toJs from "../../util/dataToJs"
import {forceCheck} from "react-lazyload"
import Loading from "../../baseUI/loading"
function Recommend() {
    const bannerList = toJs(useSelector(state=>state.getIn(["recommend","bannerList"])))
    const recommendList = toJs(useSelector(state=>state.getIn(["recommend","recommendList"])))
    const enterLoading =useSelector(state=>state.getIn(["recommend","enterLoading"]))
    const dispatch = useDispatch()
    useEffect(() => {
        if(!bannerList.length){
            dispatch(getBannerList())
        }
        if(!recommendList.length){
            dispatch(getRecommendList())
        }
    },[])
    return (
            <Content>
                <Scroll className="list" onScroll={forceCheck} >
                    <div>
                        <Slider bannerList={bannerList}></Slider>
                        <RecommendList recommendList={recommendList}/>
                    </div>
                </Scroll>
                {enterLoading && <Loading/>}
            </Content>
    )
}
export default  memo(Recommend)
