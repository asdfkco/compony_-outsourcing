import React from "react";
import { Elements, ElementsWord, Header } from "./header";
import {Link} from 'react-scroll'
import "../../App.css"

export function HeaderApps() {
    return (
        <Header>
            <Elements>
                    <Link to="1" spy={true} smooth={true}><ElementsWord>외주문의</ElementsWord></Link>
            </Elements>
            <Elements>
                    <Link to="2" spy={true} smooth={true}><ElementsWord>포트폴리오</ElementsWord></Link>
            </Elements>
            <Elements>
                    <Link to="3" spy={true} smooth={true}><ElementsWord>방항성</ElementsWord></Link>
            </Elements>
            <Elements>
                    <Link to="4" spy={true} smooth={true}><ElementsWord>파트너스</ElementsWord></Link>
            </Elements>
        </Header>
    );
  }
  
export default HeaderApps;
  