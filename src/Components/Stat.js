import React from 'react'
import Styled from 'styled-components'


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
                <Head>NO.1
                </Head>
                <Text>place to spend your<br />
                    Time with Friends</Text>
            </Box>
            <Box>
                <Head>100+
                </Head>
                <Text>Dishes & Snacks</Text>
            </Box>
        </Container>
    )
}

export default Stat

const Container = Styled.div` 
width: 100vw;
height:30vh;
display:flex;
justify-content: space-around;
align-items: center;

background-color:#fff100;`
const Box = Styled.div`
font-family:roboto;
font-size: 1.5rem;
display: flex;
flex-direction: column;
align-items: center;
`
const Head = Styled.h1`
font-size:4rem;
font-weight:bold;
`
const Text = Styled.p``