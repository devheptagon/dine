import React from 'react';
import FastImage from 'react-native-fast-image';

const XImage = ({source, ...rest}) => {
  return <FastImage source={source} {...rest} />;
};

export default XImage;
