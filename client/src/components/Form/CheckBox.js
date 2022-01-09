import React from 'react';
import {View, Image, StyleSheet, Text} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {COLORS, SIZES, images} from '../../constants';

const CheckBox = ({text, display, handlePress}) => {
  return (
    <View style={styles.row}>
      <TouchableOpacity onPress={handlePress} style={styles.checkBox}>
        {display && <Image source={images.v} />}
      </TouchableOpacity>
      <Text>{text}</Text>
    </View>
  );
};
export default CheckBox;

const styles = StyleSheet.create({
  checkBox: {
    backgroundColor: COLORS.primary,
    height: 16,
    width: 16,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 3,
    marginRight: 5,
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
  },
});
