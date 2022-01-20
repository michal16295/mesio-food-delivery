import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {COLORS, SIZES, FONTS, ICONS, images} from '../constants';

import routes from '../routes';
import {Stars} from '../components/Form';
import Svg, {Path} from 'react-native-svg';

const RestaurantsList = ({route, navigation}) => {
  const {title, orderBy} = route.params;
  return (
    <SafeAreaView style={styles.container}>
      <Text>{title}</Text>
    </SafeAreaView>
  );
};
export default RestaurantsList;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    backgroundColor: COLORS.mediumGray,
    flex: 1,
  },
  inner: {
    display: 'flex',
    flex: 1,
    padding: 10,
  },
  imgContianer: {
    borderRadius: 10,
    position: 'relative',
  },
  img: {
    borderRadius: 10,
    width: '100%',
    height: SIZES.height * 0.25,
  },
  circle: {
    height: 120,
    width: 120,
    borderRadius: 60,
    backgroundColor: COLORS.mediumGray,
    position: 'absolute',
    bottom: -60,
    alignSelf: 'center',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  innerCircle: {
    height: 82,
    width: 82,
    borderRadius: 41,
    backgroundColor: 'red',
  },
});
