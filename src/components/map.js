import React from 'react';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
import {useSelector} from 'react-redux';

const GoogleMap = (props) => {
  const location = useSelector((state) => state.appReducer.location);
  const region = location
    ? {
        latitude: location.coords.latitude,
        latitudeDelta: 0.15,
        longitude: location.coords.longitude,
        longitudeDelta: 0.1,
      }
    : defaultRegion;

  return (
    <MapView
      provider={PROVIDER_GOOGLE}
      style={{flex: 1}}
      region={region}
      minZoomLevel={12}
      maxZoomLevel={16}
      showsPointsOfInterest={false}
      showsUserLocation={true}
      toolbarEnabled={false}
      pitchEnabled={false}
      showsCompass={false}
      showsMyLocationButton={false}
      rotateEnabled={false}
      loadingEnabled={true}
    />
  );
};

const defaultRegion = {
  latitude: 0,
  latitudeDelta: 0.15,
  longitude: 0,
  longitudeDelta: 0.1,
};

export default GoogleMap;
