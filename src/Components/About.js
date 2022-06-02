import React from 'react'
import Styled from 'styled-components'
function About() {
    return (
        <Container>
            <Img src="images/logobig.svg" alt="" />
            <Text>
                <h1>About</h1>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur ullam, voluptates excepturi aperiam libero corrupti a odio enim, voluptatibus quas dolore quia deserunt! Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, voluptatibus voluptas et dignissimos, aliquid doloribus nam unde eius repellendus facere quidem officiis dolores consectetur asperiores minus praesentium cumque amet fuga repudiandae libero fugit exercitationem eaque odit. Nobis vero error modi nostrum doloremque at laudantium amet ipsa, ab cum quasi fugit.</p>

            </Text>
        </Container>
    )
}

export default About

const Container = Styled.div`
background-color:#fff100;
display: flex;
width:80vw;
margin:5vh auto;
padding:10px 20px;
border-radius:30px;
align-items:center;
`

const Img = Styled.img`
width:40%;
margin:10px ;
`
const Text = Styled.div`
width:100%;
padding:10px 20px;`

