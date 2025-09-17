import React from 'react';
import { View, Text, StyleSheet, StatusBar } from 'react-native';

export default function Actividad7() {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#6200ee" />
      <Text style={styles.text}>Revisá la StatusBar arriba</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#6200ee", justifyContent: "center", alignItems: "center" },
  text: { color: "#fff", fontSize: 20 }
});

