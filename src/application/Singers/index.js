import React,{useState,useEffect, memo} from 'react'
import Horizen from "../../baseUI/Horizen"
import {NavContainer,ListContainer,EnterLoading} from "./style"
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


function Singers() {
    let [category, setCategory] = useState(-1);
    let [alpha, setAlpha] = useState('');
    const [area, setArea] = useState(-1)
    const singerList = toJs(useSelector(state=>{return state.getIn(["singer","singerList"])}))
    const pageCount = toJs(useSelector(state=>{return state.getIn(["singer","pageCount"])}))
    const enterLoading = toJs(useSelector(state=>{return state.getIn(["singer","enterLoading"])}))
    const pullUpLoading = toJs(useSelector(state=>{return state.getIn(["singer","pullUpLoading"])}))
    const pullDownLoading = toJs(useSelector(state=>{return state.getIn(["singer","pullDownLoading"])}))
    const dispatch = useDispatch()
    /**
     * 上拉加载
     */
    const handlePullUp = ()=>{
      dispatch(changePageCount(pageCount + 1))
      dispatch(changePullUpLoading(true))
      if(category != -1 || alpha != '' || area != -1){
        dispatch(getMoreSingerList(category,alpha,area))
      }else{
        dispatch(refreshMoreHotSingerList())
      }
    }
    const handleGetSingerByCate = (category,area,alpha)=>{
        dispatch(changeEnterLoading(true))
        dispatch(getSingerList(category,area,alpha))
    }
    useEffect(() => {
        dispatch(getHotSingerList())
    },[])

    let handleUpdateAlpha = (val) => {
        setAlpha (val);
        handleGetSingerByCate(category,val,area)
    }
    let handleUpdateCatetory = (val) => {
        setCategory (val);
        handleGetSingerByCate(val,alpha,area)
    }
    const handleUpdateArea = (val)=>{
        setArea(val)
        handleGetSingerByCate(category,alpha,val)
    }
    return (
      <>
        <NavContainer>
            <Horizen list={categoryTypes} oldVal={category} title={"分类 (默认热门):"} handleClick={handleUpdateCatetory}></Horizen>
            <Horizen list={alphaTypes} oldVal={alpha} title={"首字母:"} handleClick={handleUpdateAlpha}></Horizen>
            <Horizen list={singerArea} oldVal={area} title={"地区:"} handleClick={handleUpdateArea}></Horizen>
        </NavContainer>
        <ListContainer>
          <Scroll pullUp={handlePullUp} onScroll={forceCheck}  pullUpLoading={pullUpLoading} PullDownLoading={pullDownLoading}>
            <SingerList singerList={singerList}/>
          </Scroll>
        </ListContainer>
        { enterLoading ? <EnterLoading><Loading></Loading></EnterLoading> : null}
      </>
    )
}
export default  memo(Singers)
