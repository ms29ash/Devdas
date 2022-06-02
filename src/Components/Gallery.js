import React from 'react'
import Styled from 'styled-components'

function Gallery() {
    return (
        <Container>
            <Head>Gallery</Head>
            <Img src="images/gallery.png" alt="" />

        </Container>
    )
}

export default Gallery

const Container = Styled.div`
margin:4vh 0;
display: flex;
flex-direction: column;
align-items: center;
`

const Img = Styled.img`
width:70vw;
margin:0 15vw;
`
const Head = Styled.h1`
font-size:3rem;
`
