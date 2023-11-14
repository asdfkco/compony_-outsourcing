import React from "react";
import { Articley, Background, Btn, CircleImg, Display_r, H3Text, Img, MinText, P, P1} from "./section_thir";
import { H1Text, Section_min } from "./section_thir";
// import roboiImg from "./img/curo.png";
import section_Thir_long_img_1 from "./img/section_Thir_long1.png";
import section_Thir_long_img_2 from "./img/section_Thir_long2.png";
import chruo_store from "./data_img/churo_store.png"
import churo_heel from "./data_img/churo_heel.png"
import churo_2set from "./data_img/churo_2set.png"
export function Section_Thir_App() {
    return (
        <>
        <div id="3"></div>
        <Background>
            {/* <Section_min>
                <Articley>
                    <H1Text>테스트입니다테스트테스트<br/>테스트테스트</H1Text>
                    <H3Text><strong>아닌데용</strong>아닌데용<strong>아닌데용</strong>아닌데용<strong>아닌데용</strong>아닌데용아닌데용아닌데용아닌데용</H3Text>
                    
                </Articley>
                <Articley style={{display:"flex",justifyContent:"space-around",width:"100%",padding:"0",height:"300px",paddingBottom:"100px"}}>
                    <div style={{display:"flex",flexDirection: "column",textAlign:"center"}}>
                        <CircleImg></CircleImg>
                        <P1>asdfasdfasdf</P1>
                        <P><strong>테스트인데요</strong></P>
                        <MinText href="#">https://대충사이트.com</MinText>
                    </div>
                    <div style={{display:"flex",flexDirection: "column",textAlign:"center"}}>
                        <CircleImg></CircleImg>
                        <P1>asdfasdfasdf</P1>
                        <P><strong>테스트인데요</strong></P>
                        <MinText href="#">https://대충사이트.com</MinText>
                    </div>
                    <div style={{display:"flex",flexDirection: "column",textAlign:"center"}}>
                        <CircleImg></CircleImg>
                        <P1>asdfasdfasdf</P1>
                        <P><strong>테스트인데요</strong></P>
                        <MinText href="#">https://대충사이트.com</MinText>
                    </div>
                </Articley>
            </Section_min> */}
            {/* <Section_min>
                <div>
                    <img src={roboiImg}></img>
                </div>
            </Section_min> */}
            <Section_min style={{marginBottom:"80px"}}>
                {/* <Articley>
                    <H1Text>목표.</H1Text>
                    <H3Text>
                    제품화 시키는 것까지 목표로 로봇을 개발합니다.<br/>
                    실생활에서 겪을 수 있는 다양한 문제들을 해결하고<br/>
                    공감받을 수 있는 실용적인 기술 개발이 주된 목적입니다.<br/>
                    </H3Text>
                    
                </Articley> */}

                <Articley>
                    <H1Text>CHURO</H1Text>
                    <H3Text>
                    반려 동물과 놀아주며 먹이도 제공 할 수 있는 중·소형용 로봇으로<br/>
                    저전력 설계로 부재시에도 장시간 구동을 할 수 있으며<br/>
                    중·소형견이 물어도 버틸 수 있도록 제작 되었습니다.<br/>
                    </H3Text>
                    
                </Articley>
                <Articley style={{display:"flex",justifyContent:"space-around",width:"100%",padding:"0",height:"340px",paddingBottom:"100px"}}>
                    <div style={{display:"flex",flexDirection: "column",textAlign:"center", alignItems:"center",width:"300px"}}>
                        <CircleImg src={chruo_store}></CircleImg>
                        <P1><strong>츄로</strong></P1>
                        <P>반려동물의 외로움을 이해한다는 것.</P>
                        <a href="https://www.roboistore.com/product/detail.html?product_no=16&cate_no=42&display_group=1" target="_blank" rel="noreferrer"><Btn>구매하기</Btn></a>
                    </div>
                    <div style={{display:"flex",flexDirection: "column",textAlign:"center", alignItems:"center",width:"300px"}}>
                    <CircleImg src={churo_heel}></CircleImg>
                        <P1><strong>츄로 바퀴</strong></P1>
                        <P>츄로에 사용되는 바퀴!</P>
                        <a href="https://www.roboistore.com/product/detail.html?product_no=16&cate_no=42&display_group=1" target="_blank" rel="noreferrer"><Btn>구매하기</Btn></a>
                    </div>
                    <div style={{display:"flex",flexDirection: "column",textAlign:"center", alignItems:"center",width:"300px"}}>
                    <CircleImg src={churo_2set}></CircleImg>
                        <P1><strong>츄로 2세트</strong></P1>
                        <P>츄로를 2개로 맛볼 수 있는 세트!</P>
                        <a href="https://www.roboistore.com/product/detail.html?product_no=12&cate_no=42&display_group=1#none" target="_blank" rel="noreferrer"><Btn>구매하기</Btn></a>
                    </div>
                    
                </Articley>
            </Section_min> 
            <Section_min>
                <Articley style={{width:"100%",padding:"0",height:"auto",paddingBottom:"100px"}}>
                    <Display_r>
                        <Img src={section_Thir_long_img_1}></Img>
                        <div>
                            <H1Text style={{textAlign:"right"}}>
                                로보이 연구소
                            </H1Text>   
                            <H3Text style={{textAlign:"right",paddingLeft:"0"}}>
                                로보이 연구소에서는 각종 센서와 수많은 모터제어 경험을 통해<br/>
                                축적한 원천 기술과 로보이만의 노하우를 바탕으로<br/>
                                다양한 로봇을 개발하고 있습니다.
                            </H3Text>
                        </div>
                    </Display_r>
                </Articley>
            </Section_min> 
            <Section_min>
                <Articley style={{width:"100%",padding:"0",height:"auto",paddingBottom:"100px"}}>
                    <Display_r>
                        <div>
                            <H1Text style={{textAlign:"left"}}>
                            따뜻한<br/>
                            로봇을 만들자
                            </H1Text>
                            <H3Text style={{textAlign:"left",paddingLeft:"0"}}>
                            로보이는 인간의 일자리와 목숨을 위협하는 로봇이 아닌<br/>
                            지친 삶에서 여유와 웃음을 찾아줄 수 있는 가정용 로봇을 만들어<br/>
                            '1가구 1로봇 사회'를 구축하는 것을 목표로 삼고 있습니다.

                            </H3Text>
                        </div>
                        <Img src={section_Thir_long_img_2}></Img>
                    </Display_r>
                </Articley>
            </Section_min>
            
        </Background>
        </>
    );
  }
   
export default Section_Thir_App;
  