import styled from "styled-components";
import exit from "./exit.png";

export const Menu = styled.div`

  background-color: white;
  width: 100vw;
  height: 100vh;
  position: fixed;
  z-index: 9999;
  visibility: hidden;
  opacity: 0;
  transition: opacity 1s;
`

export const CenterMenu = styled.div`
    display: flex;  
    align-items: center;
    justify-content: center;
    /* position: relative; */
    width: inherit;
    height: inherit;
`
export const Menudiv = styled.div`
    /* margin : auto; */
    width: 700px;
    height: 500px;
    background-color: white;
    
`

export const Coment = styled.div`
    height: 50%;
    width: 84%;
    background-color: white;
    display: grid;
    flex-direction: column;
    padding: 8%;
    grid-template-columns: 280px 280px;
`

export const SubMenu = styled.div`
    width:100%;
    height:30%;
    background-color: white;
    display: flex;
    /* align-items: center; */
    justify-content: center;
`

export const ComentText = styled.p`
    width: 280px;
    height: 90px;
    background-color: white;
    line-height: 90px;
    /* padding-left: 30px; */
    font-size: 35px;
    font-weight: bolder;
    
`

export const SubComent = styled.div`
    height: 60%;
    width: 90%;
    margin-top: 10px;
    background-color: white;
`
export const SubMenuCol = styled.div`
    height: 40%;
    width: 100%;
    background-color: white;
    display: flex;
`
export const SubComentText = styled.a`
    /* padding: 10px; */
    color: #737373;
    width: fit-content;
    margin-right: 30px;
    text-align: center;
    padding: 2.5%;
    font-size: 18px;
    &:hover{
        text-decoration: underline;

    }
`
export const SubMinComentText = styled.div`
    color: #737373;
    /* width: 20px; */
    height: 30px;
    /* padding: 2%; */
    font-size: 13px;
    float:right;
    text-align: center;
    line-height: 30px;
`
export const DownloadImg = styled.img`
    width: 20px;
    height: 20px;
    position: relative;
    margin: 5px;
    /* left : 10px;
    top: 10px; */
`
export const DownLoad = styled.a`

    position: relative;
    display: flex;
    flex-direction: row;
    width: 100px;
    align-items:center;
    top: 10px;
`

export const XImg = styled.div`
    cursor: pointer;
    border-radius: 40px;
    background-size: 45px 45px;
    background-repeat: no-repeat;
    width: 45px;
    height: 45px;
    background-image: url(${exit});
    /* background-size: cover; */
    background-position: center center;
    z-index: 9999;
    visibility: hidden;
    opacity: 0;
    transition: opacity 1s;
`

export const SemiHeader = styled.div`


  width: 90%;  
  height: 80px;
  transition: opacity 1s;
  position: fixed;
  z-index: 9999;
  bottom: 20px;
  display: flex;
  justify-content: space-between;
  padding: 0 5%;
  /* background: black; */
  `



// 메뉴 페이지가 열리지 않음
