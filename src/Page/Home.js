import React from 'react'

import About from '../Components/About';
import Bottle from '../Components/Bottle';
import Footer from '../Components/Footer';
import Gallery from '../Components/Gallery';
import Hero from '../Components/Hero';
import Navbar from '../Components/Navbar';
import Stat from '../Components/Stat';

function Home() {
    return (
        <>
            <Navbar />
            <Hero />
            <About />
            <Bottle />
            <Stat />
            <Gallery />
            <Footer />
        </>
    )
}

export default Home