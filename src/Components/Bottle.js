import React from 'react'
import Slider from 'react-slick'
import Styled from 'styled-components'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Bottle() {
    const settings = {
        fade: true,
        infinite: true,
        speed: 100,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        cssEase: "linear"

    };


    return (
        <Container>
            <Slider {...settings}>
                <div>
                    <Img src="images/bt1.svg" />
                </div>
                <div>
                    <Img src="images/bt2.svg" />
                </div>
                <div>
                    <Img src="images/bt3.svg" />
                </div>
                <div>
                    <Img src="images/bt4.svg" />
                </div>
            </Slider>
        </Container>
    )
}

export default Bottle

const Container = Styled.div``

const Img = Styled.img`width:100vw;
height:80vh;
object-fit:cover;
`