
import { StyleSheet, Text, View } from "react-native";
import Display from "../components/Display";
import Rejilla from "../components/Rejilla";
import useCalculator from "../hooks/useCalculator";

export default function Index() {
  const {
    display,
    escribirNumero,
    escribirOperador,
    limpiar,
    borrar,
    cambiarSigno,
    calcular,
  } = useCalculator();

  return (
    <View style={styles.container}>
      <View style={styles.encabezado}>
        <Text style={styles.titulo}>Calculadora</Text>
      </View>

      <Display display={display} />

      <Text style={styles.textoBotones}>OPERACIONES</Text>

      <Rejilla
        escribirNumero={escribirNumero}
        escribirOperador={escribirOperador}
        limpiar={limpiar}
        borrar={borrar}
        cambiarSigno={cambiarSigno}
        calcular={calcular}
      />
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
  titulo: {
    fontSize: 27,
    fontWeight: "bold",
    color: "#172033",
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
