import { BackHandler, StyleSheet, Text, View, Dimensions, Alert } from 'react-native'
import {useState, useEffect} from 'react';
import Screen from '../components/Screen';
import CategoryList from '../components/CategoriesComps/categoryList';
import globalStyles from '../config/styles'
import AppButton from '../components/AppButton';
import colors from '../config/colors'
import Editor from '../components/CategoriesComps/editor';

const dimension = Dimensions.get('screen'); 

export default function CategoriesScreen({setCategories}) {

  const [modalVisible, setModalVisible] = useState(false); 
  const [categoryList, setCategoryList] = useState([
    {
      id: 1,
      color: colors.accentGreen,
      name: 'health care',
      limit: '1000'
    },
    {
      id: 2,
      color: colors.accentGreen,
      name: 'health care',
      limit: '1000'
    },
    {
      id: 3,
      color: colors.accentGreen,
      name: 'health care',
      limit: '1000'
    }
  ])
  const [name, setName] = useState();
  const [color, setColor] = useState();
  const [limit, setLimit] = useState();
  const [selectedCategory, setSelectedCategory] = useState(); 

  useEffect(
    () => {
      if(selectedCategory){
        setName(selectedCategory.name);
        setColor(selectedCategory.color);
        setLimit(selectedCategory.limit);
      }
      else{
        setName();
        setColor();
        setLimit();
      }

    },
    [selectedCategory]
  );

  const handleSelected = (itemValue) => {
    setColor(itemValue);
  };

  const handleNameChange = (text) => {
    setName(text);
  };
  const handleLimitChange = (text) => {
    setLimit(text);

  };

  function handleOnAdd()
  {
    setModalVisible(true); 
  }

  function handleModalAdd(category)
  {
    setCategoryList([...categoryList, category]); 
    setModalVisible(false); 
  }

  const handleAdd = () => {
    console.log("Inside handleAdd: " + name + color + limit); 
    if (selectedCategory != null) {
      selectedCategory.name = name;
      selectedCategory.color = color;
      selectedCategory.limit = limit;
      setSelectedCategory();
    } else if (name && limit && color){ 
      handleModalAdd({
        id: Math.random() * 1000,
        color: color,
        name: name,
        limit: limit,
      });
    }
    else {
      Alert.alert("no category was created"); 
    }
    setName();
    setColor();
    setLimit();
    setModalVisible(false);
  };
  
let modalContents = {
  inputs: [
    {
      input: name,
      handleInputChange: handleNameChange,
      inputIcon: "folder-text-outline",
      placeholder: "Name",
      index: 1,
    },
    {
      input: limit,
      handleInputChange: handleLimitChange,
      inputIcon: "cash-multiple",
      placeholder: "Limit",
      index: 2,
    }
  ],
  picker: {
    handleSelected: handleSelected,
    selectedItem: color,
    pickerItems: [
      {
        label: "Blue",
        value: globalStyles.colors.primaryBlue
      },
      {
        label: "Green",
        value: globalStyles.colors.accentGreen
      },
      {
        label: "Charcoal",
        value: globalStyles.colors.darkCharcoal
      },
      {
        label: "Grey",
        value: globalStyles.colors.neutralGrey
      },
      {
        label: "Red",
        value: "red"
      },
    ]
  },
  buttons: [
    {
      title: "Save",
      func: handleAdd
    },
    {
      title: "Cancel",
      func: () => {
        setSelectedCategory();
        setModalVisible(false);
      }
    }
  ]
}


  function handleDelete(item)
  {
    setCategoryList(categoryList.filter((category) => category.id != item.id ));
  }

  function handleModalEditCategory()
  {
    setModalVisible(true);
  }

  return (
    <Screen style={styles.mainScreen}>
      <View>
        <CategoryList deleteCategory={handleDelete} editCategory={{handleModalEditCategory, setSelectedCategory}} style={styles.categoryList} categories={categoryList}></CategoryList>
      </View>
      <View>
        <AppButton title="Add Category" onPress={handleOnAdd} color='accentGreen'></AppButton>
      </View>
      {modalContents? <Editor visible={modalVisible} title={'Category'} handleSave={handleModalAdd} setModalVisible={setModalVisible} buttons={modalContents.buttons} inputs={modalContents.inputs} picker={modalContents.picker}></Editor> : <></>}
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
    backgroundColor: colors.primaryBlue,
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