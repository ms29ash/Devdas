import React from 'react'

import About from '../Components/About';
import Bottle from '../Components/Bottle';
import Events from '../Components/Events';
import Footer from '../Components/Footer';
import Gallery from '../Components/Gallery';
import Hero from '../Components/Hero';
import Navbar from '../Components/Navbar';
import Services from '../Components/Services';
import Stat from '../Components/Stat';
import Timings from '../Components/Timings';

function Home() {
    return (
        <>
            <Navbar />
            <Hero />
            <Services />
            <About />
            {/* <Bottle /> */}
            <Events />
            <Stat />
            <Timings />
            <Gallery />
            <Footer />
        </>
    )
}

export default Home