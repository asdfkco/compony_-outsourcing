import React from "react";
import { Background, Div, Footer, P, Wrap } from "./footer";
import roboiImg from "./roboi_logo.png"




export function FooterApp() {
    return (
        <>
            <Background>
                <Footer>
                    <Wrap>
                        <Div>
                            <img width={"100px"} height={"120px"} style={{marginRight:"100px"}} src={roboiImg}></img>
                        </Div>
                        <Div>
                            <P>
                                경기도 수원시 권선구 덕영대로 1124-1, 2층<br/>
                                대표 : 이종섭<br/>
                                TEL : 1833-4889<br/>
                                FAX : 02-2138-1381<br/>
                                E-mail : roboicorp@gmail.com
                            </P>
                        </Div>
                    </Wrap>
                </Footer>
            </Background>
        </>
    );
  }
   
export default FooterApp;
  