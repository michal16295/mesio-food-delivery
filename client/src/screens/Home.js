import React, {useState} from 'react';
import {View, Text, Image, StyleSheet, SafeAreaView} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {COLORS, SIZES, FONTS, ICONS, images} from '../constants';

import routes from '../routes';
import {Search} from '../components/Form';

const Home = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.heading}>
        <View>
          <Text style={{...FONTS.h2}}>Hello</Text>
          <Text style={{...FONTS.body2}}>Michal Barski</Text>
        </View>
        <View style={styles.cartIcon}>
          <Image
            source={ICONS.cart}
            style={{tintColor: COLORS.primary, height: 20, width: 20}}
          />
        </View>
      </View>
      <View style={{paddingHorizontal: 20}}>
        <Search placeholder="Search..." />
      </View>
    </SafeAreaView>
  );
};
export default Home;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
  },
  heading: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    padding: 20,
  },
  cartIcon: {
    height: 40,
    width: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(29, 191, 115, 0.2)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
