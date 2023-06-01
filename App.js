import React, {useEffect} from 'react';
import {Provider} from 'react-redux';
import {persistor, store} from './src/redux';
import {PersistGate} from 'redux-persist/integration/react';
import MainStackNavigator from './src/navigation/MainStack';
import {LogBox, I18nManager} from 'react-native';

function App() {
  useEffect(() => {
    LogBox.ignoreAllLogs();
    const ISRTL = I18nManager.isRTL;
    console.log('ISRTL :: ', ISRTL);
  }, []);

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <MainStackNavigator />
      </PersistGate>
    </Provider>
  );
}

export default App;
