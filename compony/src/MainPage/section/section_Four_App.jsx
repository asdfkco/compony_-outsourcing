import React from "react";
import { Background, H1Text, Img, ImgGround, P } from "./section_four";
import Sns_App from "./sns_section/sns_App";





export function Section_Four_App() {
    return (
        <>
        <div id="4"></div>
        <Background>
            <ImgGround>
                <div>
                    <H1Text>
                        파트너스
                    </H1Text>
                    <P>
                        로보이와 함께해온 회사들을 소개합니다!
                    </P>
                </div>
                <Img></Img>
            </ImgGround>
            <Sns_App></Sns_App>
        </Background>
        </> 
    );
  }
   
export default Section_Four_App;
  