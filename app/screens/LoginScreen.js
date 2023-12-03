import { StyleSheet, Text, View } from "react-native";
import React from "react";
import AppTextInput from "../components/AppTextInput";
import AppButton from "../components/AppButton";

import defaultStyles from "../config/styles";

export default function LoginScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Loging to your account</Text>
      <AppTextInput iconName="account" placeholder="Email" />
      <AppTextInput
        iconName="lock"
        placeholder="Password"
        secureTextEntry={true}
      />
      <AppButton
        color="accentGreen"
        title="Login"
        onPress={() => navigation.navigate("Menu")}
      />
      <View style={styles.signupTextContainer}>
        <Text style={styles.signupText}>Don't have an account?</Text>
        <Text style={[styles.signupText, styles.signup]} onPress={() => navigation.navigate("Register")} >Sign up</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: defaultStyles.colors.primaryBlue,
    paddingHorizontal: 20,
    gap: 20,
    height: "100%",
    alignItems: "center",
  },
  buttonContainer: {
    height: 100,
  },
  title: {
    color: defaultStyles.colors.softWhite,
    fontSize: 30,
    fontWeight: "bold",
    marginTop: 100,
    marginBottom: 50,
  },
  signupText: {
    color: defaultStyles.colors.softWhite,
    fontSize: 15,
    fontWeight: "bold",
    marginTop: 60,
  },
  signupTextContainer: {
    flexDirection: "row",
  },
  signup: {
    color: defaultStyles.colors.accentGreen,
    marginLeft: 5,
  },
});
