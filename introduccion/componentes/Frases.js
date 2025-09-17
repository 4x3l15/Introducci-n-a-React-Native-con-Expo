import { ScrollView, Text, StyleSheet } from "react-native";

export default function Frases() {
  const frases = Array.from({ length: 15 }, (_, i) => `Frase número ${i + 1}`);

  return (
    <ScrollView style={styles.container}>
      {frases.map((f, i) => (
        <Text key={i} style={styles.text}>{f}</Text>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  text: { fontSize: 18, margin: 10, color: "darkgreen" }
});
