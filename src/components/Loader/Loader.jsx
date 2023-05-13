import React from 'react';
import { ThreeCircles } from 'react-loader-spinner';

const Loading = () => (
  <div className="loader">
    <ThreeCircles type="ThreeDots" color="#3f51b5" height={80} width={80} />
  </div>
);

export default Loading;