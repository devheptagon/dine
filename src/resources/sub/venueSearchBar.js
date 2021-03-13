import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {StatusBarHeight} from '../../utils/helper';

export const VenueSearchBar = ({navigation}) => {
  return (
    <View
      style={{
        width: '100%',
        flexDirection: 'row',
        height: 60,
        position: 'absolute',
        zIndex: 200,
        top: StatusBarHeight,
      }}>
      <TouchableOpacity
        onPress={() => navigation.navigate('MyAccount')}
        style={{
          width: 45,
          height: 45,
          marginTop: 13,
          marginLeft: 13,
          borderRadius: 50 / 2,
          backgroundColor: 'white',
          justifyContent: 'center',
          alignItems: 'center',
          shadowColor: 'rgba(0,0,0,0.6)',
          shadowOffset: {width: 0, height: 2},
          shadowOpacity: 0.1,
          shadowRadius: 3.65,
          elevation: 3,
        }}>
        <Icon name="menu" size={24} color="rgba(0,0,0,0.8)" />
      </TouchableOpacity>
      <View
        style={{
          width: '70%',
          height: 45,
          marginTop: 13,
          marginLeft: 20,
          borderRadius: 24,
          backgroundColor: 'white',
          justifyContent: 'center',
          alignItems: 'flex-start',
          shadowColor: 'rgba(0,0,0,0.6)',
          shadowOffset: {width: 0, height: 2},
          shadowOpacity: 0.1,
          shadowRadius: 3.65,
          elevation: 3,
        }}>
        <Text style={{fontSize: 15, marginLeft: 15, color: 'rgba(0,0,0,0.9)'}}>
          Restaurants near me.
        </Text>
      </View>
    </View>
  );
};
