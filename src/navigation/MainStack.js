import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import BottomNavigation from './BottomNavigation';
import { SplashScreen,QuranViewScreen,AzkarViewScreen } from '../screens';


const Stack = createStackNavigator();

const MainStackNavigator = () => {

  return (
    <NavigationContainer>
      <Stack.Navigator
      initialRouteName='Splashscreen'
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Splashscreen" component={SplashScreen} />
        <Stack.Screen name="BottomNavigator" component={BottomNavigation} />
        <Stack.Screen name="QuranView" component={QuranViewScreen} />
        <Stack.Screen name="AzkarView" component={AzkarViewScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainStackNavigator;
