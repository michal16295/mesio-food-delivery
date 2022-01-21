import React from 'react';
import {View, Image, StyleSheet, Text} from 'react-native';
import {ICONS, COLORS} from '../../constants';

const MAX = 5;

const Stars = ({total = 1, size = 20}) => {
  const getStarts = () => {
    let list = [];

    for (let i = 0; i < MAX; i++) {
      list.push(
        <Image
          source={ICONS.star}
          resizeMode="contain"
          key={i.toString()}
          style={{
            tintColor: i >= total ? COLORS.darkgray : COLORS.yellow,
            width: size,
          }}
        />,
      );
    }
    return list;
  };

  return <View style={styles.container}>{getStarts()}</View>;
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
