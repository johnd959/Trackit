import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AppTextInput from '../components/AppTextInput'

export default function LoginScreen({navigation}) {
  return (
    <View>
      <Text>LoginScreen</Text>
      <AppTextInput iconName="account" placeholder="Name" />
      <Button title="Login" onPress={() => navigation.navigate("Menu")} />
    </View>
  )
}

const styles = StyleSheet.create({})