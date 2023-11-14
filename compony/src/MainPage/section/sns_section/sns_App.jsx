import React from "react";
import { Background, Img, WidthBackground } from "./sns.jsx";
import instagram from "./instagram.png"
import facebook from "./facebook.png"


export function Sns_App() {
    return (
        <>
            <WidthBackground>
            <Background>
                <div>
                    <a href="https://www.instagram.com/roboicorp" target="_blank" rel="noreferrer noopener"><Img src={instagram}></Img></a>
                    <a href="https://www.facebook.com/roboikorea" target="_blank" rel="noreferrer noopener"><Img src={facebook}></Img></a>
                </div>
            </Background>
            </WidthBackground>
        </>
    );
  }
   
export default Sns_App;