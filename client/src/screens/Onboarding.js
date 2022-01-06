import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {COLORS, SIZES, FONTS, images} from '../constants';
import LinearGradient from 'react-native-linear-gradient';

import routes from '../routes';

const OnBoarding = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={images.welcome} />

      <LinearGradient
        start={{x: 0.9, y: 0.3}}
        end={{x: 0.1, y: 1.0}}
        colors={[COLORS.primary, '#63DDA4', '#7DEFBA']}
        style={styles.text}>
        <Text style={{...FONTS.h1, color: COLORS.white}}>Welcome to Mesio</Text>
        <Text
          style={{...FONTS.body2, textAlign: 'center', color: COLORS.white}}>
          Tasty takeaway from local restaurants delivered to your door.
        </Text>
        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={() => navigation.navigate(routes.LOGIN)}>
          <Text style={{...FONTS.button, color: COLORS.white}}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            ...styles.buttonContainer,
            backgroundColor: 'rgba(255,255,255,0.25)',
          }}
          onPress={() => navigation.navigate('Procedures')}>
          <Text style={{...FONTS.button, color: COLORS.white}}>Register</Text>
        </TouchableOpacity>
      </LinearGradient>
    </View>
  );
};
export default OnBoarding;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    display: 'flex',
    alignItems: 'center',
  },
  image: {
    flex: 1,
    resizeMode: 'contain',
  },
  text: {
    marginTop: -20,
    width: SIZES.width,
    display: 'flex',
    alignItems: 'center',
    textAlign: 'center',
    backgroundColor: COLORS.primary,
    color: COLORS.white,
    paddingHorizontal: 30,
    paddingTop: 30,
    flex: 1,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  buttonContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    backgroundColor: COLORS.yellow,
    width: SIZES.width * 0.8,
    height: 50,
    marginTop: 20,
  },
});
