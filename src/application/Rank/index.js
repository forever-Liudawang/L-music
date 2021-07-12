import React,{useEffect, memo}from 'react'
import Scroll from "../../baseUI/scroll"
import {useDispatch,useSelector} from "react-redux"
import toJs from "../../util/dataToJs"
import Loading from "../../baseUI/loading"
import { getRankList } from "./store/index"
import {Container,SongList,List,ListItem} from "./style"
import renderRouters from '../../util/renderRouter'
import {withRouter} from "react-router-dom"
const RenderRankList = (props) => {
    const {rank,routerProps,global} = props
    const enterDetail = (detail) => {
      routerProps.history.push (`/rank/${detail.id}`)
    }
    return (
      <List globalRank={global}>
        {
          rank && rank.map ((item) => {
            return (
              <ListItem key={item.coverImgId} tracks={item.tracks} onClick={()=>enterDetail(item)}>
                <div className="img_wrapper">
                  <img src={item.coverImgUrl} alt=""/>
                  <div className="decorate"></div>
                  <span className="update_frequecy">{item.updateFrequency}</span>
                </div>
                {renderSongList(item.tracks)}
              </ListItem>
            )
          })
        } 
      </List>
    )
}
const renderSongList = (list=[]) => {
    return list.length ? (
      <SongList>
        {
          list.map ((item, index) => {
            return <li key={index}>{index+1}. {item.first} - {item.second}</li>
          })
        }
      </SongList>
    ) : null;
}
function Rank(props) {
    const {officialRank,globalRank} = toJs(useSelector(state=>state.getIn(["rank","rankList"])))
    const loading = toJs(useSelector(state=>state.getIn(["rank","loading"])))
    const dispatch = useDispatch()
    const getList = ()=>{
        dispatch(getRankList())
    }
    useEffect(() => {
        getList()
    },[])
    const displayStyle = loading ? {"display":"none"}:  {"display": ""};
    return (
        <Container>
            <Scroll>
              <div>
                  <h1 className="offical" style={displayStyle}> 官方榜 </h1>
                      {/* { renderRankList(officialRank) } */}
                      <RenderRankList rank={officialRank} routerProps={props}/>
                  <h1 className="global" style={displayStyle}> 全球榜 </h1>
                      {/* { renderRankList(globalRank, true) } */}
                      <RenderRankList rank={globalRank} routerProps={props} global={true}/>
                  { loading ? <Loading></Loading>: null }
              </div>
            </Scroll> 
            {renderRouters(props.routes)}
        </Container>
    )
}
export default  memo(Rank)
