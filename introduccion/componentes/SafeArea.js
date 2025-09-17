import { ScrollView, Text, Image, View, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function SafeArea() {
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.card}>
          <Image source={{ uri: "https://i.imgur.com/ODQ3ZQx.png" }} style={styles.image} />
          <Text style={styles.title}>Minecraft</Text>
          <Text>Juego de bloques</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  card: { margin: 20, padding: 10, borderWidth: 1, borderRadius: 10, backgroundColor: "#fff" },
  image: { width: "100%", height: 200, borderRadius: 10 },
  title: { fontSize: 20, fontWeight: "bold", marginVertical: 5 }
});
