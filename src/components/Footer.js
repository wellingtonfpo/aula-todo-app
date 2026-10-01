import { 
    View, 
    TouchableOpacity, 
    Text, 
    StyleSheet, 
    TextInput 
} from 'react-native'

export function Footer({ value, onChangeText, adicionarTarefa }) {
  return (
    <View style={styles.rodape}>
    <TextInput
      placeholder="Ex: Estudar JavaScript"
      placeholderTextColor="#9A9184"
      style={styles.input}
      value={value}
      onChangeText={onChangeText}
      onSubmitEditing={adicionarTarefa}
      returnKeyType="done"
    />
    <TouchableOpacity style={styles.botaoAdicionar} onPress={adicionarTarefa}>
      <Text style={styles.botaoTexto}>Adicionar</Text>
    </TouchableOpacity>
  </View>
  )
}

const styles = StyleSheet.create({
    rodape: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 24,
    paddingVertical: 16,
    borderTopWidth: 1,
    borderTopColor: '#ECE6D8',
  },
  input: {
    flex: 1,
    backgroundColor: '#FFF',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ECE6D8',
    paddingHorizontal: 14,
    paddingVertical: 12,
    color: '#1D2B3A',
    marginRight: 10
  },
  botaoAdicionar: {
    backgroundColor: '#6B8F71',
    paddingHorizontal: 18,
    paddingVertical: 12,
    borderRadius: 10
  },
  botaoTexto: {
    color: '#FFF',
    fontWeight: '700',
    fontSize: 14
  },
})