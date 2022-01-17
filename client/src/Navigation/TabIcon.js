import React from 'react';
import {Image, StyleSheet} from 'react-native';

import {COLORS} from '../constants';

const TabIcon = ({icon, focused}) => {
  return (
    <Image
      source={icon}
      resizeMode="contain"
      style={{
        ...styles.icon,
        tintColor: focused ? COLORS.primary : COLORS.darkgray,
      }}
    />
  );
};
export default TabIcon;

const styles = StyleSheet.create({
  icon: {
    width: 25,
    height: 25,
  },
});
