import {
  Platform,
  PermissionsAndroid,
  Dimensions,
  StatusBar,
} from 'react-native';
import Geolocation from 'react-native-geolocation-service';

const X_WIDTH = 375;
const X_HEIGHT = 812;

const XSMAX_WIDTH = 414;
const XSMAX_HEIGHT = 896;

const {height, width} = Dimensions.get('window');

export const isIPhoneX = () =>
  Platform.OS === 'ios' && !Platform.isPad && !Platform.isTVOS
    ? (width === X_WIDTH && height === X_HEIGHT) ||
      (width === XSMAX_WIDTH && height === XSMAX_HEIGHT)
    : false;

export const StatusBarHeight = Platform.select({
  ios: isIPhoneX() ? 44 : 20,
  android: StatusBar.currentHeight,
  default: 0,
});

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
