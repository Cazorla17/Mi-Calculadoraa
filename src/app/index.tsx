
import { StyleSheet, Text, View } from "react-native";
import Display from "../components/Display";
import Rejilla from "../components/Rejilla";

export default function Index() {
  return (
    <View style={styles.container}>
      <View style={styles.encabezado}>
      <Text style={styles.titulo}>Calculadora</Text>
    </View>

      <Display />

      <Text style={styles.textoBotones}>OPERACIONES</Text>

      <Rejilla />

      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    paddingHorizontal: 20,
    paddingTop: 60,
  },
  encabezado: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 30,
    gap: 12,
  },
  icono: {
    fontSize: 35,
    color: "#3478F6",
  },
  titulo: {
    fontSize: 27,
    fontWeight: "bold",
    color: "#172033",
  },
  subtitulo: {
    fontSize: 14,
    color: "#7A879B",
    marginTop: 3,
  },
  textoBotones: {
    fontSize: 12,
    fontWeight: "bold",
    color: "#7A879B",
    marginTop: 15,
    marginBottom: 10,
    letterSpacing: 2,
  },
  
});
