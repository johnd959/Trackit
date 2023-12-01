import {Text, View, StyleSheet, Dimensions} from 'react-native'; 
import globalStyles from '../../config/styles';

const dimension = Dimensions.get('screen');

export default function Category({item})
{ 

    return(
        <View style={styles.category}>
            <View style={[styles.identifier, {backgroundColor: item.color}]}><Text></Text></View>
            <Text style={globalStyles.text}>{item.name}</Text>
        </View>
    )
}


const styles = StyleSheet.create({
    category: {
        display: 'flex',
        flexDirection: 'row',
        paddingHorizontal: dimension.width / 10,
        paddingVertical: 2,
        alignItems: 'center',
        borderWidth: 0.5,
        borderRadius: 5,
        marginVertical: 5,

    },
    identifier : {
        borderWidth: 1,
        borderRadius: 10,
        width : dimension.width / 20,
        height: dimension.width / 20,
        marginRight: dimension.width / 30
    }
})