import React, {useState, useEffect, useRef} from 'react';
import {Button, SafeAreaView, Text, StatusBar} from 'react-native';

export const MyAccount = ({navigation}) => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <StatusBar barStyle="light-content" />

      <Text style={{fontSize: 24, marginTop: 50, marginLeft: 20}}>
        My Account
      </Text>
    </SafeAreaView>
  );
};

export const VenueOffers = ({navigation}) => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <StatusBar barStyle="light-content" />

      <Text style={{fontSize: 24, marginTop: 50, marginLeft: 20}}>
        Venue Offers
      </Text>
    </SafeAreaView>
  );
};

export const VenueAbout = ({navigation}) => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <StatusBar barStyle="light-content" />

      <Text style={{fontSize: 24, marginTop: 50, marginLeft: 20}}>
        Venue About
      </Text>
    </SafeAreaView>
  );
};

export const VenueBasket = ({navigation}) => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <StatusBar barStyle="light-content" />

      <Text style={{fontSize: 24, marginTop: 50, marginLeft: 20}}>
        Venue Basket
      </Text>

      <Button
        onPress={(e) => navigation.push('VenueBasketPay')}
        title="Pay for order"></Button>
    </SafeAreaView>
  );
};

export const VenueBasketPay = ({navigation}) => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <StatusBar barStyle="light-content" />

      <Text style={{fontSize: 24, marginTop: 50, marginLeft: 20}}>
        Venue Basket Pay
      </Text>

      <Button
        onPress={(e) => navigation.push('VenueBasketPayComplete')}
        title="Confirm Payment"></Button>
    </SafeAreaView>
  );
};

export const VenueBasketPayComplete = ({navigation}) => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <StatusBar barStyle="light-content" />

      <Text style={{fontSize: 24, marginTop: 50, marginLeft: 20}}>
        Thank you for your order
      </Text>

      <Button
        onPress={(e) => navigation.navigate('preVenueSelection')}
        title="Go home"></Button>
    </SafeAreaView>
  );
};
