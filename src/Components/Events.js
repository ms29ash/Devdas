import React from "react";
import Styled from "styled-components";

function Events() {
  return (
    <Section>
      <Wrapper>
        <Container>
          <h1>Events</h1>
          <h3>Festival Special</h3>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Recusandae, quia voluptatem exercitationem consequuntur quasi esse
            expedita molestiae suscipit eum cum natus voluptates voluptatibus
            magni!
          </p>
          <button>Book Now</button>
        </Container>
        <img src="./images/event.jpg" alt="" />
      </Wrapper>
    </Section>
  );
}

export default Events;

const Section = Styled.section`
padding:3rem 0;
background:#000;
`;
const Wrapper = Styled.div`
display:flex;
width:80vw;
margin:0 auto;
align-items:center;
img{
    width:50%;
}
`;
const Container = Styled.div`
h1{         
    font-size:3rem;
    margin-bottom: 1.25rem;
}
p{
    margin-top:2rem;
    margin-right:3rem;
    line-height:1.5rem;
}
button{
  padding:0.5rem 1rem;
  margin-top:1rem;
  font-size:1.25rem;
  border-radius:8px;
  cursor:pointer;
  &:hover{
    background-color:${p => p.theme.color.lightyellow};
  }
}

`;
