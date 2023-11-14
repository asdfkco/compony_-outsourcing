import HeaderApps  from "./MainPage/header/headerApp";
import SectionFirApp from "./MainPage/section/section_Fir_App";
import SectionSecApp from "./MainPage/section/section_Sec_App";
import SectionThirApp from "./MainPage/section/section_Thir_App";
import SectionFourApp from "./MainPage/section/section_Four_App";
import FooterApp from "./MainPage/footer/footerApp";
import FooterMenuApp from "./MainPage/footer_menu/footerMenuApp";
import { useEffect } from "react";
import SubMainApp from "./MainPage/submain/subMainApp";


function MainPage() {
  
  useEffect(() => {
    window.addEventListener('scroll', ScrollEvent);
    return () => window.removeEventListener('scroll', ScrollEvent);
  }, []);
  
  
  const ScrollEvent = () => {
      if(window.scrollY > 800){
        console.log("크다!")
        document.getElementById("DisplayHead").style.visibility = "visible";
        document.getElementById("DisplayHead").style.transition = "0.3s";
      }else{
        document.getElementById("DisplayHead").style.visibility = "hidden";
        document.getElementById("DisplayHead").style.transition = "0.3s"
      }
  }
  return (
    <div>
        <SubMainApp></SubMainApp>
        <HeaderApps/>
        <FooterMenuApp/>
        <div style={{width:"1920px",margin:"0 auto"}}>
          <SectionFirApp/>
          <SectionSecApp/>
          <SectionThirApp/>
          <SectionFourApp/>
        </div> 
        
        <FooterApp/>
      
    </div>
  );
}

export default MainPage;
