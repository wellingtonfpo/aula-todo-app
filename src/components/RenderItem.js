import { StyleSheet, View, Text, TouchableOpacity } from "react-native";

export function RenderItem({ item }) {
  return (
    <View style={styles.itemContainer}>
      <View style={styles.itemBullet}></View>
      <Text style={styles.itemTexto}>{item.titulo}</Text>
      <TouchableOpacity
        style={styles.botaoExcluir}
        onPress={() => confirmarExclusao(item)}
      >
        <Text style={styles.botaoExluirTexto}>Excluir</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  itemContainer: {
    backgroundColor: "#FFF",
    paddingVertical: 14,
    paddingHorizontal: 14,
    marginBottom: 10,
    borderColor: "#ECE6D8",
    borderWidth: 1,
    borderRadius: 12,
    flexDirection: "row",
    alignItems: "center",
  },
  itemTexto: {
    fontSize: 15,
    color: "#1D2B3A",
    flex: 1,
  },
  itemBullet: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "#6B8F71",
    marginRight: 12,
  },
  botaoExcluir: {
    paddingVertical: 6,
    paddingHorizontal: 10,
    borderRadius: 8,
    backgroundColor: "#FBEAE6",
  },
  botaoExluirTexto: {
    color: "#B3492F",
    fontSize: 13,
    fontWeight: "600",
  },
});
