import React, { useEffect, useState,useRef } from "react";
import {
  StatusBar,
  Text,
  View,
  FlatList,
  SafeAreaView,
  TouchableOpacity,
  Image,
  ActivityIndicator,
} from "react-native";
import styles from "./styles";
import { QuranImages } from "../../../constants/QuranImages";
import { SetQuranStopIndex } from "../../../redux/quranSlice";
import {
  Colors,
  Fonts,
  ScaleHeight,
  ScaleWidth,
} from "../../../constants/foundation";
import { IMAGES } from "../../../constants/Images";
import { useSelector, useDispatch } from "react-redux";

const QuranViewScreen = (props) => {
  const { toIndex, isFullQuran } = props.route.params;
  const [isRef, setIsRef] = useState(false);
  const flatListRef = useRef(null);
  const dispatch = useDispatch();

  const getItemLayout = (_, index) => ({
    length: ScaleHeight("93%"), // Set the height of each item
    offset: ScaleHeight("90%") * index,
    index,
  });

  useEffect(() => {
    setInterval(() => {
      setIsRef(true);
    }, 500);
  }, [isRef]);

  const renderItem = ({ item }) => (
    <View
      style={{
        width: ScaleWidth("100%"),
        height: ScaleHeight("90%"),
      }}
    >
      <Image
        source={item.quranImage}
        resizeMode="stretch"
        style={{ width: ScaleWidth("100%"), height: ScaleHeight("90%") }}
      />
    </View>
  );

  const renderItemFooter = () => (
    <View style={{ marginVertical: ScaleHeight(20) }} />
  );

  const handleScroll = (event) => {
    const { contentOffset } = event.nativeEvent;
    const visibleIndex = Math.floor(contentOffset.y / ScaleHeight("88%"));
    // Execute your desired function here based on the visible index
    //console.log('Visible Index:', visibleIndex);
    if(isFullQuran)
    dispatch(SetQuranStopIndex(visibleIndex+1))
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <View>
        {!isRef ? (
          <View
            style={{
              alignItems: "center",
              justifyContent: "center",
              height: ScaleHeight("80%"),
            }}
          >
            <Image
              source={IMAGES.splashLogo}
              resizeMode="contain"
              style={{
                width: ScaleWidth(150),
                height: ScaleWidth(150),
                marginBottom: ScaleHeight(15),
              }}
            />
            <ActivityIndicator size={"large"} />
          </View>
        ) : (
          <FlatList
            ref={flatListRef}
            data={QuranImages}
            renderItem={renderItem}
            keyExtractor={(item, index) => index.toString()}
            onScroll={handleScroll}
            scrollEventThrottle={16} 
            getItemLayout={getItemLayout}
            ListFooterComponent={renderItemFooter}
            initialScrollIndex={toIndex - 1}
          />
        )}
      </View>
    </SafeAreaView>
  );
};

export default QuranViewScreen;
