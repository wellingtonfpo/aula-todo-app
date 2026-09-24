import { useState } from 'react';
import { 
  StyleSheet, 
  View, 
  Text, 
  TouchableOpacity,
  FlatList,
  TextInput,
  KeyboardAvoidingView,
  Platform
 } from 'react-native';
import { 
  SafeAreaProvider, 
  SafeAreaView 
} from 'react-native-safe-area-context';

function renderItem({ item }) {
  return (
    <View style={styles.itemContainer}>
      <View style={styles.itemBullet}></View>
      <Text style={styles.itemTexto}>{item.titulo}</Text>
      <TouchableOpacity style={styles.botaoExcluir}>
        <Text style={styles.botaoExluirTexto}>Excluir</Text>
      </TouchableOpacity>
    </View>
  )
}

export default function App() {
  const [tarefas, setTarefas] = useState([]);
  const [novaTarefa, setNovaTarefa] = useState('');

  function adicionarTarefa() {
    const texto = novaTarefa;
    const nova = { id: 1, titulo: texto };
    setTarefas((tarefasAtuais) => [...tarefasAtuais, nova]);
  }
  
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView 
        style={styles.keyboardFlex}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >
        <View style={styles.header}>
        <Text style={styles.headerTitulo}>Tarefas de Estudo</Text>
        <Text style={styles.headerSubTitulo}>2 Tarefas Pendentes</Text>
      </View>
        
      <FlatList
        data={tarefas}
        keyExtractor={(tarefa) => tarefa.id}
        renderItem={renderItem}
        contentContainerStyle={styles.lista}
        ListEmptyComponent={
          <View style={styles.vazioContainer}>
            <Text style={styles.vazioTexto}>
              Sua Lista está vazia. Adicione a primeira tarefa de estudo.
            </Text>
          </View>
        }
      />

      <View style={styles.rodape}>
        <TextInput 
          placeholder='Ex: Estudar JavaScript'
          placeholderTextColor='#9A9184'
          style={styles.input}
        />
        <TouchableOpacity style={styles.botaoAdicionar}>
          <Text style={styles.botaoTexto}>Adicionar</Text>
        </TouchableOpacity>
      </View>
      </KeyboardAvoidingView>
      
    </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAF6EE',
  },
  headerTitulo: {
    fontSize: 26,
    fontWeight: 'bold'
  },
  headerSubTitulo: {
    fontSize: 14,
    color: '#6B7280',
    marginTop: 4
  },
  header: {
    paddingTop: 16,
    paddingBottom: 12,
    paddingHorizontal: 24
  },
  lista: {
    paddingHorizontal: 24,
    paddingBottom: 16,
    flexGrow: 1
  },
  itemContainer: {
    backgroundColor: '#FFF',
    paddingVertical: 14,
    paddingHorizontal: 14,
    marginBottom: 10,
    borderColor: '#ECE6D8',
    borderWidth: 1,
    borderRadius: 12,
    flexDirection: 'row',
    alignItems: 'center'
  },
  itemTexto: {
    fontSize: 15,
    color: '#1D2B3A',
    flex: 1
  },
  itemBullet: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#6B8F71',
    marginRight: 12
  },
  botaoExcluir: {
    paddingVertical: 6,
    paddingHorizontal: 10,
    borderRadius: 8,
    backgroundColor: '#FBEAE6'
  },
  botaoExluirTexto: {
    color: '#B3492F',
    fontSize: 13,
    fontWeight: '600'
  },
  vazioContainer: {
    paddingTop: 48,
    alignItems: 'center'
  },
  vazioTexto: {
    fontSize: 14,
    color: '#8C8577',
    textAlign: 'center',
    // paddingHorizontal: 32,
    maxWidth: '80%' // Dica do Diogo 
  },
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
  keyboardFlex: {
    flex: 1
  }
});
