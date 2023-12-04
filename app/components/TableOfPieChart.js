import React from 'react'; 
import { ImageBackground, StyleSheet } from 'react-native'; 
import { DataTable } from 'react-native-paper'; 
  
const TableP = () => { 
  return ( 
    <DataTable style={styles.container}> 
 
      <DataTable.Row style={{backgroundColor:'#9EFF00'}}> 
        <DataTable.Cell>Utilities  </DataTable.Cell> 
        
        <DataTable.Cell>$400</DataTable.Cell> 
      </DataTable.Row> 
  
      <DataTable.Row style={{backgroundColor:'#AD00FF'}}> 
        <DataTable.Cell>Grocery </DataTable.Cell> 
        
        <DataTable.Cell>$800</DataTable.Cell> 
      </DataTable.Row > 
      <DataTable.Row style={{backgroundColor:'#00D1FF'}}> 
        <DataTable.Cell>Mortgage </DataTable.Cell> 
        
        <DataTable.Cell>$1200</DataTable.Cell> 
      </DataTable.Row> 
      <DataTable.Row style={{backgroundColor:'#FF8A00'}}> 
        <DataTable.Cell>Car Loan </DataTable.Cell> 
        
        <DataTable.Cell>$400</DataTable.Cell> 
      </DataTable.Row> 
    </DataTable> 
  ); 
}; 
  
export default TableP; 
  
const styles = StyleSheet.create({ 
  container: { 
    padding:16,
    height: 300,
    width: 400,
  }, 
  
});



  
