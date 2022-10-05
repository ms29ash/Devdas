import React from 'react'
import Styled from 'styled-components'
function About() {
    return (
        <Container>
            <h1>About</h1>
            <Wrapper>

                <Img src="images/about1.jpg" alt="" />
                <Img src="images/about2.jpg" alt="" />
                <Img src="images/about3.jpg" alt="" />
            </Wrapper>
            <Text>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur ullam, voluptates excepturi aperiam libero corrupti a odio enim, voluptatibus quas dolore quia deserunt! Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, voluptatibus voluptas et dignissimos, aliquid doloribus nam unde eius repellendus facere quidem officiis dolores consectetur asperiores minus praesentium cumque amet fuga repudiandae libero fugit exercitationem eaque odit. Nobis vero error modi nostrum doloremque at laudantium amet ipsa, ab cum quasi fugit.</p>
                <h3>Read More</h3>

            </Text>
        </Container>
    )
}

export default About

const Container = Styled.div`
background-color:${p => p.theme.color.black};
margin: 1rem 0;
color:white;
max-width:100vw;
padding:5vh 10vw;
h1{
    text-align: center;
    margin:1rem 0;
}
`

const Wrapper = Styled.div`
display:flex;
margin:0 auto;
`

const Img = Styled.img`
width:30%;
margin: 1rem auto ;
`
const Text = Styled.div`
max-width:100%;
padding:10px 2rem;
p{
    text-align: center;
    margin:1.25rem 0 1rem;
    line-height: 1.5rem;
}
h3{
    text-align: center;
    margin-top: 2rem;
    cursor:pointer;
        color:${(p) => p.theme.color.yellow};
}
`

