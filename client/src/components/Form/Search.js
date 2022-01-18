import React from 'react';
import {View, Image, StyleSheet, TextInput} from 'react-native';
import {COLORS, SIZES, FONTS, ICONS} from '../../constants';

const Search = ({val, secure, placeholder}) => {
  return (
    <View style={{...FONTS.body1, ...styles.inputView}}>
      <View style={{flex: 0.15}}>
        <Image source={ICONS.search} />
      </View>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        value={val}
        secureTextEntry={secure}
      />
    </View>
  );
};
export default Search;

const styles = StyleSheet.create({
  inputView: {
    borderRadius: 10,
    width: SIZES.width * 0.9,
    backgroundColor: COLORS.white,
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
