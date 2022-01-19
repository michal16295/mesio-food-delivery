import React from 'react';
import {View, Image, StyleSheet, Text} from 'react-native';
import {ICONS} from '../../constants';

const MAX = 5;

const Stars = ({total = 1}) => {
  const getStarts = () => {
    let list = [];

    for (let i = 0; i < total; i++) {
      list.push(<Image source={ICONS.star} key={i.toString()} />);
    }
    return list;
  };

  return (
    <View style={styles.container}>
      {getStarts()}
      <Text>(20+)</Text>
    </View>
  );
};
export default Stars;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },

  input: {
    flex: 1,
  },
});
