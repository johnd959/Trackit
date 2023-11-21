import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Expense Tracker App</Text>
      <Image
        style={styles.image}
        source={require("./app/assets/UnderConstruction.jpg")}
      />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: 200,
    height: 200,
  },
  text:{
    fontWeight: "bold",
    fontSize: 30,
    marginBottom: 20,
  }
});
