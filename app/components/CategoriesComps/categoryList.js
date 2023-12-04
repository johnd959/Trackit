import {View, Text, StyleSheet, ScrollView, Dimensions} from 'react-native'; 
import Category from './category';

const dimension = Dimensions.get("window"); 

export default function CategoryList({categories, editCategory, deleteCategory})
{


    return(
        <ScrollView style={styles.list} decelerationRate={'normal'} fadingEdgeLength={10}>
            {categories.map((category) => <Category deleteCategory={deleteCategory} editCategory={editCategory} key={category.id} item={category}></Category>)}
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    list : {
        height: dimension.height * 0.75,
    }
})