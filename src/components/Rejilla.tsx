
import { StyleSheet, View } from "react-native";
import Boton from "./Botones/Boton";

const Rejilla = () => {
  return (
    <View style={styles.container}>
      <View style={styles.fila}>
        <Boton texto="C" color="gris" />
        <Boton texto="E" color="gris" />
        <Boton texto="%" color="gris" />
        <Boton texto="÷" color="azul" />
      </View>

      <View style={styles.fila}>
        <Boton texto="7" />
        <Boton texto="8" />
        <Boton texto="9" />
        <Boton texto="×" color="azul" />
      </View>

      <View style={styles.fila}>
        <Boton texto="4" />
        <Boton texto="5" />
        <Boton texto="6" />
        <Boton texto="−" color="azul" />
      </View>

      <View style={styles.fila}>
        <Boton texto="1" />
        <Boton texto="2" />
        <Boton texto="3" />
        <Boton texto="+" color="azul" />
      </View>

      <View style={styles.fila}>
        <Boton texto="0" ancho={136} />
        <Boton texto="." />
        <Boton texto="=" color="azul" />
      </View>
    </View>
  );
};

export default Rejilla;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    gap: 8,
  },
  fila: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 8,
  },
});

