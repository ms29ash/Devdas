import React from "react";
import Styled from "styled-components";
import { ImSpoonKnife } from "react-icons/im";
import { GiTrophyCup } from "react-icons/gi";
import { FaWifi, FaSmile, FaMusic } from "react-icons/fa";
import { MdFastfood } from "react-icons/md";

function Services() {
  return (
    <Container>
      <Wrapper>
        <Opt>
          <div>
            <ImSpoonKnife />
          </div>
          <p> Special Offers</p>
        </Opt>
        <Opt>
          <div>
            <GiTrophyCup />
          </div>
          <p> Rewards</p>
        </Opt>
        <Opt>
          <div>
            <FaSmile />
          </div>
          <p> Happy Hour</p>
        </Opt>
        <Opt>
          <div>
            <FaMusic />
          </div>
          <p> Live Music</p>
        </Opt>
        <Opt>
          <div>
            <MdFastfood />
          </div>
          <p> Snacks</p>
        </Opt>
        <Opt>
          <div>
            <FaWifi />
          </div>
          <p> WIFI</p>
        </Opt>
      </Wrapper>
    </Container>
  );
}

export default Services;

const Container = Styled.section`
background:#000;
max-width:100vw;
padding:5rem;
padding-left:20%
`;
const Wrapper = Styled.div`
display:flex;
flex-wrap:wrap;
`;

const Opt = Styled.div`
  display:flex;
  width:30%;
  margin:2rem 0;
  font-size: 1.5rem;
  align-items:center;
  div{
    background:${(p) => p.theme.color.yellow};
    width:50px;
    height:50px;
    display:grid;
    place-items:center;
    margin-right:0.5rem;
    border-radius: 500px;
    font-size: 30px;
    svg{
      color:#000;
    }
  }
    p{
        color:#fff;
    }
`;
