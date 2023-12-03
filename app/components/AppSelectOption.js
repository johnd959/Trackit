import React, { useState } from "react";
import { Dimensions, View, TouchableOpacity, Text, StyleSheet } from "react-native";
import defaultStyles from "../config/styles";


const windowWidth = Dimensions.get("window").width;
const buttonWidth = windowWidth / 2 - 30;
const AppSelectOption = ({ onValueChange, options}) => {
  const [selected, setSelected] = useState(null);

  const handlePress = (option) => {
    setSelected(option);
    if (onValueChange) {
      onValueChange(option);
    }
  };

  return (
    <View style={styles.container}>
      {options.map((option, index) => (
        <TouchableOpacity
          key={index}
          style={[
            styles.button,
            selected === option ? styles.selectedButton : null,
          ]}
          onPress={() => handlePress(option)}
        >
          <Text
            style={[
              styles.buttonText,
              selected === option ? styles.selectedButtonText : null,
            ]}
          >
            {option}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  button: {
    backgroundColor: "#E0E0E0",
    padding: 10,
    borderRadius: 5,
    margin: 5,
    alignItems: "center", 
    justifyContent: "center",
    width: buttonWidth,
  },
  selectedButton: {
    backgroundColor: defaultStyles.colors.accentGreen,
  },
  buttonText: {
    color: defaultStyles.colors.darkCharcoal,
    fontSize: 18,
  },
  selectedButtonText: {
    color: defaultStyles.colors.softWhite,
  },
});

export default AppSelectOption;
