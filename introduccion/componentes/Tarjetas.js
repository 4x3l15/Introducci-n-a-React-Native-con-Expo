import { ScrollView, View, Text, Image, StyleSheet } from "react-native";

export default function Tarjetas() {
  const games = [
    { title: "Minecraft", score: 10, description: "Juego de bloques", image: "https://www.google.com/imgres?q=minecraft&imgurl=https%3A%2F%2Fassets.nintendo.com%2Fimage%2Fupload%2Far_16%3A9%2Cc_lpad%2Cw_1240%2Fb_white%2Ff_auto%2Fq_auto%2Fncom%2Fsoftware%2Fswitch%2F70010000000964%2Fa28a81253e919298beab2295e39a56b7a5140ef15abdb56135655e5c221b2a3a&imgrefurl=https%3A%2F%2Fwww.nintendo.com%2Fes-ar%2Fstore%2Fproducts%2Fminecraft-switch%2F%3Fsrsltid%3DAfmBOoqTreCQ-BuhikydZAJ7jGPcXAAy6534srizBH_ptFO9oS04QCDl&docid=2Z4XbW053wp9wM&tbnid=tmnthkqZJwI3dM&vet=12ahUKEwj1x-CJzd2PAxXFtJUCHfXANCYQM3oECBkQAA..i&w=1240&h=698&hcb=2&ved=2ahUKEwj1x-CJzd2PAxXFtJUCHfXANCYQM3oECBkQAA" },
    { title: "FIFA", score: 9, description: "Fútbol realista", image: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fes.wikipedia.org%2Fwiki%2FFIFA&psig=AOvVaw1qQDMjx2FGPEc2SYk9ndKp&ust=1758123197804000&source=images&cd=vfe&opi=89978449&ved=0CBUQjRxqFwoTCMje6rfN3Y8DFQAAAAAdAAAAABAE" },
    { title: "GTA V", score: 10, description: "Mundo abierto", image: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.softonic.com%2Farticulos%2Fvideos-de-gta-5-rockstar-editor&psig=AOvVaw1XGfFyswdymMaA0-rx1z3C&ust=1758123286599000&source=images&cd=vfe&opi=89978449&ved=0CBUQjRxqFwoTCLi1rePN3Y8DFQAAAAAdAAAAABAE" },
    { title: "Among Us", score: 8, description: "Juego social", image: "https://www.google.com/imgres?q=among%20us&imgurl=https%3A%2F%2Fassets.nintendo.com%2Fimage%2Fupload%2Fc_fill%2Cw_1200%2Fq_auto%3Abest%2Ff_auto%2Fdpr_2.0%2Fncom%2Fsoftware%2Fswitch%2F70010000036098%2F758ab0b61205081da2466386940752c70e0e5ea43bd39e8b9b13eaa455c69b7e&imgrefurl=https%3A%2F%2Fwww.nintendo.com%2Fes-ar%2Fstore%2Fproducts%2Famong-us-switch%2F%3Fsrsltid%3DAfmBOopD6eNUcGtK9gYgedBkRypveX9VLpKDUWOHP_IM21ndhGj4B51v&docid=2luDwn4XgmCk7M&tbnid=nWqk_1-mokHFcM&vet=12ahUKEwjUgeDBzd2PAxV2qpUCHZEsO2AQM3oECBQQAA..i&w=2400&h=1350&hcb=2&ved=2ahUKEwjUgeDBzd2PAxV2qpUCHZEsO2AQM3oECBQQAA" },
    { title: "Zelda", score: 10, description: "Aventura épica", image: "https://www.google.com/imgres?q=zalda&imgurl=https%3A%2F%2Fm.media-amazon.com%2Fimages%2FI%2F41WhNiDeJwL._UF1000%2C1000_QL80_.jpg&imgrefurl=https%3A%2F%2Fwww.amazon.com%2F-%2Fes%2Fdp%2F8861236308&docid=J2nkFRtE1aUMnM&tbnid=n6ACfKkE27bubM&vet=12ahUKEwiLpZ2Ozt2PAxXUpZUCHe0MIqwQM3oECBwQAA..i&w=689&h=1000&hcb=2&ved=2ahUKEwiLpZ2Ozt2PAxXUpZUCHe0MIqwQM3oECBwQAA" }
  ];

  return (
    <ScrollView>
      {games.map((g, i) => (
        <View key={i} style={styles.card}>
          <Image source={{ uri: g.image }} style={styles.image} />
          <Text style={styles.title}>{g.title} ⭐ {g.score}</Text>
          <Text>{g.description}</Text>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  card: { margin: 10, padding: 10, borderWidth: 1, borderRadius: 10, backgroundColor: "#fff" },
  image: { width: "100%", height: 150, borderRadius: 10 },
  title: { fontSize: 20, fontWeight: "bold", marginTop: 5 }
});
