import React from 'react';
import {View, StyleSheet} from 'react-native';
import {
  createBottomTabNavigator,
  BottomTabBar,
} from '@react-navigation/bottom-tabs';

import {Home} from '../screens';
import TabIcon from './TabIcon';
import TabButton from './TabButton';

import {COLORS, ICONS} from '../constants';
import routes from '../routes';

const Tab = createBottomTabNavigator();

const CustomTabBar = props => {
  return (
    <View>
      <View style={styles.bottomTabBar}></View>
      <BottomTabBar {...props.props} activeTintColor={COLORS.primary} />
    </View>
  );
};

const Tabs = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        showLabel: false,
        style: styles.navigator,
      }}
      initialRouteName={routes.HOME}
      tabBar={props => <CustomTabBar props={props} />}>
      <Tab.Screen
        name={routes.HOME}
        component={Home}
        options={{
          tabBarButton: props => <TabButton {...props} />,
          tabBarIcon: ({focused}) => (
            <TabIcon icon={ICONS.home} focused={focused} />
          ),
        }}
      />
      <Tab.Screen
        name={routes.REGISTER}
        component={Home}
        options={{
          tabBarButton: props => <TabButton {...props} />,
          tabBarIcon: ({focused}) => (
            <TabIcon icon={ICONS.order} focused={focused} />
          ),
        }}
      />
      <Tab.Screen
        name={routes.LOGIN}
        component={Home}
        options={{
          tabBarButton: props => <TabButton {...props} />,
          tabBarIcon: ({focused}) => (
            <TabIcon icon={ICONS.person} focused={focused} />
          ),
        }}
      />
      <Tab.Screen
        name={routes.ON_BOARDING}
        activeTintColor={COLORS.primary}
        component={Home}
        options={{
          tabBarButton: props => <TabButton {...props} />,
          tabBarIcon: ({focused}) => (
            <TabIcon icon={ICONS.cart} focused={focused} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default Tabs;

const styles = StyleSheet.create({
  bottomTabBar: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 30,
    backgroundColor: COLORS.white,
  },
  navigator: {
    position: 'absolute',
    left: 0,
    bottom: 0,
    right: 0,
    borderTopWidth: 0,
    backgroundColor: 'transparent',
    elevation: 0,
  },
});
