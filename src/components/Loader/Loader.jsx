import React from 'react';
import { ThreeCircles } from 'react-loader-spinner';
import { Loader } from './Loader.styled';


const Loading = () => (
  <Loader>
    <ThreeCircles type="ThreeDots" color="#3f51b5" height={80} width={80} />
  </Loader>
);

export default Loading;