import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {StatusBarHeight} from '../../utils/helper';
import Colors from '../../utils/colors';

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
          backgroundColor: Colors.white1,
          justifyContent: 'center',
          alignItems: 'center',
          shadowColor: Colors.black6,
          shadowOffset: {width: 0, height: 2},
          shadowOpacity: 0.1,
          shadowRadius: 3.65,
          elevation: 3,
        }}>
        <Icon name="menu" size={24} color={Colors.black8} />
      </TouchableOpacity>
      <View
        style={{
          width: '70%',
          height: 45,
          marginTop: 13,
          marginLeft: 20,
          borderRadius: 24,
          backgroundColor: Colors.white1,
          justifyContent: 'center',
          alignItems: 'flex-start',
          shadowColor: Colors.black6,
          shadowOffset: {width: 0, height: 2},
          shadowOpacity: 0.1,
          shadowRadius: 3.65,
          elevation: 3,
        }}>
        <Text style={{fontSize: 15, marginLeft: 15, color: Colors.black9}}>
          Restaurants near me.
        </Text>
      </View>
    </View>
  );
};
