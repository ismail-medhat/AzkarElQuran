import { StyleSheet } from "react-native";
import {
  Colors,
  Fonts,
  ScaleHeight,
  ScaleWidth,
} from "../../constants/foundation";

export const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: ScaleWidth("5%"),
    width: ScaleWidth("90%"),
    backgroundColor: "white",
    borderRadius: 20,
    paddingVertical: ScaleHeight(20),
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalText: {
    marginBottom: ScaleHeight(20),
    marginTop: ScaleHeight(30),
    textAlign: "center",
    fontFamily: Fonts.cairo_bold,
    fontSize: ScaleWidth(14),
  },
  firstBtnBox: {
    borderRadius: ScaleWidth(5),
    backgroundColor: Colors.purple,
    width: ScaleWidth("40%"),
    height: ScaleHeight("5%"),
    borderColor: Colors.purple,
    borderWidth: ScaleWidth(2),
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: ScaleWidth(2),
  },
  firstBtnText: {
    fontFamily: Fonts.cairo_bold,
    color: Colors.white,
  },
  secondBtnBox: {
    borderRadius: ScaleWidth(5),
    backgroundColor: Colors.white,
    width: ScaleWidth("40%"),
    height: ScaleHeight("5%"),
    borderColor: Colors.purple,
    borderWidth: ScaleWidth(2),
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: ScaleWidth(2),
  },
  secondBtnText: {
    fontFamily: Fonts.cairo_bold,
    color: Colors.purple,
  },
  rowCenter: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
});
