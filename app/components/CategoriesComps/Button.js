import {Text, View, TouchableOpacity, StyleSheet} from 'react-native';
import colors from '../../config/colors'; 
import globalStyles from '../../config/styles'

export default function Button({title, onClick, style})
{


    return(
        <TouchableOpacity style={[styles.button, style]} onPress={onClick}>
            <Text style={[globalStyles.text, styles.buttonText]}>{title}</Text>
        </TouchableOpacity>
    )
}


const styles = StyleSheet.create({
    button : {
        backgroundColor: colors.primaryBlue,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 5,
        borderWidth: 1,
        borderRadius: 5,
    },
    buttonText : {
        color: colors.softWhite
    }
})
