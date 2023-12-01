import {View, Text, StyleSheet, ScrollView} from 'react-native'; 
import Category from './category';



export default function CategoryList({categories})
{


    return(
        <ScrollView>
            {categories.map((category, index) => <Category key={index} item={category}></Category>)}
        </ScrollView>
    )
}

const styles = StyleSheet.create({

})