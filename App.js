import React from 'react';
import {SafeAreaView, View, StatusBar} from 'react-native';
import MainPage from './src/MainPage';

const App = () => {
  return (
    <View style={{flex: 1}}>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={{flex: 1}}>
        <MainPage />
      </SafeAreaView>
    </View>
  );
};

export default App;
