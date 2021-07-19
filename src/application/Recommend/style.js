import styled from "styled-components"
export const Content = styled.div`
    position: fixed;
    top: 94px;
    left: 0;
    /* padding:0 10px; */
    bottom: ${props => props.songsCount > 0 ? "60px": 0};
    width: 100%;
`