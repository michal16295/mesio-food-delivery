import React from 'react';
import {Text, StyleSheet} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {COLORS, SIZES, FONTS} from '../../constants';

const Button = ({handleClick, text, color}) => {
  return (
    <TouchableOpacity
      onPress={() => handleClick()}
      style={{backgroundColor: color, ...styles.button}}>
      <Text style={{...FONTS.button, color: COLORS.white}}>{text}</Text>
    </TouchableOpacity>
  );
};
export default Button;

const styles = StyleSheet.create({
  button: {
    borderRadius: 10,
    width: SIZES.width * 0.8,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 0.1,
    shadowRadius: 1,
    elevation: 3,
    marginTop: 15,
  },
});
