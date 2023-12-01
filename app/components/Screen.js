import React from "react";
import Constants from "expo-constants";
import { SafeAreaView, StyleSheet, View, Dimensions } from "react-native";

const dimension = Dimensions.get('window');

function Screen({ children, style }) {
  return (
    <SafeAreaView style={[styles.screen]}>
      <View style={style}>{children}</View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  screen: {
    height: dimension.height,
    paddingTop: Constants.statusBarHeight,
  },
});

export default Screen;
