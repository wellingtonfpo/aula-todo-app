import { useState } from 'react';
import { 
  StyleSheet, 
  View, 
  Text, 
  TouchableOpacity,
  FlatList,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  Alert
 } from 'react-native';
import { 
  SafeAreaProvider, 
  SafeAreaView 
} from 'react-native-safe-area-context';

import { renderItem } from './src/components/RenderItem';
import { Title } from './src/components/Title';
import { Footer } from './src/components/Footer';

function gerarId() {
  return Date.now().toString() + Math.random().toString(16).slice(2);
}

export default function App() {
  const [tarefas, setTarefas] = useState([]);
  const [novaTarefa, setNovaTarefa] = useState('');

  function adicionarTarefa() {
    const texto = novaTarefa.trim();

    if (texto.length === 0) {
      return;
    }

    const tarefa = { id: gerarId(), titulo: texto }
    setTarefas((tarefasAtuais) => [...tarefasAtuais, tarefa]);
    setNovaTarefa('');
  }

function excluirTarefa(id) {
  setTarefas((tarefasAtuais) => 
    tarefasAtuais.filter((tarefa) => tarefa.id !== id));
}

function confirmarExclusao(tarefa) {
  Alert.alert(
    'Excluir Tarefa',
    `Deseja excluir a tarefa "${tarefa.titulo}"?`,
    [
      { text: 'Cancelar', style: 'cancel' },
      { 
        text: 'Sim', 
        style: 'destructive', 
        onPress: () => excluirTarefa(tarefa.id)
      }
    ],
    { cancelable: true }
  )
}
  
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView 
        style={styles.keyboardFlex}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >
        <Title texto={'Lista de Tarefas'}/>
        
        <Title texto={'Lista de Compras'}/>

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
        
        <Footer 
          value={novaTarefa}
          onChangeText={setNovaTarefa}
          adicionarTarefa={adicionarTarefa}
        />
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
  lista: {
    paddingHorizontal: 24,
    paddingBottom: 16,
    flexGrow: 1
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
  keyboardFlex: {
    flex: 1
  }
});
