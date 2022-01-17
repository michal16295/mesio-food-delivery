import React from 'react';
import {View, Image, TouchableOpacity, StyleSheet} from 'react-native';
import {
  createBottomTabNavigator,
  BottomTabBar,
} from '@react-navigation/bottom-tabs';
import Svg, {Path} from 'react-native-svg';

import {Home} from '../screens';
import TabIcon from './TabIcon';

import {COLORS, ICONS} from '../constants';
import routes from '../routes';

const Tab = createBottomTabNavigator();

const TabBarCustomButton = ({accessibilityState, children, onPress}) => {
  var isSelected = accessibilityState.selected;

  if (isSelected) {
    return (
      <View style={{flex: 1, alignItems: 'center'}}>
        <View style={{flexDirection: 'row', position: 'absolute', top: 0}}>
          <View style={{flex: 1, backgroundColor: COLORS.white}}></View>
          <Svg width={75} height={61} viewBox="0 0 75 61">
            <Path
              d="M75.2 0v61H0V0c4.1 0 7.4 3.1 7.9 7.1C10 21.7 22.5 33 37.7 33c15.2 0 27.7-11.3 29.7-25.9.5-4 3.9-7.1 7.9-7.1h-.1z"
              fill={COLORS.white}
            />
          </Svg>
          <View style={{flex: 1, backgroundColor: COLORS.white}}></View>
        </View>

        <TouchableOpacity
          style={{
            top: -22.5,
            justifyContent: 'center',
            alignItems: 'center',
            width: 50,
            height: 50,
            borderRadius: 25,
            backgroundColor: COLORS.white,
          }}
          onPress={onPress}>
          {children}
        </TouchableOpacity>
      </View>
    );
  } else {
    return (
      <TouchableOpacity
        style={{
          flex: 1,
          height: 60,
          backgroundColor: COLORS.white,
        }}
        activeOpacity={1}
        onPress={onPress}>
        {children}
      </TouchableOpacity>
    );
  }
};

const CustomTabBar = props => {
  return <BottomTabBar {...props.props} activeTintColor={COLORS.primary} />;
};

const Tabs = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      tabBar={props => <CustomTabBar props={props} />}>
      <Tab.Screen
        name={routes.HOME}
        component={Home}
        options={{
          tabBarButton: props => <TabBarCustomButton {...props} />,
          tabBarIcon: ({focused}) => (
            <TabIcon icon={ICONS.home} focused={focused} />
          ),
        }}
      />
      <Tab.Screen
        name={routes.REGISTER}
        component={Home}
        options={{
          tabBarButton: props => <TabBarCustomButton {...props} />,
          tabBarIcon: ({focused}) => (
            <TabIcon icon={ICONS.order} focused={focused} />
          ),
        }}
      />
      <Tab.Screen
        name={routes.LOGIN}
        component={Home}
        options={{
          tabBarButton: props => <TabBarCustomButton {...props} />,
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
          tabBarButton: props => <TabBarCustomButton {...props} />,
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
  icon: {
    width: 25,
    height: 25,
  },
});
