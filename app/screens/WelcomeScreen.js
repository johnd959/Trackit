import { StyleSheet, Text, View, Pressable } from "react-native";
import React from "react";

export default function WelcomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>This is the WelcomeScreen</Text>
      <Pressable onPress={() => navigation.navigate("Login")}>
        <Text>Login</Text>
      </Pressable>
      <Pressable onPress={() => navigation.navigate("Register")}>
        <Text>Register</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
  },
});
