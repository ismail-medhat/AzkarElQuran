import {StyleSheet, Text, View} from 'react-native';
import { Colors,ScaleHeight,ScaleWidth,Fonts } from '../../../constants/foundation';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  itemFullContainer:{
    paddingVertical: ScaleHeight(15),
    borderRadius: ScaleWidth(5),
    marginVertical:ScaleHeight(5),
    borderLeftWidth:ScaleWidth(5),
    width:ScaleWidth('94%'),
    marginHorizontal: ScaleWidth('2%'),
    backgroundColor: Colors.yellow,
    borderLeftColor: Colors.red
  },
  
  itemTxt:{
    fontFamily: Fonts.cairo_bold,
    alignSelf: "center",
    fontSize: ScaleWidth(15),
  }
});

export default styles;
