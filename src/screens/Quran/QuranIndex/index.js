import React, { useState } from "react";
import {
  StatusBar,
  Text,
  View,
  FlatList,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import styles from "./styles";
import { QuranPages } from "../../../constants/QuranPages";
import {
  Colors,
  Fonts,
  ScaleHeight,
  ScaleWidth,
} from "../../../constants/foundation";
import { useNavigation } from "@react-navigation/native";
import { GeneralModal } from "../../../components";
import { SetQuranStopIndex } from "../../../redux/quranSlice";
import { useSelector,useDispatch } from "react-redux";

const QuranIndexScreen = () => {
  const navigation = useNavigation();
  const [showModal, setShowModal] = useState(false);
  const { quranStopIndex } = useSelector(state => state.quran);
  const dispatch = useDispatch()

  const renderItem = ({ item }) => (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate("QuranView", {
          toIndex: item.startPage,
          isFullQuran: false,
        })
      }
      style={styles.itemContainer}
    >
      <Text style={styles.itemTxt}>{item.surah}</Text>
    </TouchableOpacity>
  );

  const renderItemHeader = () => (
    <TouchableOpacity
      onPress={() =>
        setShowModal(true)
      }
      style={styles.itemFullContainer}
    >
      <Text style={styles.itemTxt}>{"المصحف الشريف"}</Text>
    </TouchableOpacity>
  );
  const renderItemFooter = () => (
    <View style={{ marginVertical: ScaleHeight(20) }} />
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={{ alignSelf: "center" }}>
        <FlatList
          data={QuranPages}
          renderItem={renderItem}
          keyExtractor={(item, index) => index}
          numColumns={2}
          key={(item, index) => index}
          ListHeaderComponent={renderItemHeader}
          ListFooterComponent={renderItemFooter}
        />
      </View>
      <GeneralModal
        modalVisible={showModal}
        setModalVisible={setShowModal}
        modalMessage={"هل تريد استكمال القراءة في المصحف الشريف"}
        firstBtnTxt={"استكمال"}
        onFirstBtn={() => {
          navigation.navigate("QuranView", {
            toIndex: quranStopIndex,
            isFullQuran:true
          });
          setShowModal(false);
        }}
        secondBtnTxt={"البدء من اول المصحف"}
        onSecondBtn={() => {
          dispatch(SetQuranStopIndex(1))
          navigation.navigate("QuranView", {
            toIndex: 1,
            isFullQuran:true
          });
          setShowModal(false);
        }}
      />
    </SafeAreaView>
  );
};

export default QuranIndexScreen;
