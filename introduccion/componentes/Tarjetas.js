import { ScrollView, View, Text, Image, StyleSheet } from "react-native";

export default function Tarjetas() {
  const games = [
    { title: "Minecraft", score: 10, description: "Construye mundos infinitos", image: require("./img/minecraft.jpg") },
    { title: "FIFA", score: 9, description: "Fútbol realista y competitivo", image: require("./img/fifa.png") },
    { title: "GTA V", score: 10, description: "Explora un mundo abierto lleno de aventuras", image: require("./img/gta v.jpg") },
    { title: "Among Us", score: 8, description: "Juego social de misterio y estrategia", image: require("./img/among us.jpg") },
    { title: "Zelda", score: 10, description: "Aventura épica en un mundo mágico", image: require("./img/zelda.jpg") }
  ];

  return (
    <ScrollView style={styles.container}>
      {games.map((g, i) => (
        <View key={i} style={styles.card}>
          <Image source={g.image} style={styles.image} />
          <View style={styles.textContainer}>
            <Text style={styles.title}>{g.title}</Text>
            <Text style={styles.score}>⭐ {g.score}</Text>
            <Text style={styles.description}>{g.description}</Text>
          </View>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: "#f2f2f2"
  },
  card: {
    marginBottom: 15,
    marginLeft: 50,
    marginRight: 50,
    borderRadius: 15,
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5,
    overflow: "hidden"
  },
  image: {
    width: "100%",
    height: 180,
  },
  textContainer: {
    padding: 15
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 5
  },
  score: {
    fontSize: 16,
    color: "#ffb400",
    marginBottom: 10
  },
  description: {
    fontSize: 16,
    color: "#555"
  }
});
