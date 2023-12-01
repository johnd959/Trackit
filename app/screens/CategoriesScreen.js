import { BackHandler, StyleSheet, Text, View, Dimensions } from 'react-native'
import React from 'react';
import Screen from '../components/Screen';
import CategoryList from '../components/CategoriesComps/categoryList';
import globalStyles from '../config/styles'
import AddButton from '../components/CategoriesComps/addButton';
import colors from '../config/colors'

const dimension = Dimensions.get('screen'); 

export default function CategoriesScreen({setCategories}) {

  function handleOnAdd()
  {

  }

  const categories = [
    {
      color: colors.accentGreen,
      name: 'health care',
      limit: 1000
    },
    {
      color: colors.accentGreen,
      name: 'health care',
      limit: 1000
    },
    {
      color: colors.accentGreen,
      name: 'health care',
      limit: 1000
    }
  ]

  return (
    <Screen style={styles.mainScreen}>
      <View>
        <Text style={[globalStyles.text, styles.heading]}>Categories</Text>
        <CategoryList style={styles.categoryList} categories={categories}></CategoryList>
      </View>
      <View>
        <AddButton></AddButton>
      </View>
    </Screen>
  )
}

const styles = StyleSheet.create({
  mainScreen : {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    paddingHorizontal: 10,
    justifyContent: 'space-between', 
  },
  heading : {
    borderBottomColor: 'black',
    borderBottomWidth: 5,
    fontSize: 30,
    marginBottom: 20,

  },
  categoryList: {
    backgroundColor: 'dodgerBlue'
  },
  list : {
    marginHorizontal: 10,
  },
  modal : {

  }
})