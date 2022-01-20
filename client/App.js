/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import Toast from 'react-native-toast-message';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Provider} from 'react-redux';
import store from './src/store';

import {COLORS} from './src/constants';
import {
  OnBoarding,
  Login,
  Register,
  Restaurant,
  RestaurantsList,
} from './src/screens';
import routes from './src/routes';
import Tabs from './src/Navigation/Tabs';

const Stack = createStackNavigator();
const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    border: 'transparent',
  },
};

const options = {
  title: null,
  headerTintColor: COLORS.black,
  headerBackTitle: true,
  headerStyle: {
    backgroundColor: COLORS.mediumGray,
  },
};

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer theme={theme}>
        <Stack.Navigator initialRouteName={routes.HOME}>
          <Stack.Screen
            name={routes.HOME}
            component={Tabs}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name={routes.ON_BOARDING}
            component={OnBoarding}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name={routes.LOGIN}
            component={Login}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name={routes.RESTAURANTS}
            component={RestaurantsList}
            options={options}
          />
          <Stack.Screen
            name={routes.RESTAURANT}
            component={Restaurant}
            options={options}
          />
          <Stack.Screen
            name={routes.REGISTER}
            component={Register}
            options={{
              title: 'Sign Up',
              ...options,
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
      <Toast />
    </Provider>
  );
};

export default App;
