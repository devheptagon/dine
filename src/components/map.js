import React from 'react';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';

export default Map = (props) => {
  return (
    <MapView
      provider={PROVIDER_GOOGLE}
      style={{flex: 1}}
      region={props.region || defaultRegion}
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
