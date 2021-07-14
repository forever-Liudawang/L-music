import styled from "styled-components"
import style from '../../assets/global-style';

export const Container = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: ${props => props.play > 0 ? "60px": 0};
    width: 100%;
    z-index: 100;
    overflow: hidden;
    background: #f2f3f4;
    transform-origin: right bottom;
    &.fly-enter, &.fly-appear {
        transform: rotateZ(30deg) translate3d(100%, 0, 0);
    }
    &.fly-enter-active, &.fly-appear-active {
        transition: transform .3s;
        transform: rotateZ(0deg) translate3d(0, 0, 0);
    }
    &.fly-exit {
        transform: rotateZ(0deg) translate3d(0, 0, 0);
    }
    &.fly-exit-active {
        transition: transform .3s;
        transform: rotateZ(30deg) translate3d(100%, 0, 0);
    }
`
export const ListContainer = styled.div`
  position: absolute;
  width: 100%;
  left: 0;
  top:44%;
  z-index:12;
`
export const ImgWrapper = styled.div`
  height: 45%;
  width: 100%;
  background: url(${props => props.bgUrl});
  background-size: cover;
  top: 40px;
  z-index:11;
  .filter {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    /* : blur(20px); */
    background: rgba(7, 17, 27, 0.3);
  }
`
export const Collection = styled.div`
  position: absolute;
  top:-55px;
  left: 50%;
  z-index:100;
  transform: translateX(-50%);
  height: 40px;
  line-height: 40px;
  width: 35%;
  background: rgb(212, 68, 57);
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  font-size: 14px;
`
export const MaskBox = styled.div`
  width: 100%;
  opacity: 0;
  background: #ccc;
  height: 40px;
  position: fixed;
  top: 0;
  z-index:120;
  /* display: none; */
`
