import { View, Text, StyleSheet } from "react-native";
import { StatusBar } from "expo-status-bar";

export default function StatusBar() {
  return (
    <View style={styles.container}>
      <StatusBar style="light" />

      <Text style={styles.text}>StatusBar con estilo LIGHT</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#222",
    justifyContent: "center",
    alignItems: "center"
  },
  text: {
    color: "white",
    fontSize: 18
  }
});
