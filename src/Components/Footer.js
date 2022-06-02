import React from 'react'
import Styled from 'styled-components'

function Footer() {
    return (
        <Container>
            <Img src="images/logo.png" alt="" />
            <Box>
                <Head>CONTACT US
                </Head>
                <Li>
                    +44 345 678 903</Li>
                <Li>
                    devdas@mail.com</Li>
                <Li>
                    Find a Store</Li>
            </Box>

            <Box>
                <Head>OTHER LINKS</Head>
                <Li>
                    Home
                </Li>
                <Li>
                    Story</Li>
                <Li>
                    Blog</Li>
                <Li>
                    Gallery</Li>
                <Li>
                    Store</Li>
            </Box>
            <Box>
                <Button>Get a Franchise</Button>
            </Box>

        </Container>
    )
}

export default Footer

const Container = Styled.div` 
display:flex;
align-items:center;
justify-content:space-around;
border:5px solid #fff100;
border-bottom:80px solid #fff100;
`

const Img = Styled.img`;
max-width:150px;
`

const Box = Styled.ul``
const Head = Styled.h3`
font-size:1rem;
`

const Li = Styled.li`
list-style:none;

&:hover{
    text-decoration:underline;
    cursor:pointer;
}
`

const Button = Styled.button`
background-color:#fff100;
border:none;
padding:8px 12px;
border-radius:500px;
&:hover{
    cursor:pointer;
}
`