import React from 'react';
import {TextInput} from 'react-native';

const XTextInput = ({frozen, ...rest}) => {
  return (
    <TextInput
      maxFontSizeMultiplier={1.5}
      textAlignVertical="top"
      editable={!frozen}
      {...rest}
    />
  );
};

export default XTextInput;
