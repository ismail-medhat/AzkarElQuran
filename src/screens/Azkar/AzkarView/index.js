import React, { useEffect, useState, useRef } from "react";
import {
  StatusBar,
  Text,
  View,
  FlatList,
  SafeAreaView,

} from "react-native";
import styles from "./styles";
import {
  Colors,
  Fonts,
  ScaleHeight,
  ScaleWidth,
} from "../../../constants/foundation";

const AzkarViewScreen = (props) => {
  const { azkarItems } = props.route.params;

  const renderItem = ({ item }) => (
    <View style={styles.itemFullContainer}>
      <Text style={styles.itemTxt}>{item}</Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <View style={{ flex: 1 }}>
        <FlatList
          data={azkarItems}
          renderItem={renderItem}
          keyExtractor={(item, index) => index}
        />
      </View>
    </SafeAreaView>
  );
};

export default AzkarViewScreen;
