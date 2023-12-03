import { StyleSheet, Text, View, Pressable, Image } from "react-native";
import React from "react";
import colors from "../config/colors";
import AppButton from "../components/AppButton";

export default function WelcomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require("../assets/app-logo.png")} />
      <View style={styles.textContainer}>
        <Text style={styles.motto}>Manage your expense by</Text>
        <Text style={styles.logoName}>TrackIt</Text>
      </View>
      <View style={styles.buttonsContainer}>
        <AppButton title="login" onPress={() => navigation.navigate("Login")}/>
        <AppButton title="Regiter" onPress={() => navigation.navigate("Register")}/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonsContainer: {
    width: "100%",
    paddingHorizontal: 20,
    marginTop: 150,
  },
  container: {
    alignItems: "center",
    backgroundColor: colors.accentGreen,
    paddingTop: 50,
    paddingHorizontal: 20,
    height: "100%",
  },
  logo: {
    width: 150,
    height: 150,
    marginTop: 100,
  },
  motto: {
    fontSize: 20,
    fontWeight: "bold",
    color: colors.softWhite,
  },
  textContainer: {
    marginTop: 50,
    flexDirection: "row",
    alignItems: "center",
  },
  logoName: {
    fontSize: 30,
    fontWeight: "700",
    color: colors.primaryBlue,
    marginLeft: 5,
  },
});
