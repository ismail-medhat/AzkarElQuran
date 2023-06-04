import React, { useState } from "react";
import {
  StatusBar,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import styles from "./styles";
import { AzkarList } from "../../../constants/Azkar";
import { useNavigation } from "@react-navigation/native";

const AzkarIndexScreen = () => {
  const navigation = useNavigation();
  const renderItem = ({ item }) => (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate("AzkarView", { azkarItems: item.prayers })
      }
      style={styles.itemFullContainer}
    >
      <Text style={styles.itemTxt}>{item.category}</Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <View style={{ flex: 1 }}>
        <FlatList
          data={AzkarList}
          renderItem={renderItem}
          keyExtractor={(item, index) => index}
        />
      </View>
    </SafeAreaView>
  );
};

export default AzkarIndexScreen;
