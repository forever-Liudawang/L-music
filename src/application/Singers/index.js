import React,{useState,useEffect, memo,useContext} from 'react'
import Horizen from "../../baseUI/Horizen"
import {NavContainer,ListContainer,EnterLoading,SingerWraper} from "./style"
import SingerList from "./SingerList"
import Scroll from '../../baseUI/scroll';
import toJs from "../../util/dataToJs"
import {useDispatch,useSelector} from "react-redux"
import  {forceCheck} from 'react-lazyload';
import {getHotSingerList,
      refreshMoreHotSingerList,
      changePageCount,
      changeEnterLoading,
      getSingerList,
      getSingerListRequest,
      getMoreSingerList,
      changePullUpLoading} from "./store/actionCreators"
import Loading from '../../baseUI/loading2/index';
import {CategoryDataContext,CHANGE_ALPHA,CHANGE_AREA,CHANGE_CATEGORY} from "./data"
import renderRouters from '../../util/renderRouter'
// 歌手种类
export const categoryTypes = [
  {
    name: "全部",
    key: "-1"
  },
  {
    name: "男歌手",
    key: "1"
  },
  {
    name: "女歌手",
    key: "2"
  },
  {
    name: "乐队",
    key: "3"
  },
  
];
const singerArea = [
  {
    name:"全部",
    key:-1
  },
  {
    name:"华语",
    key:7
  },
  {
    name:"欧美",
    key:96
  },
  {
    name:"日本",
    key:8
  },
  {
    name:"韩国",
    key:16
  },
  {
    name:"其他",
    key:0
  }
]
  // 歌手首字母
export const alphaTypes = [{
    key: "A",
    name: "A"
},
{
    key: "B",
    name: "B"
},
{
    key: "C",
    name: "C"
},
{
    key: "D",
    name: "D"
},
{
    key: "E",
    name: "E"
},
{
    key: "F",
    name: "F"
},
{
    key: "G",
    name: "G"
},
{
    key: "H",
    name: "H"
},
{
    key: "I",
    name: "I"
},
{
    key: "J",
    name: "J"
},
{
    key: "K",
    name: "K"
},
{
    key: "L",
    name: "L"
},
{
    key: "M",
    name: "M"
},
{
    key: "N",
    name: "N"
},
{
    key: "O",
    name: "O"
},
{
    key: "P",
    name: "P"
},
{
    key: "Q",
    name: "Q"
},
{
    key: "R",
    name: "R"
},
{
    key: "S",
    name: "S"
},
{
    key: "T",
    name: "T"
},
{
    key: "U",
    name: "U"
},
{
    key: "V",
    name: "V"
},
{
    key: "W",
    name: "W"
},
{
    key: "X",
    name: "X"
},
{
    key: "Y",
    name: "Y"
},
{
    key: "Z",
    name: "Z"
}
];

function Singers(props) {
    const singerList = toJs(useSelector(state=>{return state.getIn(["singer","singerList"])}))
    const pageCount = toJs(useSelector(state=>{return state.getIn(["singer","pageCount"])}))
    const enterLoading = toJs(useSelector(state=>{return state.getIn(["singer","enterLoading"])}))
    const pullUpLoading = toJs(useSelector(state=>{return state.getIn(["singer","pullUpLoading"])}))
    const pullDownLoading = toJs(useSelector(state=>{return state.getIn(["singer","pullDownLoading"])}))
    const {data,dispatch} = useContext(CategoryDataContext);
    const {category,alpha,area} = toJs(data);
    const dispatchI = useDispatch()
    /**
     * 上拉加载
     */
    const handlePullUp = ()=>{
      dispatchI(changePageCount(pageCount + 1))
      dispatchI(changePullUpLoading(true))
      if(category != -1 || alpha != '' || area != -1){
        dispatchI(getMoreSingerList(category,alpha,area))
      }else{
        dispatchI(refreshMoreHotSingerList())
      }
    }
    const handleGetSingerByCate = (category,area,alpha)=>{
        dispatchI(changeEnterLoading(true))
        dispatchI(getSingerList(category,area,alpha))
    }
    useEffect(() => {
        dispatchI(getHotSingerList())
    },[])

    let handleUpdateAlpha = (val) => {
        dispatch({type:CHANGE_ALPHA,data:val})
        handleGetSingerByCate(category,val,area)
    }
    let handleUpdateCatetory = (val) => {
        dispatch({type:CHANGE_CATEGORY,data:val})
        handleGetSingerByCate(val,alpha,area)
    }
    const handleUpdateArea = (val)=>{
        dispatch({type:CHANGE_AREA,data:val})
        handleGetSingerByCate(category,alpha,val)
    }
    return (
      <SingerWraper>
        <div>
          <NavContainer>
              <Horizen list={categoryTypes} oldVal={category} title={"分类 (默认热门):"} handleClick={handleUpdateCatetory}></Horizen>
              <Horizen list={alphaTypes} oldVal={alpha} title={"首字母:"} handleClick={handleUpdateAlpha}></Horizen>
              <Horizen list={singerArea} oldVal={area} title={"地区:"} handleClick={handleUpdateArea}></Horizen>
          </NavContainer>
          <ListContainer>
            <Scroll pullUp={handlePullUp} onScroll={forceCheck}  pullUpLoading={pullUpLoading} PullDownLoading={pullDownLoading}>
              <SingerList singerList={singerList} routerProps={props}/>
            </Scroll>
          </ListContainer>
        </div>
        { enterLoading ? <EnterLoading><Loading></Loading></EnterLoading> : null}
        { renderRouters(props.routes)}
      </SingerWraper>
    )
}
export default  memo(Singers)
