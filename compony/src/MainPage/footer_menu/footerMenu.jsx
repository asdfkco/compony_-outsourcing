import styled from "styled-components";
import arrowImg from "./downArrow.png";
import Menu from "./menu.png";

export const SemiHeader = styled.div`

  /* background-color: white; */
  width: 90%;  
  height: 80px;
  
  position: fixed;
  z-index: 999;
  bottom: 20px;
  display: flex;
  justify-content: space-between;
  padding: 0 5%;
  
`
export const MenuImg = styled.div`
    
    
    z-index: 999;
    cursor: pointer;
    background-color: black;
    border-radius: 40px;
    background-size: 30px 30px;
    background-repeat: no-repeat;
    width: 45px;
    height: 45px;
    background-image: url(${Menu});
    /* background-size: cover; */
    background-position: center center;
    
`
export const Logo = styled.div`
    
`
export const UpBtn = styled.button`
    position: fixed;
    background-color: black;
    border-radius: 30px;
    bottom: 10px;
    right: 10px;
    width: 55px;
    height: 55px;
    transform: rotate(180deg); 
    background-image: url(${arrowImg});
    background-position: center center;
    background-repeat: no-repeat;
    background-size: 30px 30px;
    border: 0;
    z-index: 999;

`
export const Atag = styled.a`
    position: fixed;
    bottom: 10px;
    right: 10px;
    width: 50px;
    height: 50px;
`