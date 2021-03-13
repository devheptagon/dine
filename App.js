import React from 'react';
import {SafeAreaView, View, StatusBar} from 'react-native';
import {Provider} from 'react-redux';
import {initStore} from './src/redux/store';
import MainPage from './src/MainPage';
import FlexView from './src/components/flexView';

const App = () => {
  const [store, setStore] = React.useState(null);
  React.useEffect(() => {
    initStore().then((newStore) => {
      setStore(newStore);
    });
  }, []);
  return store ? (
    <Provider store={store}>
      <FlexView>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView style={{flex: 1}}>
          <MainPage />
        </SafeAreaView>
      </FlexView>
    </Provider>
  ) : null;
};

export default App;
