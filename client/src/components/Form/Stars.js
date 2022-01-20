import React from 'react';
import {View, Image, StyleSheet, Text} from 'react-native';
import {ICONS, COLORS} from '../../constants';

const MAX = 5;

const Stars = ({total = 1}) => {
  const getStarts = () => {
    let list = [];

    for (let i = 0; i < MAX; i++) {
      list.push(
        <Image
          source={ICONS.star}
          key={i.toString()}
          style={{tintColor: i >= total ? COLORS.darkgray : COLORS.yellow}}
        />,
      );
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
