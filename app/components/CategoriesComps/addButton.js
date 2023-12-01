import {Text, View, TouchableOpacity, StyleSheet} from 'react-native';
import colors from '../../config/colors'; 
import globalStyles from '../../config/styles'

export default function AddButton({onAdd})
{
    return(
        <TouchableOpacity style={styles.button}>
            <Text style={[globalStyles.text, styles.buttonText]}>Add Category</Text>
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
