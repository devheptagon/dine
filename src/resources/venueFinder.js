import React, {useState, useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {View, Text, StyleSheet} from 'react-native';
import {getLocalVenues} from '../integration/api';
import {locationPermissionGranted, getCurrentPosition} from '../utils/helper';
import Map from '../components/map';
import VenueList from './sub/venueList';
import {VenueSearchBar} from './sub/venueSearchBar';
import {
  setLocationAction,
  setSelectedVenueIdAction,
} from '../redux/app/appActions';
import Pages from '../utils/pages';

export const VenueFinder = ({navigation}) => {
  const dispatch = useDispatch();
  const [VenueArray, setVenueArray] = useState();

  useEffect(() => {
    (async () => {
      if (!(await locationPermissionGranted())) return;

      const successCallback = (location) => {
        dispatch(setLocationAction(location));
        getLocalVenues(
          location.coords.latitude + ',' + location.coords.longitude,
          (response) => setVenueArray(response?.venue_list),
        );
      };
      getCurrentPosition(successCallback);
    })();
  }, [dispatch]);

  const selectVenue = (venueId) => {
    dispatch(setSelectedVenueIdAction(venueId));
    navigation.navigate(Pages.VenueSelection);
  };

  return (
    <View style={styles.wrapper}>
      <VenueSearchBar />

      <View style={styles.mapWrapper}>
        <Map />
      </View>

      <View animation="slideInUp" style={styles.listWrapper}>
        <Text style={styles.listTitle}>Nearby Restaurants</Text>
        <VenueList
          data={VenueArray}
          selectHandler={(itemId) => selectVenue(itemId)}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  mapWrapper: {
    width: '100%',
    height: 450,
    position: 'absolute',
    backgroundColor: '#F0F0F0',
  },
  listWrapper: {
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
  },
  listTitle: {
    fontSize: 12,
    marginTop: 17,
    marginLeft: 30,
    marginBottom: 10,
    color: 'rgba(0,0,0,0.5)',
  },
});
