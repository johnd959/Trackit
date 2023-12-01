import { useState } from "react";
import { Modal, StyleSheet, Text, TextInput, Alert, View } from "react-native";
import { window } from "../../config/dimensions";
import globalStyles from "../../config/styles";
import Button from "./Button";
import { Picker } from "@react-native-picker/picker";

export default function Editor({
  visible,
  style,
  title,
  handleSave,
  setModalVisible,
}) {
  const [name, setName] = useState();
  const [color, setColor] = useState();
  const [limit, setLimit] = useState();


  const handleNameChange = (text) => {
    setName(text);
  };
  const handleLimitChange = (text) => {
    setLimit(text);
  };
  const handleAdd = () => {
    if (name && limit && color) {
      handleSave({
        color: "green",
        name: name,
        limit: limit,
      });
    } else {
      Alert.alert("No category was created");
    }
    setName();
    setColor();
    setLimit();
  };

  return (
    <Modal visible={visible}>
      <View style={[styles.body, style]}>
        <View>
          <Text style={[globalStyles.text, styles.title]}>{title}</Text>
        </View>
        <View>
          <View style={styles.textBox}>
            <TextInput
              style={globalStyles.text}
              placeholder="Category name"
              value={name}
              onChangeText={(text) => handleNameChange(text)}
            ></TextInput>
          </View>
          <View style={styles.textBox}>
            <TextInput
              style={globalStyles.text}
              placeholder="Limit"
              value={limit}
              onChangeText={(text) => handleLimitChange(text)}
            ></TextInput>
          </View>
        </View>
        <View style={styles.buttons}>
          <Button
            style={styles.button}
            title="Cancel"
            onAdd={() => setModalVisible(false)}
          />
          <Button style={styles.button} title="Save" onAdd={handleAdd}></Button>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  body: {
    display: "flex",
    justifyContent: "center",
    flex: 1,
    paddingHorizontal: 10,
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
