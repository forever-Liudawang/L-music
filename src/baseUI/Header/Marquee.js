import React,{useEffect,useRef,useState} from 'react'
import styled from 'styled-components'
const Container = styled.div`
    /* position: absolute;
    width: 100%;
    padding-left: 20px;
    display: inline-block;
    height: 100%;
    .text{
        position: absolute;
        transform:${props=>`translateX(${props.width}px)`} ;
        transition: transform 100ms ;
        left:20;
        color:#fff;
    } */
    
    width: 100%;
    height: 35px;
    overflow: hidden;
    position: relative;
    white-space: nowrap;
    .text {
        position: absolute;
        animation: marquee 12s linear infinite;
        @keyframes marquee {
            from {
                left: 100%;
            }
            to {
                left: -100%
            }
        }
        @keyframes marquee {
            from {
                transform: translateX(100%);
            }
            to {
                transform: translateX(-100%);
            }
        }
    }
`
export default function Marquee(props) {
    const {title} =props
    return (
        <Container>
            <div className="text">
                {title}
            </div>
        </Container>
    )
}
