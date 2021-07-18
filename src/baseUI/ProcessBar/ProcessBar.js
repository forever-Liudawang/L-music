//baseUI/progressBar/index.js
import React, {useEffect, useRef, useState,memo} from 'react';
import style from '../../assets/global-style';
import { prefixStyle } from '../../api/utils';
import styled from "styled-components";
const ProgressBarWrapper = styled.div`
   height: 30px;
  .bar-inner {
    position: relative;
    top: 13px;
    height: 4px;
    background: rgba(0, 0, 0, .3);
    .progress {
      position: absolute;
      height: 100%;
      background: ${style["theme-color"]};
    }
    .progress-btn-wrapper {
      position: absolute;
      left: -15px;
      top: -13px;
      width: 30px;
      height: 30px;
      .progress-btn {
        position: relative;
        top: 7px;
        left: 12px;
        box-sizing: border-box;
        width: 16px;
        height: 16px;
        border: 3px solid ${style["border-color"]};
        border-radius: 50%;
        background: ${style["theme-color"]};
      }
    }
  }
`

const progressBtnWidth = 16;
function ProcessBar(props) {
  const progressBar = useRef()
  const progress = useRef()
  const progressBtn = useRef()
  const { percentChange,percent } = props
  const [touch,setTouch] = useState({
    init:false,
    startX:0,
    progressLeft:0
  })
  const _setOffsetLeft = (offsetLeft)=>{
    progressBtn.current.style.transform=`translateX(${offsetLeft}px)`
    progress.current.style.width = `${offsetLeft}px`
  }
  const _changePercent = ()=>{
    const barWidth = progressBar.current.clientWidth - progressBtnWidth;
    const percent = progress.current.clientWidth/barWidth
    percentChange(percent)
  }
  const handleTouchStart = (e)=>{
    const startTouch = {}
    startTouch.init = true;
    startTouch.startX = e.touches[0].pageX;
    startTouch.progressLeft = progress.current.clientWidth;
    setTouch(startTouch)
  }
  const handleTouchMove = (e)=>{
    const distance = e.touches[0].pageX - touch["startX"] + touch.progressLeft;
    _setOffsetLeft(distance)
  }
  const handleTouchEnd = (e)=>{
    _changePercent()
    setTouch({...touch,...{init:false}})
  }
  const handleClickProgress = (e)=>{
    //获取元素在页面中相对浏览器窗口的位置
    const rect = progressBar.current.getBoundingClientRect();
    const offsetLeft = e.pageX - rect.left
    setTouch({...touch,...{init:false}})
    _setOffsetLeft(offsetLeft)
    _changePercent()
  }
  useEffect(() => {
    if(percent>=0&&percent<=1&&!touch.init){
      const barWidth = progressBar.current.clientWidth - progressBtnWidth;
      const offsetWidth = barWidth*percent
      _setOffsetLeft(offsetWidth)
    }
  }, [percent])
  return (
      <ProgressBarWrapper>
          <div className="bar-inner" ref={progressBar} onClick={handleClickProgress}>
              <div className="progress" ref={progress}></div>
              <div className="progress-btn-wrapper"
                ref={progressBtn}
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
                >
                  <div className="progress-btn"></div>
              </div>
          </div>
      </ProgressBarWrapper>
  )
}
export default memo(ProcessBar)
