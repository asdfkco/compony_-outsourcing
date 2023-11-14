import React from "react";
import { BigTitle, Img_Arrow, MainText, SendButton, SmallTitle, TextGather } from "./section_fir";



export function Section_Fir_App() {
    return (
      <>
        <div id="1"></div>
        <MainText>
          <TextGather>
          {/* 로보이의 즐거운 혁신이
            가정용 로봇의 기준이 됩니다.
            로보이는 단순한 로봇을 넘어 삶의 질을 향상시키고
            여유와 웃음을 찾아줄 수 있는 따듯한 동반자를 연구합니다. */}
            <BigTitle>
              로보이
            </BigTitle>
            <SmallTitle>
            주식회사 로보이는 로봇을 만드는 기업입니다.<br/>
따뜻하고 감성이 채워진 로봇을 만들어 사람들에게 전달하는 것을 목표합니다.
            </SmallTitle>
            <a href="/form" style={{textDecoration : "none"}}><SendButton style={{cursor: "pointer"}}>프로젝트 문의</SendButton></a>
            <Img_Arrow/>
          </TextGather>
          
        </MainText>
        </>
    );
  }
   
export default Section_Fir_App;
  