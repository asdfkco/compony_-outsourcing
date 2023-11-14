import React, { useRef, useState } from "react";
import { Background, Div, Img_Arrow, InputBundle, InputDefault, InputDiv, InputRadio, InputText, InputTextArea, MainImg, RadioLable, SubmitBtn, TextDiv } from "./Form";
import arrowImg from "./IMG/Arrow.png"
import FooterApp from "../MainPage/footer/footerApp";
import "./style.css"
import { useForm } from "react-hook-form";
import axios from 'axios';
import Swal from "sweetalert2";
import { redirect } from "react-router-dom";
import churo_roboi from "./IMG/churo.png"  
const url = process.env.REACT_APP_REST_API_URL

export function Form_app() {
    const [num, setNum] = useState("");
    const phoneRef = useRef();

    // 휴대폰 번호 입력 함수



    const {register,handleSubmit,formState: { errors }} = useForm();
    const onSubmit = data => {
        axios
         .post(
              url,
             data,
             { headers: { 'Content-Type': 'application/json' }}
          )
         .then(response => {
            if(response.status === 200){
            redirect("/")
            Swal.fire({
                title:'전송완료!',         // Alert 제목
                text:'신청해주셔서 감사합니다!!',  // Alert 내용
                icon:'success',               
            }).then(result => {
                // 만약 Promise리턴을 받으면,
                if (result.isConfirmed) { // 만약 모달창에서 confirm 버튼을 눌렀다면
                
                    window.location.replace('http://localhost:3000');
                }
             });
              
            }
        })
         .catch(error => { 
          console.log(error)
            if(error){
                console.log(error)
                Swal.fire({
                    title:error,         // Alert 제목
                    text:'무언가 잘못되었어요...',
                    icon:'error',                         // Alert 타입
                });
                }
        }
            
            );
         


    //alert 이쁘게 만들고 유효성 검사 만들기
     };
 
    
        return (
          <>
            <a href="/">
              <Img_Arrow src={arrowImg}></Img_Arrow>
            </a>
            <Background>
                <a href="https://www.roboistore.com/product/detail.html?product_no=16&cate_no=42&display_group=1"><MainImg src={churo_roboi}></MainImg></a>
              <form onSubmit={handleSubmit(onSubmit)}>
                <InputDiv>
                  <TextDiv>
                    <InputText>프로젝트 이름을 적어주세요*</InputText>
                    {errors.name?.type === "required" &&
                    <div style={{color:"red",fontSize:"18px",marginLeft:"20px"}}>프로젝트 이름을 입력해주세요!</div>}
                  </TextDiv>
                  <InputBundle>
                    <InputDefault
                      placeholder="ex) OO프로젝트"
                      {...register("name",{required: true})}
                    ></InputDefault>
                  </InputBundle>

                  <TextDiv>
                    <InputText>회사명을 적어주세요</InputText>
                    {errors.compony?.type === "required" &&
                    <div style={{color:"red",fontSize:"18px",marginLeft:"20px"}}>회사명을 입력해주세요!</div>}
                  </TextDiv>
                  <InputBundle>
                    <InputDefault
                      placeholder="ex) OO회사"
                      {...register("compony",{required: true})}
                    ></InputDefault>
                  </InputBundle>

                  <TextDiv>
                    <InputText>이메일을 적어주세요*</InputText>
                    {errors.email?.type === "required" &&
                    <div style={{color:"red",fontSize:"18px",marginLeft:"20px"}}>이메일을 입력해주세요!</div>}
                  </TextDiv>
                  <InputBundle>
                    <InputDefault
                      type="email"
                      placeholder="ex) example@compony.com"
                      {...register("email",{required: true})}
                    ></InputDefault>
                  </InputBundle>

                  <TextDiv>
                    <InputText>연락처를 적어주세요*</InputText>
                    {errors.phone?.type === "required" &&
                    <div style={{color:"red",fontSize:"18px",marginLeft:"20px"}}>전화번호를 입력해주세요!</div>}
                  </TextDiv>
                  <InputBundle>
                    <InputDefault
                      type="tel"
                      ref={phoneRef}
                      {...register("phone", {
                        required: true,
                        onChange: (e) => {
                          const value = e.target.value.replace(/\D+/g, "");
                          const numberLength = 11;

                          let result;
                          result = "";

                          for (
                            let i = 0;
                            i < value.length && i < numberLength;
                            i++
                          ) {
                            switch (i) {
                              case 3:
                                result += "-";
                                break;
                              case 7:
                                result += "-";
                                break;

                              default:
                                break;
                            }

                            result += value[i];
                          }

                          e.target.value = result;

                          setNum(e.target.value);
                        },
                      })}
                      value={num}
                      maxLength={14}
                      placeholder="ex) 01012341234"
                    ></InputDefault>
                    
                  </InputBundle>

                  <TextDiv>
                    <InputText>프로젝트 예산을 입력해주세요*</InputText>
                    {errors.money?.type === "required" &&
                    <div style={{color:"red",fontSize:"18px",marginLeft:"20px"}}>예산을 입력해주세요!</div>}
                  </TextDiv>
                  <InputBundle>
                    <InputDefault
                      type="number"
                      placeholder="ex) 0000"
                      {...register("money",{required: true})}
                    ></InputDefault>
                    <div style={{ position: "absolute", marginLeft: "470px", width:"30px"}}>
                      만원
                    </div>
                  </InputBundle>

                  <TextDiv>
                    <InputText>자세한 내용을 말씀해주세요*</InputText>
                    {errors.detail?.type === "required" &&
                    <div style={{color:"red",fontSize:"18px",marginLeft:"20px"}}>자세한내용을 입력해주세요!</div>}
                  </TextDiv>
                  <InputBundle style={{ height: "auto" }}>
                    <InputTextArea
                      placeholder="프로젝트에 관해 자세하게 적어주세요"
                      {...register("detail",{required: true})}
                    ></InputTextArea>
                  </InputBundle>

                  <TextDiv>
                    <InputText>근무 방식*</InputText>
                    {errors.work?.type === "required" &&
                    <div style={{color:"red",fontSize:"18px",marginLeft:"20px"}}>근무방식을 선택해주세요!</div>}
                  </TextDiv>
                  <InputBundle
                    style={{
                      height: "70",
                      marginTop: "10px",
                      marginBottom: "10px",
                      display: "grid",
                      height: "240px",
                    }}
                  >
                    <RadioLable>
                      <Div>
                        <h3>외주</h3>
                      </Div>
                      <InputRadio
                        name="WorkStyle"
                        value="상주"
                        type="radio"
                        style={{ margin: 0 }}
                        {...register("work",{required: true})}
                      ></InputRadio>
                    </RadioLable>

                    <RadioLable>
                      <Div>
                        <h3>외주 + 상주</h3>
                      </Div>
                      <InputRadio
                        name="WorkStyle"
                        value="외주+상주"
                        type="radio"
                        style={{ margin: 0 }}
                        {...register("work",{required: true})}
                      ></InputRadio>
                    </RadioLable>

                    <RadioLable>
                      <Div>
                        <h3>상주</h3>
                      </Div>
                      <InputRadio
                        name="WorkStyle"
                        value="상주"
                        type="radio"
                        style={{ margin: 0 }}
                        {...register("work",{required: true})}
                      ></InputRadio>
                    </RadioLable>
                  </InputBundle>
                  <InputBundle>
                    <SubmitBtn type="submit">전송</SubmitBtn>
                  </InputBundle>
                </InputDiv>
              </form>
            </Background>

            <FooterApp></FooterApp>
          </>
        );
  }

export default Form_app;
    