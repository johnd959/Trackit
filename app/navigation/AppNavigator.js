import { Button, StyleSheet, Text, View } from "react-native";
import React from "react";

import { createDrawerNavigator } from "@react-navigation/drawer";
import LoginScreen from "../screens/LoginScreen";
import AuthenticationScreen from "../screens/AuthenticationScreen";
import DashboardScreen from "../screens/DashboardScreen";
import Dashboard2 from "../screens/Dashbored2"
import CategoriesScreen from "../screens/CategoriesScreen";
import ExpenseEntryScreen from "../screens/ExpenseEntryScreen";
import CustomAppNavigatorContent from "./CustomAppNavigatorContent";
const Drawer = createDrawerNavigator();
export default function AppNavigator() {
  return (
    <Drawer.Navigator  drawerContent={(props) => <CustomAppNavigatorContent {...props} />}>
      <Drawer.Screen name="Dashboard" component={DashboardScreen} />
      <Drawer.Screen name="Categories" component={CategoriesScreen} />
      <Drawer.Screen name="Adding Expense" component={ExpenseEntryScreen} />

    </Drawer.Navigator>
  );
}

const styles = StyleSheet.create({});
