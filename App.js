import { StyleSheet, View, Text } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitulo}>Tarefas de Estudo</Text>
        <Text>2 Tarefas Pendentes</Text>
      </View>
    </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAF6EE'
  },
  headerTitulo: {
    fontSize: 26,
    fontWeight: 'bold'
  },
  header: {
    paddingTop: 16,
    paddingBottom: 12,
    paddingHorizontal: 24
  }
});
