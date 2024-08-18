import React from 'react';
import Navbar from './components/navbar/navbar.jsx';
import StartingHeading from './components/StartingHeading/StartingHeading.jsx';
import ImageSlider from './components/ImageSlider/ImageSlider.jsx';
import Starting from './components/Starting/Starting.jsx';
import About from './components/About/About.jsx';
import Footer from './components/Footer/Footer.jsx';

function App() {
  const slides = [
      { image: './images/Image1.png' },
      { image: './images/Image2.png' },
      { image: './images/Image3.png' },
      // Add more slides as needed
  ];

  return (
    <div>
      <Navbar />
      <StartingHeading />
      <ImageSlider slides={slides} />
      <Starting />
      <About />
      <Starting /> {/* Reuse the Starting component */}
      
      <Footer />
    </div>
  );
}

export default App;