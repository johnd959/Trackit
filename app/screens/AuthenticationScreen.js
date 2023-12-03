import { StyleSheet, Text, View } from "react-native";
import React from "react";
import AppTextInput from "../components/AppTextInput";
import AppButton from "../components/AppButton";

import defaultStyles from "../config/styles";

export default function AuthenticationScreen({ navigation }) {
  return (
      <View style={styles.container}>
        <Text style={styles.title}>Create your account</Text>
        <AppTextInput iconName="account" placeholder="Name" />
        <AppTextInput iconName="phone" placeholder="Phone" />
        <AppTextInput iconName="email" placeholder="Email" />
        <AppTextInput
          iconName="lock"
          placeholder="Password"
          secureTextEntry={true}
        />
        <AppTextInput
          iconName="lock"
          placeholder="Confirm password"
          secureTextEntry={true}
        />
        <AppButton
          color="accentGreen"
          title="Register"
          onPress={() => navigation.navigate("Welcome")}
        />
        <View style={styles.signupTextContainer}>
          <Text style={styles.signupText}>Already have an account?</Text>
          <Text
            style={[styles.signupText, styles.signup]}
            onPress={() => navigation.navigate("Login")}
          >
            Login
          </Text>
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
    marginTop: 50,
    marginBottom: 30,
  },
  signupText: {
    color: defaultStyles.colors.softWhite,
    fontSize: 15,
    fontWeight: "bold",
    marginTop: 40,
  },
  signupTextContainer: {
    flexDirection: "row",
  },
  signup: {
    color: defaultStyles.colors.accentGreen,
    marginLeft: 5,
  },
});
