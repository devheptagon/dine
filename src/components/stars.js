import React from 'react';
import {View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Stars = (props) => {
  return (
    <View style={{flexDirection: 'row'}}>
      {new Array(props.count || 5).fill(true).map((s, i) => (
        <Icon key={i} name="star" size={16} color="#FCBF07" />
      ))}
    </View>
  );
};

export default Stars;
