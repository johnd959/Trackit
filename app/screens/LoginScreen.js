import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function LoginScreen({navigation}) {
  return (
    <View>
      <Text>LoginScreen</Text>
      <Button title="Login" onPress={() => navigation.navigate("Menu")} />
    </View>
  )
}

const styles = StyleSheet.create({})