
import { StyleSheet, Text, View } from "react-native";

interface DisplayProps {
  display: string;
}

const Display = ({ display }: DisplayProps) => {
  return (
    <View style={styles.display}>
      <Text style={styles.etiqueta}>Calculadora</Text>
      <Text style={styles.numero}>{display}</Text>
    </View>
  );
};

export default Display;

const styles = StyleSheet.create({
  display: {
    width: "100%",
    minHeight: 140,
    backgroundColor: "#EAF2FF",
    borderRadius: 24,
    padding: 20,
    justifyContent: "flex-end",
    alignItems: "flex-end",
    borderWidth: 1,
    borderColor: "#D6E5FF",
  },
  etiqueta: {
    fontSize: 12,
    color: "#6680A8",
    marginBottom: 8,
  },
  numero: {
    fontSize: 36,
    color: "#172033",
    fontWeight: "bold",
  },
});
