import {View, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import globalStyles from '../../config/styles'

const dimension = Dimensions.get("window"); 

export default function Ellipsis({onClick})
{
    return(
        <TouchableOpacity style={styles.ellipsis} onPress={() => onClick()}>
            <View style={styles.identifier}></View>
            <View style={styles.identifier}></View>
            <View style={styles.identifier}></View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    ellipsis : {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignContent: 'center',
        gap: 2


    },
    identifier : {
        borderWidth: 1,
        borderRadius: 10,
        width : dimension.width / 50,
        height: dimension.width / 50,
        backgroundColor: globalStyles.colors.neutralGrey,
    },
})