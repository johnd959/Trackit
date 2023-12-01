import {View, Text, StyleSheet} from 'react-native'; 
import Category from './category';



export default function CategoryList({categories})
{


    return(
        <View>
            {categories.map((category, index) => <Category key={index} item={category}></Category>)}
        </View>
    )
}

const styles = StyleSheet.create({

})