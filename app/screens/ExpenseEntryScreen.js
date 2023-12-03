import { StyleSheet, Text, View, ScrollView } from "react-native";
import React from "react";
import AppTextInput from "../components/AppTextInput";
import AppDateInput from "../components/AppDateInput";
import Screen from "../components/Screen";
import AppSelectOption from "../components/AppSelectOption";

import defaultStyles from "../config/styles";
import AppBreak from "../components/AppBreak";
import AppButton from "../components/AppButton";

export default function ExpenseEntryScreen() {
  const categories = ["Food", "Transport", "Shopping", "Others"];
  return (
        <ScrollView style={styles.scrollView}>
        <View style={styles.container}>
          <AppTextInput
            iconName="currency-usd"
            placeholder="Enter The Expense Amount"
          />
          <AppDateInput placeholder="Enter The Expense Date" />
          <View style={styles.categoryContainer}>
            <AppBreak />
            <Text style={styles.categoriesLabel}>
              Select the Expense Category
            </Text>
            <AppSelectOption options={categories} />
          </View>
          <AppTextInput
            placeholder="Leave a Comment"
            multiline={true}
            numberOfLines={10}
            textAlignVertical="top"
          />
          <AppButton title="add expense" color="accentGreen"/>
        </View>
      </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    gap: 20,
    flexDirection: "column",
    height: "100%",
  
  },
  categoryContainer: {
    alignItems: "center",
  },
  categoriesLabel: {
    color: defaultStyles.colors.softWhite,
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
  },
  scrollView: {
    backgroundColor: defaultStyles.colors.primaryBlue,
  },
});
