import React from 'react';
import { View, Text } from 'react-native';
import { PieChart } from 'react-native-chart-kit';

const PieChartExample = () => {
  const data = [
    {
      name: 'Utilities',
      population: 4,
      color: '#9EFF00',
      legendFontColor: '#7F7F7F',
      legendFontSize: 15,
    },
    {
      name: 'Grocery',
      population: 6,
      color: '#AD00FF',
      legendFontColor: '#7F7F7F',
      legendFontSize: 15,
    },
    {
      name: 'Mortgage',
      population: 8,
      color: '#00D1FF',
      legendFontColor: '#7F7F7F',
      legendFontSize: 15,
    },
    {
      name: 'Car loan',
      population: 4,
      color: '#FF8A00',
      legendFontColor: '#7F7F7F',
      legendFontSize: 15,
    },
  ];

  const chartConfig = {
    backgroundGradientFrom: '#1E2923',
    backgroundGradientTo: '#08130D',
    color: (opacity = 1) => `rgba(0, 255, 0, ${opacity})`, // Change this color
  };

  return (
    <View>
      
      <PieChart
        data={data}
        width={340}
        height={250}
        chartConfig={chartConfig}
        accessor="population"
        backgroundColor="transparent"
        paddingLeft="15"
      />
    </View>
  );
};

export default PieChartExample;


