import {Platform, PermissionsAndroid} from 'react-native';
import Geolocation from 'react-native-geolocation-service';

export const locationPermissionGranted = async () => {
  let auth = '';
  if (Platform.OS === 'ios') {
    auth = await Geolocation.requestAuthorization('whenInUse');
    if (auth !== 'granted') {
      return false;
    }
  }
  if (Platform.OS === 'android') {
    auth = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
    );
    if (auth !== PermissionsAndroid.RESULTS.GRANTED) {
      return false;
    }
  }
  return true;
};

export const getCurrentPosition = async (successCallback) => {
  await Geolocation.getCurrentPosition(
    (location) => {
      successCallback(location);
    },
    (error) => {
      // See error code charts below.
      console.log('----location error', error.code, error.message);
    },
    {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
  );
};
