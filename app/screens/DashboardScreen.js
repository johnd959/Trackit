import { StyleSheet, View } from 'react-native'
import React from 'react'
import PieChartExample from '../components/DashboardChart'
import TableP from '../components/TableOfPieChart'
import Button from '../components/CategoriesComps/Button'
import Screen from '../components/Screen'
import configStyles from '../config/styles'

export default function DashboardScreen({navigation}) {
  
 
  return (
      <Screen style={[styles.root]}>
       
     
        <PieChartExample/>
        
        <View style={styles.fixToText}>
        <Button
           
          title="Category"
          style={styles.button}
          
        />
          <View style={styles.separator} />
        <Button
          
          title="Total Amount"
          color="accentGreen"
          onClick={() => navigation.navigate("Dashboard2")}
        />
      </View>
      <TableP style={[styles.TableP]}/>
      
 
      
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