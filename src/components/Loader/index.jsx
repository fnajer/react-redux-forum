import React from 'react';
import loadingGif from '../../loading.gif';

const Loader = ({ width = '40px', height = '40px' }) => {
  return (
    <div className="text-center">
      <img src={loadingGif} width={width} height={height} alt="" className="img" />
    </div>
  )
}

export default Loader;