import React,{forwardRef,useState,useRef,useEffect,useImperativeHandle} from 'react'
import BScroll from "better-scroll";
import PropTypes from "prop-types"
import styled from "styled-components"
import Loading from "../../baseUI/loading2"
import LoadingV2 from "../../baseUI/loading"
const ScrollContainer = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
`

const PullUpLoading = styled.div`
  position: absolute;
  left:0; right:0;
  bottom: 5px;
  width: 60px;
  height: 60px;
  margin: auto;
  z-index: 100;
`

export const PullDownLoading = styled.div`
  position: absolute;
  left:0; right:0;
  top: 0px;
  height: 30px;
  margin: auto;
  z-index: 100;
`

const Scroll = forwardRef((props,ref)=>{
    const [bScroll, setbScroll] = useState(null)
    //current 指向初始化 bs 实例需要的 DOM 元素 
    const scrollContaninerRef = useRef ();
    const { direction, click, refresh, pullUpLoading, pullDownLoading, bounceTop, bounceBottom } = props;
    const { pullUp, pullDown, onScroll } = props;
    useEffect(() => {
        const scroll = new BScroll(scrollContaninerRef.current,{
            scrollX:direction === "horizental",
            scrollY: direction === "vertical",
            probeType:3,
            click:click,
            bounce:{
                top:bounceTop,
                bottom:bounceBottom
            }
        })
        setbScroll(scroll)
    },[])
    //每次重新渲染都要刷新实例，防止无法滑动:
    useEffect(() => {
        if(refresh && bScroll){
            bScroll.refresh()
        }
    })
    //绑定事件
    useEffect(() => {
        if (!bScroll || !onScroll) return;
        bScroll.on("scroll",onScroll)
        return ()=>{
            bScroll.off("scroll",onScroll)
        }   
    }, [onScroll, bScroll])
    //上拉到底判断
    useEffect(() => {
        if (!bScroll || !pullUp) return;
        const handlePullUp = ()=>{
            if(bScroll.y<=bScroll.maxScrollY + 100){
                pullUp()
            }
        }
        bScroll.on("scrollEnd",handlePullUp)
        return () => {
            bScroll.off("scrollEnd",handlePullUp)
        }
    },[pullUp, bScroll])
    //下拉判断
    useEffect(() => {
        if (!bScroll || !pullDown) return;
        const handlePullDown = (pos) => {
            //判断用户的下拉动作
            if(pos.y > 50) {
                pullDown();
            }
        };
        bScroll.on("touchEnd",handlePullDown)
        return () => {
            bScroll.off("touchEnd",handlePullDown)
        }
    })

    //可以让你在使用 ref 时自定义暴露给父组件的实例值
    useImperativeHandle(ref, () => ({
        refresh() {
          if(bScroll) {
            bScroll.refresh();
            bScroll.scrollTo(0, 0);
          }
        },
        getBScroll() {
          if(bScroll) {
            return bScroll;
          }
        }
    }));
    const PullUpdisplayStyle = pullUpLoading ? {display: ""} : { display:"none" };
    const PullDowndisplayStyle = pullDownLoading ? { display: ""} : { display:"none" }; 
    return (
        <ScrollContainer ref={scrollContaninerRef}>
            {props.children}
            {/* 滑到底部加载动画 */}
            <PullUpLoading style={ PullUpdisplayStyle }><Loading></Loading></PullUpLoading>
            {/* 顶部下拉刷新动画 */}
            <PullDownLoading style={ PullDowndisplayStyle }><LoadingV2></LoadingV2></PullDownLoading>
        </ScrollContainer>
    )
})
//默认值
Scroll.defaultProps = {
    direction: "vertical",
    click: true,
    refresh: true,
    onScroll:null,
    pullUpLoading: false,
    pullDownLoading: false,
    pullUp: null,
    pullDown: null,
    bounceTop: true,
    bounceBottom: true
};
Scroll.propTypes = {
    direction: PropTypes.oneOf (['vertical', 'horizontal']),// 滚动的方向
    click: true,// 是否支持点击
    refresh: PropTypes.bool,// 是否刷新
    onScroll: PropTypes.func,// 滑动触发的回调函数
    pullUp: PropTypes.func,// 上拉加载逻辑
    pullDown: PropTypes.func,// 下拉加载逻辑
    pullUpLoading: PropTypes.bool,// 是否显示上拉 loading 动画
    pullDownLoading: PropTypes.bool,// 是否显示下拉 loading 动画
    bounceTop: PropTypes.bool,// 是否支持向上吸顶
    bounceBottom: PropTypes.bool // 是否支持向下吸底
}
export default Scroll;