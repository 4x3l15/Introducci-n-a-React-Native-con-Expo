import React, { useState } from 'react';
import { View, Text, Image, ScrollView, Pressable, StyleSheet } from 'react-native';

export default function Act9() {
  const [likes, setLikes] = useState(0);
  const hobbies = ["Programar", "Videojuegos", "Música", "Dibujar"];

  return (
    <View style={{ flex: 1 }}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Perfil de Axel</Text>
      </View>
      <ScrollView style={{ flex: 1, padding: 10 }}>
        <Image source={{ uri: "https://placekitten.com/200/200" }} style={styles.image} />
        <Text style={styles.name}>Axel Ramirez</Text>
        <Pressable style={styles.button} onPress={() => setLikes(likes + 1)}>
          <Text style={styles.buttonText}>👍 Me gusta {likes}</Text>
        </Pressable>
        <Text style={styles.subTitle}>Hobbies</Text>
        {hobbies.map((h, i) => (
          <Text key={i} style={styles.hobby}>• {h}</Text>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  header: { padding: 15, backgroundColor: "#6200ee", alignItems: "center" },
  headerText: { color: "#fff", fontSize: 20, fontWeight: "bold" },
  image: { width: 150, height: 150, borderRadius: 75, alignSelf: "center", marginVertical: 15 },
  name: { fontSize: 22, fontWeight: "bold", textAlign: "center", marginBottom: 10 },
  button: { backgroundColor: "#0a84ff", padding: 10, borderRadius: 10, alignItems: "center", marginBottom: 15 },
  buttonText: { color: "#fff", fontWeight: "bold" },
  subTitle: { fontSize: 18, fontWeight: "bold", marginBottom: 5 },
  hobby: { fontSize: 16, marginBottom: 3 }
});
