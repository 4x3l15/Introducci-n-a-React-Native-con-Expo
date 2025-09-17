import React from 'react';
import { ScrollView, Text, StyleSheet } from 'react-native';

export default function ScrollFrases() {
  const frases = [
    'que dije?', 'LAMMMMM', 'Eescuchaaa',
    'Tu favorita', 'La nena de Argentina', 'Un dia a la vez',
    'Codificando se aprende', 'Nunca dejes de intentar', 'Practica y practica',
    'Callate un rato', 'Nunca mas¡!',
    'Odio programar', '¡Sigue adelante!',
  ];

  return (
    <ScrollView style={styles.container}>
      {frases.map((frase, i) => (
        <Text key={i} style={styles.text}>{frase}</Text>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20 },
  text: { fontSize: 18, marginBottom: 10 },
});
