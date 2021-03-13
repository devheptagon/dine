import React from 'react';
import {Button, View, Text} from 'react-native';

const Title = (props) => (
  <Text style={{fontSize: 24, marginTop: 50, marginLeft: 20}}>
    {props.label}
  </Text>
);

const NavigateButton = (props) => (
  <Button
    onPress={(e) => props.navigation.push(props.target)}
    title={props.label}
  />
);

export const MyAccount = ({navigation}) => {
  return <Title label="My Account" />;
};

export const VenueOffers = ({navigation}) => {
  return <Title label="Venue Offers" />;
};

export const VenueAbout = ({navigation}) => {
  return <Title label="Venue About" />;
};

export const VenueBasket = ({navigation}) => {
  return (
    <View>
      <Title label="Venue Basket" />
      <NavigateButton
        navigation={navigation}
        target="VenueBasketPay"
        label="Pay for order"
      />
    </View>
  );
};

export const VenueBasketPay = ({navigation}) => {
  return (
    <View>
      <Title label="Venue Basket Pay" />
      <NavigateButton
        navigation={navigation}
        target="VenueBasketPayComplete"
        label="Confirm Payment"
      />
    </View>
  );
};

export const VenueBasketPayComplete = ({navigation}) => {
  return (
    <View>
      <Title label="Thank you for your order" />
      <NavigateButton
        navigation={navigation}
        target="VenueFinder"
        label="Go home"
      />
    </View>
  );
};
