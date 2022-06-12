import React from 'react';
import LottieView from 'lottie-react-native';
function Error(){
  return (
    <LottieView 
      // eslint-disable-next-line no-undef
      source={require('../../assets/error.json')}
      autoPlay
    />
  );
}

export default Error;