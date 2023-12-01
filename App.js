import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import AppTextInput from "./app/components/AppTextInput";
import AppDateInput from "./app/components/AppDateInput";
import { NavigationContainer } from "@react-navigation/native";
import AuthNavigator from "./app/navigation/AuthNavigator";
import NavigationTheme from "./app/navigation/NavigationTheme";

export default function App() {
  return (
    <NavigationContainer theme={NavigationTheme}>
      <AuthNavigator/>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: 200,
    height: 200,
  },
  text: {
    fontWeight: "bold",
    fontSize: 30,
    marginBottom: 20,
  },
  containerTest: {
    marginTop: 100,
  },
});
