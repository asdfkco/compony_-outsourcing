import {  Logo, MenuImg, SemiHeader, UpBtn } from "./footerMenu";   

export function FooterMenuApp() {
    const Scroll = () =>{
        window.scrollTo({
            top:0,
            behavior:'smooth',
            
        })
    }

    return (
        <>
            <div id="DisplayHead" style={{visibility:"hidden"}}>
                <SemiHeader>
                    <MenuImg  onClick={(e)=>{
                        document.getElementById("subMenu").style.visibility = "visible";
                        document.getElementById("subMenuD").style.visibility = "visible";
                        document.getElementById("subMenuX").style.visibility = "visible"; 

                        document.getElementById("subMenu").style.opacity = "1";
                        document.getElementById("subMenuD").style.opacity = "1";
                        document.getElementById("subMenuX").style.opacity = "1";
                        console.log("히든 누름")

                        }}>
                    </MenuImg>
                    <Logo>

                    </Logo>
                    <div></div>
                </SemiHeader>
                <UpBtn onClick={Scroll}></UpBtn>
            </div>
        </>
    );
    

  }
   
  
export default FooterMenuApp;
  