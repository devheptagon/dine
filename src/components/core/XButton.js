import React from 'react';
import {TouchableOpacity, StyleSheet} from 'react-native';
import Colors from '../../utils/colors';

const XButton = ({children, style, onPress, ...rest}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.button, style]}
      {...rest}>
      {children}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: Colors.white1,
    borderWidth: 1,
    borderColor: Colors.gray2,
    padding: 12,
    margin: 10,
  },
});

export default XButton;
