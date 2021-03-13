import React, { useState, useEffect, useRef } from 'react';
import { Alert, Button, SafeAreaView, Platform, TextInput, View, Text, Image, ScrollView, TouchableOpacity, FlatList, Dimensions, TouchableWithoutFeedback, Animated, StatusBar, PermissionsAndroid } from 'react-native';
import { StatusBarHeight } from '../haki'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import Geolocation from 'react-native-geolocation-service';
// import * as Location from 'expo-location';
// import { MaterialCommunityIcons } from '@expo/vector-icons';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';


export const VenueFinder = ({ navigation }) => {
    const [location, setLocation] = useState(null);
    const [errorMsg, setErrorMsg] = useState(null);
    const [VenueArray, setVenueArray] = useState();

    const [region, setRegion] = useState({
        latitude: 0, //global.userLocationLat, //51.4688922,
        latitudeDelta: 0.15,
        longitude:0,  //global.userLocationLon, //-0.9715156,
        longitudeDelta: 0.1
    });

    useEffect(() => {
        (async () => {
            // if (Platform.OS === 'ios') {
            //     Geolocation.requestAuthorization('always');
            //   }
            let auth = ''
            if (Platform.OS === 'ios') {
                auth = await Geolocation.requestAuthorization("whenInUse");
                if(auth !== "granted") {
                    setErrorMsg('Permission to access location was denied');
                    return;
                }
              }
              if (Platform.OS === 'android') {
                 auth = await PermissionsAndroid.request(
                  PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
                );
                if (auth !== PermissionsAndroid.RESULTS.GRANTED) {
                    setErrorMsg('Permission to access location was denied');
                    return;
                }
              }

            await Geolocation.getCurrentPosition(
            (location) => {
              console.log('------GEO',location);
              global.user_location = location.coords.latitude + "," + location.coords.longitude;
              setRegion({
                  latitude: location.coords.latitude,
                  latitudeDelta: 0.15,
                  longitude: location.coords.longitude,
                  longitudeDelta: 0.1
              });
                getLocalVenues(location.coords.latitude + "," + location.coords.longitude)

            },
            (error) => {
              // See error code charts below.
              console.log('----location error', error.code, error.message);
            },
            { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
        );
        // getLocalVenues(location.coords.latitude + "," + location.coords.longitude)
        })();
    }, []);

    const getLocalVenues = async (location) => {
        var data = new FormData()
        data.append("location", location)
        console.log('---native venue data', data, global.apiheader)
        let response = await fetch('https://cacloud.co.uk/api/dinelocal/venues/local', { method: 'POST', headers: global.apiheader, body: data });
        let json = await response.json();
        console.log('---native venue list', json)
        setVenueArray(json["venue_list"]);
      }

    function selectVenue(vid){
        global.selected_venue_id = vid;
        navigation.navigate("venueSelection");
    }
   console.log('-------- return VenueArray', VenueArray, region)

    return (
            <View style={{flex: 1, backgroundColor: 'red'}}>
            <View style={{width: '100%', height: StatusBarHeight, position: 'absolute', backgroundColor: 'white', zIndex: 100}}></View>

            <View style={{width: '100%', flexDirection: 'row', height: 60, position: 'absolute', zIndex: 200, top: StatusBarHeight}}>
            <TouchableOpacity
                onPress={() => navigation.navigate("MyAccount")}
                style={{width: 45, height: 45, marginTop: 13, marginLeft: 13, borderRadius: 50/2, backgroundColor: 'white', justifyContent: 'center', alignItems: 'center', shadowColor: "rgba(0,0,0,0.6)", shadowOffset: {width: 0,height: 2,}, shadowOpacity: 0.1, shadowRadius: 3.65, elevation: 3}}>
                    <Icon name='menu' size={24}  color="rgba(0,0,0,0.8)"/>
                </TouchableOpacity>
                <View style={{width: '70%', height: 45, marginTop: 13, marginLeft: 20, borderRadius: 24, backgroundColor: 'white', justifyContent: 'center', alignItems: 'flex-start', shadowColor: "rgba(0,0,0,0.6)", shadowOffset: {width: 0,height: 2,}, shadowOpacity: 0.1, shadowRadius: 3.65, elevation: 3}}>
                    <Text style={{ fontSize: 15, marginLeft: 15, color: 'rgba(0,0,0,0.9)' }}>Restaurants near me.</Text>
                </View>
            </View>

            <View style={{width: '100%', height: 450, position: 'absolute', backgroundColor: '#F0F0F0'}}>
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
                showsUserLocation={true}
                rotateEnabled={false}
                loadingEnabled={true}>
                </MapView>

            </View>

                <View animation="slideInUp" style={{flex:1, width: '100%', height: 1400, backgroundColor: '#F7F7F7', marginTop: 320, borderTopLeftRadius: 32, borderTopRightRadius: 32, shadowColor: "#000", shadowOffset: {width: 0,height: 3,}, shadowOpacity: 0.2, shadowRadius: 4.65, elevation: 6}}>
                    <Text style={{ fontSize: 12, marginTop: 17, marginLeft: 30, marginBottom: 10, color: 'rgba(0,0,0,0.5)' }}>Nearby Restaurants</Text>
                    <FlatList
                    data={VenueArray}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({item})=>(
                        <TouchableWithoutFeedback
                        onPress={() => selectVenue(item.id)}>
                        <View style={{flexDirection: 'row', width: '90%', height: 91, backgroundColor: 'white', marginTop: 12, marginLeft: '5%', borderRadius: 16, shadowColor: "rgba(0,0,0,0.6)", shadowOffset: {width: 0,height: 2,}, shadowOpacity: 0.1, shadowRadius: 3.65, elevation: 1}}>
                            <View style={{width: 65, height: 65, backgroundColor: '#EDEDED', marginTop: 13, marginLeft: 13, borderRadius: 12}}>
                                {/* Image Here */}
                            </View>
                            <View style={{flex: 1, flexDirection: 'column',}}>
                                <Text style={{ fontSize: 16, marginTop: 14, marginLeft: 16}}>{item.name}</Text>
                                <Text style={{ fontSize: 12, color: 'rgba(0,0,0,0.4)', marginTop: 4, marginLeft: 16}}>{item.address}</Text>

                                <View style={{flexDirection: 'row', marginTop: 4}}>
                                    <View style={{flex: 1, flexDirection: 'row', marginLeft: 16}}>
                                        <Icon name='star' size={16}  color="#FCBF07"/>
                                        <Icon name='star' size={16}  color="#FCBF07"/>
                                        <Icon name='star' size={16}  color="#FCBF07"/>
                                        <Icon name='star' size={16}  color="#FCBF07"/>
                                        <Icon name='star' size={16}  color="#FCBF07"/>
                                    </View>
                                    <View style={{flex: 1, alignItems: 'flex-end'}}>
                                        <Text style={{ fontSize: 12, color: 'rgba(0,0,0,0.4)', marginRight: 16}}>{item.distance}</Text>
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
}