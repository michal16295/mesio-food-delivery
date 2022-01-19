import React from 'react';
import {View, TouchableOpacity, StyleSheet} from 'react-native';
import Svg, {Path} from 'react-native-svg';

import {COLORS} from '../constants';

const TabButton = ({accessibilityState, children, onPress}) => {
  const isSelected = accessibilityState.selected;

  return (
    <>
      {isSelected ? (
        <View style={{flex: 1, alignItems: 'center'}}>
          <View style={{flexDirection: 'row', position: 'absolute', top: 0}}>
            <View style={{flex: 1, backgroundColor: COLORS.white}}></View>
            <Svg width={74} height={61} viewBox="0 0 75 61">
              <Path
                d="M75.2 0v61H0V0c4.1 0 7.4 3.1 7.9 7.1C10 21.7 22.5 33 37.7 33c15.2 0 27.7-11.3 29.7-25.9.5-4 3.9-7.1 7.9-7.1h-.1z"
                fill={COLORS.white}
              />
            </Svg>
            <View style={{flex: 1, backgroundColor: COLORS.white}}></View>
          </View>

          <TouchableOpacity style={styles.selected} onPress={onPress}>
            {children}
          </TouchableOpacity>
        </View>
      ) : (
        <TouchableOpacity
          style={styles.notSelected}
          onPress={onPress}
          activeOpacity={1}>
          {children}
        </TouchableOpacity>
      )}
    </>
  );
};
export default TabButton;

const styles = StyleSheet.create({
  notSelected: {
    flex: 1,
    height: 60,
    backgroundColor: COLORS.white,
  },
  selected: {
    top: -21.5,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: COLORS.white,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
});
