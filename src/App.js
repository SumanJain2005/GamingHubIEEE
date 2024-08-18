import React from 'react';
import Navbar from './components/navbar/navbar.jsx';
import StartingHeading from './components/StartingHeading/StartingHeading.jsx';
import ImageSlider from './components/ImageSlider/ImageSlider.jsx';

function App() {
  const slides = [
      { image: './images/image1.png' },
      { image: './images/image2.png' },
      { image: './images/image4.png' }
      // Add more slides as needed
  ];

  return (
    <div>
      <Navbar />
      <StartingHeading />
      <ImageSlider slides={slides} />
      {/* Add other components such as the slider menu here */}
    </div>
  );
}

export default App;