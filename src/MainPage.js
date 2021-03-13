import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {VenueFinder} from './resources/venueFinder';
import {VenueMenu} from './resources/venueMenu';
import {VenueMenuItems} from './resources/venueMenuItems';
import {VenueMenuSelectedItem} from './resources/venueMenuSelectedItem';
import Colors from './utils/colors';

const CoreStack = createStackNavigator();
const VenueStack = createBottomTabNavigator();

import {
  MyAccount,
  VenueOffers,
  VenueAbout,
  VenueBasket,
  VenueBasketPay,
  VenueBasketPayComplete,
} from './screens';

const venueSelection = () => (
  <VenueStack.Navigator
    tabBarOptions={{activeTintColor: Colors.red2, headerShown: false}}>
    <VenueStack.Screen
      name="VenueMenu"
      component={VenueMenu}
      options={{
        tabBarLabel: '',
        tabBarIcon: ({color, size}) => (
          <Icon
            name="book-open-outline"
            color={color}
            size={size}
            style={{marginTop: 10, marginBottom: -3}}
          />
        ),
      }}
    />
    <VenueStack.Screen
      name="VenueOffers"
      component={VenueOffers}
      options={{
        tabBarLabel: '',
        tabBarIcon: ({color, size}) => (
          <Icon
            name="bulletin-board"
            color={color}
            size={size}
            style={{marginTop: 10, marginBottom: -3}}
          />
        ),
      }}
    />
    <VenueStack.Screen
      name="VenueBasket"
      component={VenueBasket}
      options={{
        tabBarLabel: '',
        tabBarIcon: ({color, size}) => (
          <Icon
            name="basket"
            color={color}
            size={size}
            style={{marginTop: 10, marginBottom: -3}}
          />
        ),
      }}
    />
  </VenueStack.Navigator>
);

const MainPage = () => {
  return (
    <NavigationContainer>
      <CoreStack.Navigator>
        <CoreStack.Screen
          name="VenueFinder"
          options={{headerShown: false}}
          component={VenueFinder}
        />
        <CoreStack.Screen
          name="MyAccount"
          options={{headerShown: false}}
          component={MyAccount}
        />
        <CoreStack.Screen
          name="venueSelection"
          options={{headerShown: false}}
          component={venueSelection}
        />

        <CoreStack.Screen
          name="VenueMenuItems"
          options={{headerShown: false}}
          component={VenueMenuItems}
        />
        <CoreStack.Screen
          name="VenueMenuSelectedItem"
          options={{headerShown: false}}
          component={VenueMenuSelectedItem}
        />

        <CoreStack.Screen
          name="VenueAbout"
          options={{headerShown: false}}
          component={VenueAbout}
        />
        <CoreStack.Screen
          name="VenueBasketPay"
          options={{headerShown: false}}
          component={VenueBasketPay}
        />
        <CoreStack.Screen
          name="VenueBasketPayComplete"
          options={{headerShown: false}}
          component={VenueBasketPayComplete}
        />
      </CoreStack.Navigator>
    </NavigationContainer>
  );
};

export default MainPage;
