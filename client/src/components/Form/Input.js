import React from 'react';
import {View, Image, StyleSheet, TextInput} from 'react-native';
import {COLORS, SIZES, FONTS} from '../../constants';

const Input = ({func, val, secure, placeholder, icon = null, title}) => {
  return (
    <View style={{...FONTS.body1, ...styles.inputView}}>
      {icon && (
        <View style={{flex: 0.15}}>
          <Image source={icon} />
        </View>
      )}
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        value={val}
        secureTextEntry={secure}
        onChangeText={text => func(title, text)}
      />
    </View>
  );
};
export default Input;

const styles = StyleSheet.create({
  inputView: {
    margin: 10,
    borderRadius: 10,
    width: SIZES.width * 0.8,
    backgroundColor: COLORS.lightGray,
    padding: 13,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },

  input: {
    flex: 1,
  },
});
