import React from "react";
import { CenterMenu, Coment, ComentText, DownLoad, DownloadImg, Menu, Menudiv, SemiHeader, SubComent, SubComentText, SubMenu, SubMenuCol, SubMinComentText, XImg } from "./subMain";
import file_Download from "./file_download.png";


export function SubMainApp() {


  return (
      <>
        <Menu id="subMenu">
            <CenterMenu>
                  <Menudiv>
                          <Coment>
                              <a href="http://localhost:3000">
                                  <ComentText>홈</ComentText>
                              </a>
                              <a href="/form">
                                  <ComentText>프로젝트 문의</ComentText>
                              </a>
                              <a href="https://small-chicory-1c9.notion.site/029a4ef2af7840e5b0644152b398a5d4">
                                  <ComentText>회사 소개</ComentText>
                              </a>
                              <a href="https://small-chicory-1c9.notion.site/c05715de7b9141a5b49fa8de7a9ff42b">
                                  <ComentText>제품 소개</ComentText>
                              </a>
                              <a href="https://small-chicory-1c9.notion.site/c05715de7b9141a5b49fa8de7a9ff42b">
                                  <ComentText>로보이 목표</ComentText>
                              </a>
                              <a href="https://small-chicory-1c9.notion.site/ddd96ab5a28a46a6b70ea0c1c9a4e39d">
                                  <ComentText>일하는 방식</ComentText>
                              </a>
                                  
                                  
                          </Coment>
                          <SubMenu>
                                  <SubComent>
                                    <SubMenuCol>
                                      <SubComentText href="https://small-chicory-1c9.notion.site/34afd417651548df982c86ebea11b346">NOTION</SubComentText>
                                      <SubComentText href="https://gray-aura-763.notion.site/aa001b61123841b08c9433c25d806236">MANAGEMENT SUPPORT TEAM</SubComentText>
                                      <SubComentText href="https://www.roboistore.com/">CHURO</SubComentText>
                                    </SubMenuCol>
                                    <SubMenuCol style={{display:"flex", justifyContent:"flex-end",height:"60%"}}>
                                      <DownLoad href="#">
                                        <DownloadImg src={file_Download}></DownloadImg>
                                        <SubMinComentText>회사소개서</SubMinComentText>
                                      </DownLoad>
                                      <DownLoad href="#">
                                        <DownloadImg src={file_Download}></DownloadImg>
                                        <SubMinComentText>포트폴리오</SubMinComentText>
                                      </DownLoad>
                                    </SubMenuCol>
                                  </SubComent>
                          </SubMenu>
                  </Menudiv>
            </CenterMenu>
            
        </Menu>
        <SemiHeader id="subMenuD" style={{visibility: "hidden",opacity:"0"}}>
          <XImg id="subMenuX" onClick={(e)=>{      
            document.getElementById("subMenu").style.opacity = "0";
            document.getElementById("subMenuD").style.opacity = "0";
            document.getElementById("subMenuX").style.opacity = "0";
            setTimeout(
              ()=>{
              document.getElementById("subMenu").style.visibility = "hidden";
              document.getElementById("subMenuD").style.visibility = "hidden";
              document.getElementById("subMenuX").style.visibility = "hidden";
              }
            ,1000)
            console.log("히든 누름")
          }}></XImg>  
          <div></div>    
          <div></div>    
        </SemiHeader>
    </>
  );
}

export default SubMainApp;
