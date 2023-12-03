import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

import defaultStyles from '../config/styles'

export default function AppBreak() {
  return (
    <View style={styles.breaker}>
    </View>
  )
}

const styles = StyleSheet.create({
    breaker: {
        borderBottomColor: defaultStyles.colors.lightGrey,
        borderBottomWidth: 1,
        width: '100%',
        marginVertical: 20,
    }
})