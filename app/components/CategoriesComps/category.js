import {
  Text,
  View,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import globalStyles from "../../config/styles";
import Ellipsis from "./ellipsis";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const dimension = Dimensions.get("screen");

export default function Category({ item, editCategory, deleteCategory }) {
  function handleOnPress() {
    if (item) {
      editCategory.setSelectedCategory(item);
    }
    console.log("Activated");
    editCategory.handleModalEditCategory();
  }

  return (
    <View style={styles.category}>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          gap: 2,
        }}
      >
        <View
          style={[styles.identifier, { backgroundColor: item.color }]}
        ></View>
        <Text style={globalStyles.text}>{item.name}</Text>
      </View>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          gap: 10,
        }}
      >
        <View style={styles.badge}>
          <Text style={{ color: "white", textAlign: "center" }}>
            {"$" + item.limit}
          </Text>
        </View>
        <Ellipsis onClick={handleOnPress} />
        <TouchableOpacity
          onPress={() => {
            deleteCategory(item);
          }}
        >
          <MaterialCommunityIcons
            name="trash-can-outline"
            size={20}
            color={globalStyles.colors.accentGreen}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  category: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingLeft: dimension.width / 20,
    paddingRight: 5,
    paddingVertical: dimension.height / 100,
    alignItems: "center",
    borderWidth: 0.5,
    borderRadius: 5,
    marginVertical: 5,
    backgroundColor: globalStyles.colors.lightGrey,
  },
  identifier: {
    borderWidth: 1,
    borderRadius: 10,
    width: dimension.width / 20,
    height: dimension.width / 20,
    marginRight: dimension.width / 30,
  },
  badge: {
    backgroundColor: "black",
    borderRadius: 20,
    minWidth: dimension.width * 0.1,
    paddingHorizontal: 10,
  },
});
