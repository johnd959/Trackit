import { useState } from "react";
import { Modal, StyleSheet, Text, TextInput, Alert, View } from "react-native";
import { window } from "../../config/dimensions";
import globalStyles from "../../config/styles";
import Button from "./Button";
import AppTextInput from "../AppTextInput";
import {Picker} from '@react-native-picker/picker';

export default function Editor({
  visible,
  style,
  title,
  buttons,
  inputs,
  picker,
}) {


  return (
    <Modal visible={visible} animationType="slide" transparent={true}>
      <View style={[styles.body, style]}>
        <View>
          <Text style={[globalStyles.text, styles.title]}>{title}</Text>
        </View>
        <View>
          {
            inputs.map((input) => <AppTextInput key={input.index} iconName={input.inputIcon} placeholder={input.placeholder} value={input.input} onChangeText={(text) => input.handleInputChange(text)}></AppTextInput>)
          }
        </View>
        <View>
          <Picker
          selectedValue={picker.selectedItem}
          onValueChange={(itemValue) => picker.handleSelected(itemValue)}
          >
            {picker.pickerItems.map((item) => <Picker.Item key={item.label} label={item.label} value={item.value}></Picker.Item>)}
          </Picker>
        </View>
        <View style={styles.buttons}>
          {buttons.map((button) => <Button key={button.title} style={styles.button} title={button.title} onClick={button.func}></Button>)}
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  body: {
    display: "flex",
    justifyContent: "center",
    height: "50%",
    paddingHorizontal: 10,
    marginTop: "auto",
    backgroundColor: globalStyles.colors.lightGrey,
  },
  textBox: {
    backgroundColor: "#CCC",
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  title: {
    textAlign: "left",
    fontWeight: "bold",
  },
  buttons: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
    gap: 2,
  },
  button: {
    flex: 1,
  },
});
