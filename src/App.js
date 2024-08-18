import React from 'react';
import Navbar from './components/navbar/navbar.jsx';
import StartingHeading from './components/StartingHeading/StartingHeading.jsx';
import ImageSlider from './components/ImageSlider/ImageSlider.jsx';
import Starting from './components/Starting/Starting.jsx';
import About from './components/About/About.jsx';
import Footer from './components/Footer/Footer.jsx';
import Squares from './components/Squares/Squares.jsx';  // Added the Squares component

function App() {
  const slides = [
      { image: './images/Image1.png' },
      { image: './images/Image2.png' },
      { image: './images/Image3.png' },
      { image: './images/Image4.png' }, // Added a fourth slide
  ];

  return (
    <div>
      <Squares 
        speed={0.5} 
        size={40} // pixels
        direction='diagonal' // up, down, left, right, diagonal
        borderColor='#fff'
        hoverFillColor='#222'
      />
      <Navbar />
      <StartingHeading />
      <ImageSlider slides={slides} />
      <Starting />
      <About />
      <Starting /> {/* Reusing the Starting component */}
      <Footer />
    </div>
  );
}

export default App;
