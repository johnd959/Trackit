import {View, Text, StyleSheet, ScrollView} from 'react-native'; 
import Category from './category';



export default function CategoryList({categories, editCategory, deleteCategory})
{


    return(
        <ScrollView>
            {categories.map((category) => <Category deleteCategory={deleteCategory} editCategory={editCategory} key={category.id} item={category}></Category>)}
        </ScrollView>
    )
}

const styles = StyleSheet.create({

})