import React from 'react';
import {View, Text, SafeAreaView, Image, StyleSheet} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';
import {COLORS, SIZES, FONTS} from '../constants';

const OnBoarding = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient
        colors={['#84A4FC', '#A0B9FC', '#DFE8FF']}
        style={styles.imageBack}></LinearGradient>
      <View style={styles.text}>
        <Text style={{...FONTS.h1}}>Welcome</Text>
        <Text style={{...FONTS.body2, textAlign: 'center'}}>
          Create a personalized video to educate your patient
        </Text>
      </View>
      <TouchableOpacity
        style={styles.buttonContainer}
        onPress={() => navigation.navigate('Procedures')}>
        <Text style={{color: COLORS.primary}}>Start</Text>
      </TouchableOpacity>
    </SafeAreaView>
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
  imageBack: {
    width: 284,
    height: 292,
    borderRadius: 15,
    position: 'relative',
    marginTop: 40,
  },
  text: {
    marginTop: 70,
    width: SIZES.width * 0.8,
    display: 'flex',
    alignItems: 'center',
    textAlign: 'center',
  },
  buttonContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  button: {
    height: 85,
    width: 85,
    borderRadius: 50,
    backgroundColor: COLORS.primary,
    marginTop: 30,
    marginBottom: 10,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 6,
  },
});
