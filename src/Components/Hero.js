import React from "react";
import Styled from "styled-components";
import { BsInstagram, BsFacebook, BsYoutube, BsTwitter } from "react-icons/bs";
function Hero() {
  return (
    <Main>
      <Img src="images/hero.jpg" />
      <Icons>
        <IG />
        <FB />
        <Yt />
        <Tw />
      </Icons>
    </Main>
  );
}

export default Hero;

const Img = Styled.img`
    width:100vw;
    max-height:500px;
    `;
const Main = Styled.div`
position:relative;
`;

const Icons = Styled.div`
position:absolute;
bottom:5px;
left:5vw;
`;

const IG = Styled(BsInstagram)`
color:#000;
font-size:2rem; 
margin:0 3px
;`;
const FB = Styled(BsFacebook)`
color:#000;
font-size:2rem; 
margin:0 3px
;`;
const Yt = Styled(BsYoutube)`
color:#000;
font-size:2rem; 
margin:0 3px
;`;
const Tw = Styled(BsTwitter)`
color:#000;
font-size:2rem; 
margin:0 3px
;`;
