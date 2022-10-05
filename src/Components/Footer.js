import React from "react";
import Styled from "styled-components";
import { BsInstagram, BsFacebook, BsYoutube, BsTwitter } from "react-icons/bs";

function Footer() {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <Wrapper>
      <Container>
        <Main>
          <Img src="images/logo.png" alt="" />
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
        </Main>
        <Box>
          <Head>CONTACT US</Head>
          <Li>+44 345 678 903</Li>
          <Li>devdas@mail.com</Li>
          <Li>Find a Store</Li>
        </Box>

        <Box>
          <Head>OTHER LINKS</Head>
          <Li>Story</Li>
          <Li>Blog</Li>
          <Li>Gallery</Li>
          <Li>Store</Li>
        </Box>
        <Box>
          <Head>LATEST BLOGS</Head>
          <Li>
            How to Apply for Devdas <br /> Franchise?
          </Li>
          <Li>
            Why is Devdas Different from <br /> Other Franchise?
          </Li>
        </Box>
      </Container>
      <Copyright>
        <a href="https://github.com/ms29ash" target="_blank" rel="noreferrer">
          Copyright &#169; {year} DEVDAS,
          <br /> All Rights Reserved | Designed and Maintained By MS29ASH
        </a>
      </Copyright>
    </Wrapper>
  );
}

export default Footer;

const Wrapper = Styled.div`
width:fit;
border:5px solid ${(p) => p.theme.color.yellow};
padding:1.5rem 0 0;
`;

const Container = Styled.div` 
display:flex;
align-items:flex-start;
justify-content:space-around;
width:90%;
margin:0 auto;
padding:2rem 0 0;
`;

const Main = Styled.div`
display:flex;
flex-direction:column;
align-items:center;''

`;

const Img = Styled.img`;
width:100%;
`;

const Box = Styled.ul`
margin-bottom:1rem;`;
const Head = Styled.h3`
font-size:1rem;
`;

const Li = Styled.li`
list-style:none;
margin:1rem 0;
line-height:1.5rem;

&:hover{
    color:${(p) => p.theme.color.yellow};
    cursor:pointer;
}
`;

const Copyright = Styled.div`
background-color:${(p) => p.theme.color.yellow};
padding:2rem 0;
text-align:center;
line-height:2rem;
&:hover{
    cursor:pointer;
}
a{
    color:#000;

}
`;

const Icons = Styled.div`
display: flex;
align-items: center;
margin-top:1rem;
`;

const Icon = Styled.div`
cursor:pointer;
&:hover{
    color:${(p) => p.theme.color.yellow};
}
svg{
font-size:1.75rem; 
margin:0 10px;
}

`;
