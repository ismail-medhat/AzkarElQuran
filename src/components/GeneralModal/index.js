import { View, Modal, Text, StatusBar, TouchableOpacity } from "react-native";
import React from "react";
import { styles } from "./styles";
import AntDesign from "react-native-vector-icons/AntDesign";
import {
  Colors,
  Fonts,
  ScaleHeight,
  ScaleWidth,
} from "../../constants/foundation";

const GeneralModal = ({
  setModalVisible,
  modalVisible,
  modalMessage,
  firstBtnTxt,
  onFirstBtn,
  secondBtnTxt,
  onSecondBtn,
  transparent = false,
  containerStyle,
  statusBarTranslucent = false,
}) => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <TouchableOpacity
              onPress={() => {
                setModalVisible(!modalVisible);
              }}
              style={{
                position: "absolute",
                left: ScaleWidth(10),
                top: ScaleHeight(10),
              }}
            >
              <AntDesign
                name={"closecircleo"}
                color={Colors.purple}
                size={ScaleWidth(25)}
              />
            </TouchableOpacity>
            <Text style={styles.modalText}>{modalMessage}</Text>
            <View style={styles.rowCenter}>
              {firstBtnTxt && (
                <TouchableOpacity
                  style={styles.firstBtnBox}
                  onPress={onFirstBtn}
                >
                  <Text style={styles.firstBtnText}>{firstBtnTxt}</Text>
                </TouchableOpacity>
              )}

              {secondBtnTxt && (
                <TouchableOpacity
                  style={styles.secondBtnBox}
                  onPress={onSecondBtn}
                >
                  <Text style={styles.secondBtnText}>{secondBtnTxt}</Text>
                </TouchableOpacity>
              )}
            </View>
          </View>
        </View>
      </Modal>
    </>
  );
};

export default GeneralModal;
