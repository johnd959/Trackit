import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CategoriesScreen from "./app/screens/CategoriesScreen";

const Stack = createNativeStackNavigator(); 

export default function App() {

  const [categories, setCategories] = useState([]); 


  return (
    <CategoriesScreen categories={categories} setCategories={setCategories}></CategoriesScreen>
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
  text:{
    fontWeight: "bold",
    fontSize: 30,
    marginBottom: 20,
  }
});
