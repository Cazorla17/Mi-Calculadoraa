
import { StyleSheet, View } from "react-native";
import Boton from "./Botones/Boton";

const Rejilla = () => {
  return (
    <View style={styles.container}>
      <Boton texto="C" color="gris" />
      <Boton texto="E" color="gris" />
      <Boton texto="%" color="gris" />
      <Boton texto="÷" color="azul" />

      <Boton texto="7" />
      <Boton texto="8" />
      <Boton texto="9" />
      <Boton texto="×" color="azul" />

      <Boton texto="4" />
      <Boton texto="5" />
      <Boton texto="6" />
      <Boton texto="−" color="azul" />

      <Boton texto="1" />
      <Boton texto="2" />
      <Boton texto="3" />
      <Boton texto="+" color="azul" />

      <Boton texto="±" color="gris" />
      <Boton texto="0" />
      <Boton texto="." />
      <Boton texto="=" color="azul" />
    </View>
  );
};

export default Rejilla;

const styles = StyleSheet.create({
  container: {
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  flexWrap: "wrap",
  width: "100%",
  paddingHorizontal: 4,
  gap: 8,
},
});
