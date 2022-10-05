import React from "react";
import Styled from "styled-components";

function Stat() {
  return (
    <Container>
      <Box>
        <Head>100%</Head>
        <Text>Quality Assurance</Text>
      </Box>
      <Box>
        <Head>BEST</Head>
        <Text>Drinks in India</Text>
      </Box>
      <Box>
        <Head>NO.1</Head>
        <Text>
          place to spend your
          <br />
          Time with Friends
        </Text>
      </Box>
      <Box>
        <Head>100+</Head>
        <Text>Dishes & Snacks</Text>
      </Box>
    </Container>
  );
}

export default Stat;

const Container = Styled.div` 
max-width: 100vw;
padding:5vw;
display:flex;
justify-content: space-around;
align-items: center;

background-color:${(p) => p.theme.color.black};`;
const Box = Styled.div`
font-family:roboto;
font-size: 1.25rem;
display: flex;
flex-direction: column;
align-items: center;
justify-content:center;
border:4px solid ${(p) => p.theme.color.yellow};
color:#fff;
width:15vw;
aspect-ratio:1/1;
`;
const Head = Styled.h1`
font-size:3.5rem;
font-weight:bold;
`;
const Text = Styled.p``;
