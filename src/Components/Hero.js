import React from "react";
import Styled from "styled-components";
import { BsInstagram, BsFacebook, BsYoutube, BsTwitter } from "react-icons/bs";
function Hero() {
  return (
    <Main>
      <Img src="images/hero.jpg" />
      <Wrapper>
        <Icons>
          <Icon>
            <BsInstagram />
          </Icon>
          <Icon>
            <BsFacebook />
          </Icon>
          <Icon>
            <BsYoutube />
          </Icon>
          <Icon>
            <BsTwitter />
          </Icon>
        </Icons>
      </Wrapper>
    </Main>
  );
}

export default Hero;

const Img = Styled.img`
    width:100%;
    object-fit:cover;
    `;
const Main = Styled.div`
width:100vw;
position:relative;
overflow-x: hidden;
`;

const Wrapper = Styled.div`
  position:absolute;
top:0;
bottom:0;
left:15px; 
    `;
const Icons = Styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
height: 100%;

`;

const Icon = Styled.div`
cursor:pointer;
transition-property: all;
transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
transition-duration: 150ms;
&:hover{
transform:scale(1.2);
}
svg{
  color:${(p) => p.theme.color.black};
font-size:2.15rem; 
margin:10px 0;
}

`;
