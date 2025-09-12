import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import HolaMundo from "./componentes/HolaMundo";
import PrimeraTarjeta from './componentes/PrimeraTarjeta';
import ImagenPerfil from './componentes/ImagenPerfil';
import BotonInteractivo from './componentes/BotonInteractivo';

export default function App() {
  return (
    <>
    <HolaMundo/>
    <hr/>
    <PrimeraTarjeta/>
    <hr/>
    <ImagenPerfil/>
    <hr/>
    <BotonInteractivo/>
    </>
  );
}

