/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {StyleSheet} from 'react-native';
import Toast from 'react-native-toast-message';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {COLORS} from './src/constants';
import {OnBoarding, Login, Register} from './src/screens';
import routes from './src/routes';

const Stack = createStackNavigator();
const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    border: 'transparent',
  },
};

const App = () => {
  return (
    <>
      <NavigationContainer theme={theme}>
        <Stack.Navigator initialRouteName={routes.ON_BOARDING}>
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
            name={routes.REGISTER}
            component={Register}
            options={{
              title: 'Sign Up',
              headerTintColor: COLORS.black,
              headerBackTitle: true,
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
      <Toast />
    </>
  );
};

export default App;
