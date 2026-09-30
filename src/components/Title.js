import { View, Text, StyleSheet } from "react-native";

export function Title() {
  return (
    <View style={styles.header}>
      <Text style={styles.headerTitulo}>Tarefas de Estudo</Text>
      <Text style={styles.headerSubTitulo}>2 Tarefas Pendentes</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  headerTitulo: {
    fontSize: 26,
    fontWeight: "bold",
  },
  headerSubTitulo: {
    fontSize: 14,
    color: "#6B7280",
    marginTop: 4,
  },
  header: {
    paddingTop: 16,
    paddingBottom: 12,
    paddingHorizontal: 24,
  },
});
