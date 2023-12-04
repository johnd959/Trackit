import { StyleSheet, View } from 'react-native'
import React from 'react'
import Screen from '../components/Screen'
import BarChartExample from '../components/DashboardBarchart'
import TableB from '../components/TableOfBarchart'
import Button from '../components/CategoriesComps/Button'
import configStyles from '../config/styles'

export default function Dashboard2({navigation}){
    return(
        <Screen style={[styles.root]}>
            <BarChartExample/>
        <View style={styles.fixToText}>
        <Button
           
          title="Category"

          onClick={() => navigation.navigate("Dashboard")}
          
        />
          <View style={styles.separator} />
        <Button
          
          title="Total Amount"
          style={styles.button}
        />
      </View>
            <TableB/>
        </Screen>
    )
    
}
const styles = StyleSheet.create({
    root:{
      display:'flex',
      flex:1,
      alignItems:'center'
    },
  
    fixToText: {
      flexDirection: 'row',
      justifyContent:'space-between',
      padding:20,
      
    },
   
    separator: {
      marginHorizontal: 20,
    },
    button: {
      backgroundColor: configStyles.colors.accentGreen,
    }
  })