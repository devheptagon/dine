import React, {useState, useEffect, useRef} from 'react';
import {Button, SafeAreaView, Text, StatusBar} from 'react-native';

export const MyAccount = ({navigation}) => {
  return (
    <Text style={{fontSize: 24, marginTop: 50, marginLeft: 20}}>
      My Account
    </Text>
  );
};

export const VenueOffers = ({navigation}) => {
  return (
    <Text style={{fontSize: 24, marginTop: 50, marginLeft: 20}}>
      Venue Offers
    </Text>
  );
};

export const VenueAbout = ({navigation}) => {
  return (
    <Text style={{fontSize: 24, marginTop: 50, marginLeft: 20}}>
      Venue About
    </Text>
  );
};

export const VenueBasket = ({navigation}) => {
  return (
    <>
      <Text style={{fontSize: 24, marginTop: 50, marginLeft: 20}}>
        Venue Basket
      </Text>

      <Button
        onPress={(e) => navigation.push('VenueBasketPay')}
        title="Pay for order"></Button>
    </>
  );
};

export const VenueBasketPay = ({navigation}) => {
  return (
    <>
      <Text style={{fontSize: 24, marginTop: 50, marginLeft: 20}}>
        Venue Basket Pay
      </Text>

      <Button
        onPress={(e) => navigation.push('VenueBasketPayComplete')}
        title="Confirm Payment"></Button>
    </>
  );
};

export const VenueBasketPayComplete = ({navigation}) => {
  return (
    <>
      <Text style={{fontSize: 24, marginTop: 50, marginLeft: 20}}>
        Thank you for your order
      </Text>

      <Button
        onPress={(e) => navigation.navigate('preVenueSelection')}
        title="Go home"></Button>
    </>
  );
};
