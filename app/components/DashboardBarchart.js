import React from 'react';
import { View, StyleSheet } from 'react-native';
import { BarChart } from 'react-native-chart-kit';

const BarChartExample = () => {
  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'April',],
    datasets: [
      {
        data: [1000, 500, 800, 900,],
      },
    ],
  };

  return (
    
      <BarChart
        data={data}
        width={340}
        height={250}
        
        chartConfig={{
         

          backgroundGradientFrom: '#003366',
          backgroundGradientTo: '#ffa726',
         
          decimalPlaces: 0,
          color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          
        }}
        
        style={{
          alignItems:'center',
          borderRadius: 16,
        }}
      />
  
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default BarChartExample;
