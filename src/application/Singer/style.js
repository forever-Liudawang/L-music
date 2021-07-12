import styled from "styled-components"
import style from '../../assets/global-style';

export const Container = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 1000;
    background: ${style["background-color"]};
    transform-origin: right bottom;
`