import React,{memo}from 'react'
import { 
    ListWrapper,
    ListItem,
    List,
    Title
  } from './style';
import { getCount } from "../../api/utils";
import LazyLoad from "react-lazyload"
function RecommendList({recommendList}) {
    return (
        <div>
            <Title>推荐歌单</Title>
            <ListWrapper>
                {
                    recommendList.map((item,index)=>{
                        return (
                            <ListItem key={item.id + index}>
                                <div className="img_wrapper">
                                    <div className="decorate"></div>
                                    {/* 加此参数可以减小请求的图片资源大小 */}
                                    <LazyLoad placeholder={<img width="100%" height="100%" src={require("./music.png").default} alt="music"/>}>
                                        <img src={item.picUrl + "?param=300x300"} width="100%" height="100%" alt="music"/>
                                    </LazyLoad>
                                    <div className="play_count">
                                    <i className="iconfont play">&#xe885;</i>
                                    <span className="count">{getCount (item.playCount)}</span>
                                    </div>
                                </div>
                                <div className="desc">{item.name}</div>
                            </ListItem>
                        )
                    })
                }
            </ListWrapper>
        </div>
    )
}
export default memo(RecommendList)
