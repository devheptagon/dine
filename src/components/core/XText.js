import React from 'react';
import {Text, StyleSheet} from 'react-native';
import Colors from '../../utils/colors';

const XText = ({children, noScale, style, ...rest}) => {
  return (
    <Text
      maxFontSizeMultiplier={noScale ? 1 : 1.1}
      style={[styles.defaultTextStyle, style]}
      {...rest}>
      {children}
    </Text>
  );
};

const styles = StyleSheet.create({
  defaultTextStyle: {
    color: Colors.black1,
  },
});

export default XText;
