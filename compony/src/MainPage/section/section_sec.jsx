import styled from "styled-components";

export const Background = styled.div`
    width: 1920px;
    padding: 150px 0;
    height: fit-content;
    background-color: black;  
    grid-template-columns: 1fr 1fr 1fr;
    gap: 50px 30px;
    justify-content: space-around;
    display: grid;
    z-index: 0;
`


export const Components = styled.div`
    width: 100%;
    height: 100%;
    /* background-color: blue; */
    padding-bottom: 20px;
    
`
export const ImgTitle = styled.img`
    width: 100%;
    height: 400px;
    background-color: black;
    //사진넣을땐 해제
    background-repeat: no-repeat;
` 
export const BigTitle = styled.h1`
    font-weight: bold;
    font-size:30px;
    padding: 10px 0;
    color: white;
`
export const SmallTitle = styled.h2`
    font-weight: 300;
    font-size:25px;
    color: white;
`