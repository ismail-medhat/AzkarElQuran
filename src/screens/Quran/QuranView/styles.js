import {StyleSheet, Text, View} from 'react-native';
import { Colors,ScaleHeight,ScaleWidth,Fonts } from '../../../constants/foundation';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
itemContainer:{
  marginHorizontal: ScaleWidth(10),
  paddingVertical: ScaleHeight(15),
  borderRadius: ScaleWidth(5),
  backgroundColor:Colors.lightBlue,
  marginVertical:ScaleHeight(5),
  borderLeftWidth:ScaleWidth(10),
  borderLeftColor:Colors.green
},
itemTxt:{
  fontFamily: Fonts.cairo_bold,
  alignSelf: "center",
  fontSize: ScaleWidth(15),
}
});

export default styles;
