import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

/**
 * TELA 1: CONTADOR SIMPLES - useState Básico
 * 
 * Esta tela demonstra o uso mais básico do hook useState.
 * 
 * Conceitos ensinados:
 * - Como importar useState do React
 * - Como declarar uma variável de estado
 * - Como atualizar o estado com setState
 * - Re-renderização automática quando o estado muda
 */
const CounterScreen: React.FC = () => {
  // useState: Hook para gerenciar estado local
  // Sintaxe: const [valor, setValor] = useState(valorInicial)
  const [count, setCount] = useState(0); // Estado para o contador

  // Função para incrementar o contador
  const increment = () => {
    setCount(count + 1); // Atualiza o estado, causando re-renderização
  };

  // Função para decrementar o contador
  const decrement = () => {
    setCount(count - 1); // Atualiza o estado, causando re-renderização
  };

  // Função para resetar o contador
  const reset = () => {
    setCount(0); // Volta ao valor inicial
  };

  // Função para mostrar informações sobre o estado
  const showInfo = () => {
    Alert.alert(
      'Informações sobre useState',
      `Valor atual: ${count}\n\n` +
      '• useState retorna um array com 2 elementos\n' +
      '• Primeiro elemento: valor atual do estado\n' +
      '• Segundo elemento: função para atualizar o estado\n' +
      '• Toda atualização causa re-renderização do componente',
      [{ text: 'OK' }]
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Contador Simples</Text>
        <Text style={styles.subtitle}>useState Básico</Text>

        <View style={styles.explanation}>
          <Text style={styles.explanationTitle}>Como funciona:</Text>
          <Text style={styles.explanationText}>
            • useState(0) cria um estado inicializado com 0{'\n'}
            • setCount atualiza o valor e re-renderiza o componente{'\n'}
            • O valor é preservado entre re-renderizações
          </Text>
        </View>

        <View style={styles.counterDisplay}>
          <Text style={styles.counterValue}>{count}</Text>
          <Text style={styles.counterLabel}>Valor Atual</Text>
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={decrement}>
            <Text style={styles.buttonText}>-1</Text>
          </TouchableOpacity>

          <TouchableOpacity style={[styles.button, styles.resetButton]} onPress={reset}>
            <Text style={styles.buttonText}>Reset</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button} onPress={increment}>
            <Text style={styles.buttonText}>+1</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.infoButton} onPress={showInfo}>
          <Text style={styles.infoButtonText}>Informações sobre useState</Text>
        </TouchableOpacity>

      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  content: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#2c3e50',
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 16,
    color: '#7f8c8d',
    marginBottom: 20,
  },
  explanation: {
    backgroundColor: '#e8f4fd',
    padding: 15,
    borderRadius: 10,
    marginBottom: 30,
    width: '100%',
  },
  explanationTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#2980b9',
    marginBottom: 8,
  },
  explanationText: {
    fontSize: 14,
    color: '#34495e',
    lineHeight: 20,
  },
  counterDisplay: {
    backgroundColor: '#fff',
    padding: 40,
    borderRadius: 20,
    alignItems: 'center',
    marginBottom: 30,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  counterValue: {
    fontSize: 48,
    fontWeight: 'bold',
    color: '#27ae60',
    marginBottom: 5,
  },
  counterLabel: {
    fontSize: 14,
    color: '#7f8c8d',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#3498db',
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderRadius: 10,
    minWidth: 80,
    alignItems: 'center',
  },
  resetButton: {
    backgroundColor: '#e74c3c',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  infoButton: {
    backgroundColor: '#9b59b6',
    padding: 12,
    borderRadius: 8,
    marginBottom: 20,
  },
  infoButtonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
  },
  codeExample: {
    backgroundColor: '#2c3e50',
    padding: 15,
    borderRadius: 10,
    width: '100%',
  },
  codeTitle: {
    color: '#ecf0f1',
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  codeText: {
    color: '#e74c3c',
    fontSize: 12,
    fontFamily: 'monospace',
    lineHeight: 18,
  },
});

export default CounterScreen;
