import { ScrollView, View } from "react-native";
import HolaMundo from "./componentes/HolaMundo";
import PrimeraTarjeta from './componentes/PrimeraTarjeta';
import ImagenPerfil from './componentes/ImagenPerfil';
import BotonInteractivo from './componentes/BotonInteractivo';
import Frases from './componentes/Frases';
import Tarjetas from './componentes/Tarjetas';

const Separator = () => <View style={{ height: 1, backgroundColor: "#ccc", marginVertical: 10 }} />;


export default function App() {
  return (
    <ScrollView contentContainerStyle={{ paddingVertical: 20 }}>
      <HolaMundo />
      <Separator/>
      <PrimeraTarjeta />
      <Separator/>
      <ImagenPerfil />
      <Separator/>
      <BotonInteractivo />
      <Separator/>
      <Frases />
      <Separator/>
      <Tarjetas />
    </ScrollView>
  );
}
