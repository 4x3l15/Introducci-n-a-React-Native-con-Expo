import { View, Button, Pressable, Text, Alert } from "react-native";

export default function BotonInteractivo() {
  return (
    <View style={{ marginTop: 80, alignItems: "center" }}>
      <Button title="Presioname" onPress={() => Alert.alert("¡Hola!")} />

      <Pressable
        onPress={() => Alert.alert("¡Botón saludo!")}
        style={{
          backgroundColor: "tomato",
          padding: 10,
          borderRadius: 8,
          marginTop: 20,
        }}
      >
        <Text style={{ color: "white" }}>Botón Saludo</Text>
      </Pressable>
    </View>
  );
}
