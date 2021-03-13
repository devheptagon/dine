import React from 'react';
import {Modal, View, StyleSheet} from 'react-native';
import Colors from '../../utils/colors';

const XModal = ({children, ...rest}) => {
  return (
    <Modal
      style={{backgroundColor: Colors.Black}}
      animationType="slide"
      supportedOrientations={['portrait']}
      transparent={true}
      {...rest}>
      <View style={styles.wrapper}>{children}</View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: Colors.black1,
  },
});

export default XModal;
