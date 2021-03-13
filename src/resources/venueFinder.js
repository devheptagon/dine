import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {getLocalVenues} from '../integration/api';
import {
  locationPermissionGranted,
  getCurrentPosition,
  StatusBarHeight,
} from '../utils/helper';
import Map from '../components/map';

import VenueList from './sub/venueList';

export const VenueFinder = ({navigation}) => {
  const [VenueArray, setVenueArray] = useState();
  const [region, setRegion] = useState();

  useEffect(() => {
    (async () => {
      if (!(await locationPermissionGranted())) return;

      const successCallback = (location) => {
        global.user_location =
          location.coords.latitude + ',' + location.coords.longitude;
        setRegion({
          latitude: location.coords.latitude,
          latitudeDelta: 0.15,
          longitude: location.coords.longitude,
          longitudeDelta: 0.1,
        });
        getLocalVenues(
          location.coords.latitude + ',' + location.coords.longitude,
          (response) => setVenueArray(response?.venue_list),
        );
      };
      getCurrentPosition(successCallback);
    })();
  }, []);

  function selectVenue(vid) {
    global.selected_venue_id = vid;
    navigation.navigate('venueSelection');
  }

  return (
    <View style={{flex: 1, backgroundColor: 'red'}}>
      <View
        style={{
          width: '100%',
          height: StatusBarHeight,
          position: 'absolute',
          backgroundColor: 'white',
          zIndex: 100,
        }}></View>

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
          <Text
            style={{fontSize: 15, marginLeft: 15, color: 'rgba(0,0,0,0.9)'}}>
            Restaurants near me.
          </Text>
        </View>
      </View>

      <View
        style={{
          width: '100%',
          height: 450,
          position: 'absolute',
          backgroundColor: '#F0F0F0',
        }}>
        <Map region={region} />
      </View>

      <View
        animation="slideInUp"
        style={{
          flex: 1,
          width: '100%',
          height: 1400,
          backgroundColor: '#F7F7F7',
          marginTop: 320,
          borderTopLeftRadius: 32,
          borderTopRightRadius: 32,
          shadowColor: '#000',
          shadowOffset: {width: 0, height: 3},
          shadowOpacity: 0.2,
          shadowRadius: 4.65,
          elevation: 6,
        }}>
        <Text
          style={{
            fontSize: 12,
            marginTop: 17,
            marginLeft: 30,
            marginBottom: 10,
            color: 'rgba(0,0,0,0.5)',
          }}>
          Nearby Restaurants
        </Text>
        <VenueList
          data={VenueArray}
          selectHandler={(itemId) => selectVenue(itemId)}
        />
      </View>
    </View>
  );
};
