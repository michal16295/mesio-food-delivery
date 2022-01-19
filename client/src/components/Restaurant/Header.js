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
import {COLORS, SIZES, FONTS, ICONS, images} from '../../constants';

const Header = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity style={styles.btn}>
        <Image source={ICONS.back} style={{tintColor: COLORS.darkgray}} />
      </TouchableOpacity>
    </SafeAreaView>
  );
};
export default Header;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    position: 'absolute',
    top: 20,
    zIndex: 10,
    right: 20,
    left: 20,
  },
  btn: {
    height: 30,
    width: 30,
    borderRadius: 15,
    backgroundColor: COLORS.lightGray,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
