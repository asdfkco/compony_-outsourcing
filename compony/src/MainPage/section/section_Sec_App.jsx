import React from "react";
import { Background, BigTitle, Components, ImgTitle, SmallTitle } from "./section_sec";
import churo from "./data_img/churo.png"
import ai_search_find from "./data_img/ai_search_find.png"
import Printer_3d from "./data_img/3d_printer.png"
import mabi from "./data_img/mabi.png"
import skateBoard from "./data_img/skateBoard.png"
import sange from "./data_img/sange.png"


export function Section_Sec_App() {
    return (
        <>
        <div id="2"></div>
        <Background>
            <Components>
                <ImgTitle src={churo}></ImgTitle>
                <BigTitle>츄로</BigTitle>
                <SmallTitle>testetstetsetsetset</SmallTitle>
            </Components>
            <Components>
                <ImgTitle src={ai_search_find}></ImgTitle>
                <BigTitle>균열점검 로봇</BigTitle>
                <SmallTitle>testetstetsetsetset</SmallTitle>
            </Components>
            <Components>
                <ImgTitle src={Printer_3d}></ImgTitle>
                <BigTitle>3d 프린터</BigTitle>
                <SmallTitle>testetstetsetsetset</SmallTitle>
            </Components>
            <Components>
                <ImgTitle src={mabi}></ImgTitle>
                <BigTitle>보행 보조기구</BigTitle>
                <SmallTitle>testetstetsetsetset</SmallTitle>
            </Components>
            <Components>
                <ImgTitle src={skateBoard}></ImgTitle>
                <BigTitle>전동 스케이트보드</BigTitle>
                <SmallTitle>testetstetsetsetset</SmallTitle>
            </Components>
            <Components>
                <ImgTitle src={sange}></ImgTitle>
                <BigTitle>근력 보조기구</BigTitle>
                <SmallTitle>testetstetsetsetset</SmallTitle>
            </Components>

        </Background>
        </>
    );
  }
   
export default Section_Sec_App;
  