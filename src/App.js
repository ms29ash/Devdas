
import './App.css';
import About from './Components/About';
import Bottle from './Components/Bottle';
import Footer from './Components/Footer';
import Gallery from './Components/Gallery';
import Hero from './Components/Hero';
import Navbar from './Components/Navbar';
import Stat from './Components/Stat';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <Bottle />
      <Stat />
      <Gallery />
      <Footer />
    </div>
  );
}

export default App;
