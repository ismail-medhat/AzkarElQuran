import { Dimensions, StyleSheet } from 'react-native';

export const { width, height } = Dimensions.get('window');

const currentDeviceHeight = Dimensions.get('window').height;
const iPhonePlusHeight = 763;
const scalingMultiplier = currentDeviceHeight / iPhonePlusHeight;
const currentDeviceWidth = Dimensions.get('window').width;


export const Colors = {
  white: '#fff',
  black: '#000000',
  black2: '#333333',
  gray: '#636368',
  gray2: '#5E5E5E',
  gray3: '#898A8D',
  gray4: '#393939',
  lightGray: '#6D6D6DBD',
  lightGray2: "#AEAEAE",
  green: '#48B02C',
  yellow: '#F1F07B',
  lightBlue: '#00BEDE',
  lightBlueCard: '#EDF8FC',
  skyBlue: '#CFF8FF',
  red: '#EB4335',
  lightGreen: '#dcf0d7',
  lightGreen2: '#F0F9EE',
  yellowCard: '#FDFDE9',
  backgroundCard: '#F7F7F7',
  cardFooter: '#FCFCFE',
  purple: '#792682',
  lightRed: '#feeae1',
  lightBlue: '#e8eaf6',
  lightPurple: '#E4DDE9',
};


export const Fonts = {
  regular: "SomarSans-Regular",
  bold: "SomarSans-Bold",
  medium: "SomarSans-Medium",
  light: "SomarSans-Light",
  cairo_bold: 'Cairo-Bold',
  cairo_regular: 'Cairo-Regular',
  cairo_medium: 'Cairo-Medium',
  cairo_light: 'Cairo-Light',

};

export const ScaleWidth = function (value) {
  if (typeof value === 'number') {
    return value * scalingMultiplier;
  } else {
    let valueNumber = parseFloat(value) / 100;
    return currentDeviceWidth * valueNumber;
  }
};

export const ScaleHeight = function (value) {
  if (typeof value === 'number') {
    return value * scalingMultiplier + (value - value * scalingMultiplier) / 4;
  } else {
    let valueNumber = parseFloat(value) / 100;
    return currentDeviceHeight * valueNumber;
  }
};

export const Spacings = {
  wSpace: Math.ceil(width * 0.12),
  wSpace1: Math.ceil(width * 0.1),
  wSpace2: Math.ceil(width * 0.08),
  wSpace3: Math.ceil(width * 0.06),
  wSpace4: Math.ceil(width * 0.04),
  wSpace5: Math.ceil(width * 0.035),
  wSpace6: Math.ceil(width * 0.03),
  wSpace7: Math.ceil(width * 0.025),
  wSpace8: Math.ceil(width * 0.02),
  wSpace9: Math.ceil(width * 0.01),
  hSpace1: Math.ceil(height * 0.1),
  hSpace2: Math.ceil(height * 0.08),
  hSpace3: Math.ceil(height * 0.06),
  hSpace4: Math.ceil(height * 0.05),
  hSpace5: Math.ceil(height * 0.04),
  hSpace6: Math.ceil(height * 0.035),
  hSpace7: Math.ceil(height * 0.03),
  hSpace8: Math.ceil(height * 0.02),
  hSpace9: Math.ceil(height * 0.01),
  hSpace10: Math.ceil(height * 0.002),
  borderWidth: Math.ceil(width * 0.002),
};

export const Typography = StyleSheet.create({
  active: {
    fontSize: ScaleWidth(11),
    // fontFamily: Fonts.regular,
    color: Colors.primary,
  },
  inActive: {
    fontSize: ScaleWidth(11),
    // fontFamily: Fonts.regular,
    color: Colors.darkBlue,
  },
});
