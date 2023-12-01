import { BackHandler, StyleSheet, Text, View, Dimensions } from 'react-native'
import React from 'react';
import Screen from '../components/Screen';
import CategoryList from '../components/CategoriesComps/categoryList';
import globalStyles from '../config/styles'
import AddButton from '../components/CategoriesComps/Button';
import colors from '../config/colors'
import Editor from '../components/CategoriesComps/editor';
import {Picker} from '@react-native-picker/picker'; 

const dimension = Dimensions.get('screen'); 

export default function CategoriesScreen({setCategories}) {

  const [modalVisible, setModalVisible] = React.useState(false); 
  const [categoryList, setCategoryList] = React.useState([
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
  ])
  const [selectedLanguage, setSelectedLanguage] = React.useState();

  function handleOnAdd()
  {
    setModalVisible(true); 
  }

  function handleModalAdd(category)
  {
    setCategoryList([...categoryList, category]); 
    console.log(category); 
    setModalVisible(false); 
  }


  return (
    <Screen style={styles.mainScreen}>
      <View>
        <Text style={[globalStyles.text, styles.heading]}>Categories</Text>
        <CategoryList style={styles.categoryList} categories={categoryList}></CategoryList>
      </View>
      <View>
        <AddButton title="Add Category" onAdd={handleOnAdd}></AddButton>
      </View>
      <Editor visible={modalVisible} title={'Category'} handleSave={handleModalAdd} setModalVisible={setModalVisible}></Editor>
      <Picker
            selectedValue={selectedLanguage}
            onValueChange={(itemValue, itemIndex) =>
              setSelectedLanguage(itemValue)
            }
          >
            <Picker.Item label="Java" value="java" />
            <Picker.Item label="JavaScript" value="js" />
            <Picker.Item label="C sharp" value="C#"/>
          </Picker>
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