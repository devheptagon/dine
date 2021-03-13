import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  TouchableWithoutFeedback,
} from 'react-native';
import {StatusBarHeight} from '../haki';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {getLocalVenues} from '../integration/api';
import {locationPermissionGranted, getCurrentPosition} from '../utils/helper';
import Map from '../components/map';
import {Stars} from '../components/stars';

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
        <FlatList
          data={VenueArray}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({item}) => (
            <TouchableWithoutFeedback onPress={() => selectVenue(item.id)}>
              <View
                style={{
                  flexDirection: 'row',
                  width: '90%',
                  height: 91,
                  backgroundColor: 'white',
                  marginTop: 12,
                  marginLeft: '5%',
                  borderRadius: 16,
                  shadowColor: 'rgba(0,0,0,0.6)',
                  shadowOffset: {width: 0, height: 2},
                  shadowOpacity: 0.1,
                  shadowRadius: 3.65,
                  elevation: 1,
                }}>
                <View
                  style={{
                    width: 65,
                    height: 65,
                    backgroundColor: '#EDEDED',
                    marginTop: 13,
                    marginLeft: 13,
                    borderRadius: 12,
                  }}>
                  {/* Image Here */}
                </View>
                <View style={{flex: 1, flexDirection: 'column'}}>
                  <Text style={{fontSize: 16, marginTop: 14, marginLeft: 16}}>
                    {item.name}
                  </Text>
                  <Text
                    style={{
                      fontSize: 12,
                      color: 'rgba(0,0,0,0.4)',
                      marginTop: 4,
                      marginLeft: 16,
                    }}>
                    {item.address}
                  </Text>

                  <View style={{flexDirection: 'row', marginTop: 4}}>
                    <View
                      style={{flex: 1, flexDirection: 'row', marginLeft: 16}}>
                      <Stars count={4} />
                    </View>
                    <View style={{flex: 1, alignItems: 'flex-end'}}>
                      <Text
                        style={{
                          fontSize: 12,
                          color: 'rgba(0,0,0,0.4)',
                          marginRight: 16,
                        }}>
                        {item.distance}
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
            </TouchableWithoutFeedback>
          )}
        />
      </View>
    </View>
  );
};
