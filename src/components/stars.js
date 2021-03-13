import React from 'react';
import {View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export const Stars = (props) => {
  return (
    <View style={{flexDirection: 'row'}}>
      {Array.from(props.count || 5)
        .fill(true)
        .map((s) => (
          <Icon name="star" size={16} color="#FCBF07" />
        ))}
    </View>
  );
};
