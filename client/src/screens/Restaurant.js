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
import {Header} from '../components/Restaurant';
import Svg, {Path} from 'react-native-svg';

const Restaurant = ({route, navigation}) => {
  const {item} = route.params;
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.inner}>
        <View style={styles.imgContianer}>
          <Image style={styles.img} source={item.image} resizeMode="cover" />
          <View style={styles.circle}>
            <Image
              source={images.rockCafeLogo}
              resizeMode="contain"
              style={{width: 100}}
            />
          </View>
        </View>
        <Text style={{...FONTS.h2, textAlign: 'center', marginTop: 55}}>
          {item.title}
        </Text>
      </View>
    </SafeAreaView>
  );
};
export default Restaurant;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    backgroundColor: COLORS.lightGray,
    flex: 1,
  },
  inner: {
    display: 'flex',
    flex: 1,
    padding: 10,
  },
  imgContianer: {
    borderRadius: 10,
    backgroundColor: 'red',
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
    backgroundColor: COLORS.lightGray,
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
