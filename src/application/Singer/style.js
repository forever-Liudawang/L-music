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
`
export const ImgWrapper = styled.div`
  min-height: 45%;
  width: 100%;
  background: url(${props => props.bgUrl});
  background-size: cover;
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
