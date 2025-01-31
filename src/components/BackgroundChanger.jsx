import React, { useState, useEffect } from 'react';
import '../css/BackgroundChanger.css';

const imagePaths = [
  require('../images/1.gif'),
  require('../images/2.gif'),
  require('../images/3.gif'),
  require('../images/4.gif'),
  require('../images/5.gif'),
  require('../images/6.gif'),
];

export const BackgroundChanger = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % imagePaths.length);
      setFadeOut(true);
      setTimeout(() => setFadeOut(false), 1000); 
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="background-changer">
      <div className={`background-image ${fadeOut ? 'fade-out' : ''}`} style={{ backgroundImage: `url(${imagePaths[currentIndex]})` }} />
    </div>
  );
};


