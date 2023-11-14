import styled, { keyframes } from "styled-components";
import arrowImg from "./img/downArrow.png"
import backgroundImg from "./img/bgimg.jpg"

const circle = keyframes`
    0%{
        margin-top: 240px;
    }
    100% 
    {
        margin-top: 220px;
    }
`

export const MainText = styled.div`
    height: 800px;
    background-image: url(${backgroundImg});
    
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 0;

`

export const TextGather = styled.div`
    margin: 0 auto;
    height: 175px;
    width: 1200px;
    padding:175px;
    white-space: pre-wrap;
    background-color: rgba(0,0,0,0.4);
    
`
export const BigTitle = styled.h1`
    color:white;
    font-weight: bold;
    text-align: center;
    font-size: 45px;
    padding-bottom: 10px;
`
export const SmallTitle = styled.h2`
    color:white;
    font-weight: lighter;
    text-align: center;
    padding-bottom: 10px;
`
export const SendButton = styled.button`
    /* width: 130px; */
    height: 50px;
    text-align: center;
    margin: 0 auto;
    display: block;
    padding: 10px;
    border: 0;
    border-radius: 999px;
    font-weight: bold;
    font-size: 20px;
`

export const Img_Arrow = styled.div`
    width: 40px;    
    height: 50px;    
    /* display: block; */
    position: relative;
    left: calc(50% - 20px);
    background-image: url(${arrowImg});
    background-size: cover;
    background-position: center center;
    animation: 0.5s ease 0.5s infinite alternate none running ${circle};
    margin-top:240px ;
    z-index: 0;
`
