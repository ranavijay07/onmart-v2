import React, { useState, useEffect } from 'react';

const App = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    'https://via.placeholder.com/1900x250?text=Image+1',
    'https://via.placeholder.com/1900x250?text=Image+2',
    'https://via.placeholder.com/1900x250?text=Image+3',
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);


  return (
    <div style={{padding: '0 20px'}}>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '200px', border: '0.5 px', marginTop: '10px' }}>
        <img src={images[currentIndex]} alt={`${currentIndex + 1}`} style={{ maxWidth: '100%', maxHeight: '100%' }} />
      </div>
    </div>
  );
};

export default App;
