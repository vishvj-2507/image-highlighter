import React from 'react';
import './ImageHighlight.css';

const ImageHighlight = () => {
  return (
    <div className='image-container'>
      <img src={require('./image/sample1.jpg')} width={300} height={300} />
      <div className='highlight'></div>
    </div>
  );
};

export default ImageHighlight;
