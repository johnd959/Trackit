import React from 'react'; 
import { ImageBackground, StyleSheet } from 'react-native'; 
import { DataTable } from 'react-native-paper'; 
  
const TableB = () => { 
  return ( 
    <DataTable style={styles.container}> 
 
      <DataTable.Row > 
        <DataTable.Cell>April Bill:</DataTable.Cell> 
        
        <DataTable.Cell>10000</DataTable.Cell> 
      </DataTable.Row> 
  
      <DataTable.Row > 
        <DataTable.Cell>March Bill:</DataTable.Cell> 
        
        <DataTable.Cell>500</DataTable.Cell> 
      </DataTable.Row > 
      <DataTable.Row > 
        <DataTable.Cell>February Bill:</DataTable.Cell> 
        
        <DataTable.Cell>800</DataTable.Cell> 
      </DataTable.Row> 
      <DataTable.Row> 
        <DataTable.Cell>January Bill:</DataTable.Cell> 
        
        <DataTable.Cell>600</DataTable.Cell> 
      </DataTable.Row> 
    </DataTable> 
  ); 
}; 
  
export default TableB; 
  
const styles = StyleSheet.create({ 
  container: { 
    padding:16,
    height: 300,
    width: 400,
  }, 
  
});