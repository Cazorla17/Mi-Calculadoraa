
import { StyleSheet, Text, TouchableOpacity } from "react-native";

interface BotonProps {
  texto: string;
  color?: "azul" | "gris" | "blanco";
  ancho?: number;
}

const Boton = ({
  texto,
  color = "blanco",
  ancho = 60,
}: BotonProps) => {
  return (
    <TouchableOpacity
      style={[styles.boton, styles[color], { width: ancho }]}
    >
      <Text
        style={[
          styles.texto,
          color === "azul" && styles.textoBlanco,
        ]}
      >
        {texto}
      </Text>
    </TouchableOpacity>
  );
};

export default Boton;

const styles = StyleSheet.create({
  boton: {
    height: 60,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  azul: {
    backgroundColor: "#3478F6",
  },
  gris: {
    backgroundColor: "#E3E8F0",
  },
  blanco: {
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: "#DCE3ED",
  },
  texto: {
    fontSize: 25,
    color: "#172033",
    fontWeight: "600",
  },
  textoBlanco: {
    color: "#FFFFFF",
  },
});
