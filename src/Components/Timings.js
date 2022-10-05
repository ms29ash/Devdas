import React from 'react'
import Styled from 'styled-components'

function Timings() {
    return (
        <Section>
            <Container>
                <img src="./images/timings.jpg" alt="" />
                <Wrapper>
                    <h1>Timings</h1>
                    <p>Monday Tuesday 10am - 9pm</p>
                    <p>Wednesday Thrusday 10am - 8pm</p>
                    <p>Friday Saturday 10am - 12am</p>
                    <p>Sunday 4pm - 12am</p>
                    <p>Happy Hour 4pm - 7pm</p>

                </Wrapper>
            </Container>

        </Section>
    )
}

export default Timings

const Section = Styled.section`
width:100vw;
margin:4rem;
h1{
    margin:2rem 3rem;
    font-size: 2rem;
}
`
const Container = Styled.div`
width:80%;
margin:2rem auto;
display:flex;
align-items:center;
img{
    width:50%;
}
p{
    margin:2rem 3rem;
    font-size:1.5rem;
    font-weight:bold;
    color:${p => p.theme.color.yellow};
}
`
const Wrapper = Styled.div``
