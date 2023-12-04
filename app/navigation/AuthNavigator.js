import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

import { createStackNavigator } from "@react-navigation/stack";

import WelcomeScreen from "../screens/WelcomeScreen";
import LoginScreen from "../screens/LoginScreen";
import AuthenticationScreen from "../screens/AuthenticationScreen";
import AppNavigator from './AppNavigator';
import DashboardScreen from '../screens/DashboardScreen';
import Dashboard2 from '../screens/Dashbored2';


const AuthStack = createStackNavigator();

export default function AuthNavigator() {
  return (
    <AuthStack.Navigator initialRouteName = "Welcome">
      <AuthStack.Screen name="Welcome" component={WelcomeScreen} options={{headerShown: false}} />
      <AuthStack.Screen name="Login" component={LoginScreen} />
      <AuthStack.Screen name="Register" component={AuthenticationScreen} />
      <AuthStack.Screen name="Menu" component={AppNavigator} options={{headerShown: false}}/>
      <AuthStack.Screen name="Dashboard" component={DashboardScreen} />
      <AuthStack.Screen name="Dashboard2" component={Dashboard2} />
    </AuthStack.Navigator>
  )
}

const styles = StyleSheet.create({})