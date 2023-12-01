import { StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";

import { MaterialCommunityIcons } from "@expo/vector-icons";

import defaultStyles from "../config/styles";

export default function AppTextInput({ iconName,style, ...otherProps }) {
  return (
    <View style={[styles.container, style]}>
      {iconName && (
        <MaterialCommunityIcons
          style={styles.icon}
          name={iconName}
          size={20}
          color={defaultStyles.colors.accentGreen}
        />
      )}

      <TextInput style={defaultStyles.text} {...otherProps} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: defaultStyles.colors.lightGrey,
    borderRadius: 15,
    flexDirection: "row",
    width: "100%",
    padding: 15,
    alignItems: "center",
  },
  icon: {
    marginRight: 10,
  },
});
