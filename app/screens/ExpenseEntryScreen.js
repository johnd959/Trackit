import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AppTextInput from '../components/AppTextInput'
import AppDateInput from '../components/AppDateInput'

export default function ExpenseEntryScreen() {
  return (
    <View>
      <Text>ExpenseEntryScreen</Text>
      <AppTextInput iconName="currency-usd" placeholder="Enter The Expense Amount" />
      <AppDateInput placeholder="Enter The Expense Date" />
    </View>
  )
}

const styles = StyleSheet.create({})