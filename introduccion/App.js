import { ScrollView, View } from "react-native";
import HolaMundo from "./componentes/HolaMundo";
import PrimeraTarjeta from './componentes/PrimeraTarjeta';
import ImagenPerfil from './componentes/ImagenPerfil';
import BotonInteractivo from './componentes/BotonInteractivo';
import Frases from './componentes/Frases';
import Tarjetas from './componentes/Tarjetas';
import Actividad7 from "./componentes/Actividad7";
import Act8 from "./componentes/Act8";
import Act9 from "./componentes/Act9";

const Separador = () => <View style={{ height: 1, backgroundColor: "#ccc", marginVertical: 10 }} />;


export default function App() {
  return (
    <ScrollView contentContainerStyle={{ paddingVertical: 20 }}>
      <HolaMundo />
      <Separador/>
      <PrimeraTarjeta />
      <Separador/>
      <ImagenPerfil />
      <Separador/>
      <BotonInteractivo />
      <Separador/>
      <Frases />
      <Separador/>
      <Tarjetas />
      <Separador/>
      <Actividad7/>
      <Separador/>
      <Act8/>
      <Separador/>
      <Act9/>
    </ScrollView>
  );
}
