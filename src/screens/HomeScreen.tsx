import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../App';

interface HomeScreenProps {
  navigation: StackNavigationProp<RootStackParamList, 'Home'>;
}

/**
 * TELA PRINCIPAL - React Hooks Didático
 * Conceitos demonstrados:
 * - Componente funcional com TypeScript
 * - Props tipadas
 * - Navegação entre telas
 */
const HomeScreen: React.FC<HomeScreenProps> = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.header}>
          <Text style={styles.title}>React Hooks</Text>
          <Text style={styles.subtitle}>Aplicativo React Native</Text>
          <Text style={styles.description}>
            Aprenda React Hooks na prática com exemplos abaixo:
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>useState - Gerenciamento de Estado</Text>
          <Text style={styles.sectionDescription}>
            O hook useState permite adicionar estado local aos componentes funcionais
          </Text>
          
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('Counter')}
          >
            <Text style={styles.buttonText}>1. Contador Simples</Text>
            <Text style={styles.buttonSubtext}>Incrementar e decrementar valores</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('Form')}
          >
            <Text style={styles.buttonText}>2. Formulário Interativo</Text>
            <Text style={styles.buttonSubtext}>Gerenciar múltiplos campos</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('Toggle')}
          >
            <Text style={styles.buttonText}>3. Toggle e Lista</Text>
            <Text style={styles.buttonSubtext}>Adicionar/remover itens dinamicamente</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>useEffect - Efeitos Colaterais</Text>
          <Text style={styles.sectionDescription}>
            O hook useEffect permite executar efeitos colaterais em componentes funcionais
          </Text>
          
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('Timer')}
          >
            <Text style={styles.buttonText}>4. Timer e API</Text>
            <Text style={styles.buttonSubtext}>Requisições e intervalos</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Hook Customizado</Text>
          <Text style={styles.sectionDescription}>
            Criando nossos próprios hooks para reutilizar lógica
          </Text>
          
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('CustomHook')}
          >
            <Text style={styles.buttonText}>5. useCounter</Text>
            <Text style={styles.buttonSubtext}>Hook customizado</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  scrollContent: {
    padding: 20,
  },
  header: {
    alignItems: 'center',
    marginBottom: 30,
    paddingVertical: 20,
    backgroundColor: '#fff',
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#2c3e50',
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 18,
    color: '#7f8c8d',
    marginBottom: 10,
  },
  description: {
    fontSize: 14,
    color: '#95a5a6',
    textAlign: 'center',
    paddingHorizontal: 20,
  },
  section: {
    marginBottom: 25,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#2c3e50',
    marginBottom: 8,
  },
  sectionDescription: {
    fontSize: 14,
    color: '#7f8c8d',
    marginBottom: 15,
    lineHeight: 20,
  },
  button: {
    backgroundColor: '#3498db',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 3,
  },
  buttonSubtext: {
    color: '#ecf0f1',
    fontSize: 12,
  },
});

export default HomeScreen;
