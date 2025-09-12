import { View, Text, Image } from "react-native";

export default function ImagenPerfil() {
    return (
        <View style={{ marginTop: 80, alignItems: "center" }}>
        <Image
          source={{
            uri: "https://img.freepik.com/vector-premium/perfil-hombre-dibujos-animados_18591-58482.jpg",
          }}
          style={{ width: 100, height: 100, borderRadius: 50 }}
        />
        <Text style={{ marginTop: 10, fontSize: 20 }}>Mi Perfil</Text>
      </View>
    );
}