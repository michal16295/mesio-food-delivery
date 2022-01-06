import {Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');

export const COLORS = {
  // base colors
  primary: '#1DBF73', // green
  secondary: '#84A4FC', // blue

  // colors
  black: '#262B2E',
  white: '#FFFFFF',

  lightGray: '#F4F5F7',
  transparent: 'transparent',
  darkgray: '#8A8D9F',
  yellow: '#FFBC00',
  red: '#FE2121',
  lightBlue: '#58C0FC',
  lightGreen: '#2DD0C3',
  purple: '#5634D2',
};

export const SIZES = {
  // global sizes
  base: 8,
  font: 14,
  radius: 30,
  padding: 10,
  padding2: 12,

  // font sizes
  largeTitle: 50,
  h1: 22,
  h2: 20,
  h3: 20,
  h4: 19,
  body1: 16,
  body2: 16,
  body3: 14,
  body4: 14,
  body5: 12,

  // app dimensions
  width,
  height,
};

export const FONTS = {
  h1: {fontFamily: 'Roboto-Bold', fontSize: SIZES.h1, lineHeight: 34},
  h2: {fontFamily: 'Roboto-Bold', fontSize: SIZES.h2, lineHeight: 30},
  body1: {
    fontFamily: 'Roboto-Bold',
    fontSize: SIZES.body1,
    lineHeight: 36,
  },
  body2: {
    fontFamily: 'Roboto-Regular',
    fontSize: SIZES.body2,
    lineHeight: 24,
  },
  body3: {
    fontFamily: 'Roboto-Bold',
    fontSize: SIZES.body3,
    lineHeight: 22,
  },
  body4: {
    fontFamily: 'Roboto-Regular',
    fontSize: SIZES.body4,
    lineHeight: 22,
  },
  caption1: {
    fontFamily: 'Roboto-Bold',
    fontSize: SIZES.body5,
    lineHeight: 22,
  },
  caption2: {
    fontFamily: 'Roboto-Regular',
    fontSize: SIZES.body5,
    lineHeight: 22,
  },
  button: {
    fontFamily: 'Roboto-Medium',
    fontSize: 18,
    lineHeight: 27,
  },
};

const appTheme = {COLORS, SIZES, FONTS};

export default appTheme;
