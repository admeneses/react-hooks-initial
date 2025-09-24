import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Alert,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useCounter } from '../hooks/useCounter';

/**
 * TELA 5: HOOK CUSTOMIZADO - useCounter
 * 
 * Esta tela demonstra como criar e usar hooks customizados:
 * - useCounter: para lógica de contador reutilizável com histórico
 * 
 * Conceitos ensinados:
 * - Criação de hooks customizados
 * - Encapsulamento de lógica reutilizável
 * - Composição de hooks
 * - Reutilização de lógica entre componentes
 */
const CustomHookScreen: React.FC = () => {
  // Usando o hook customizado useCounter
  const {
    count,
    increment,
    decrement,
    reset,
    undo,
    history,
    canUndo,
  } = useCounter(0);

  // Estado local para demonstrar múltiplos contadores
  const [step, setStep] = useState(1);

  // Função para mostrar informações sobre hooks customizados
  const showCustomHookInfo = () => {
    Alert.alert(
      'Hooks Customizados',
      'Hooks customizados permitem extrair lógica reutilizável:\n\n' +
      '• Começam com "use"\n' +
      '• Podem usar outros hooks internamente\n' +
      '• Encapsulam lógica complexa\n' +
      '• Facilitam reutilização de código\n\n' +
      'Exemplo: useCounter, useApi, useForm, etc.',
      [{ text: 'Entendi!' }]
    );
  };

  // Função para mostrar o código do hook
  const showHookCode = () => {
    Alert.alert(
      'Código do useCounter',
      'export function useCounter(initialValue = 0) {\n' +
      '  const [count, setCount] = useState(initialValue);\n' +
      '  const [history, setHistory] = useState([initialValue]);\n\n' +
      '  const increment = () => {\n' +
      '    setCount(prev => {\n' +
      '      const newCount = prev + 1;\n' +
      '      setHistory(prevHistory => [...prevHistory, newCount]);\n' +
      '      return newCount;\n' +
      '    });\n' +
      '  };\n\n' +
      '  return { count, increment, decrement, reset, undo, history };\n' +
      '}',
      [{ text: 'OK' }]
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.content}>
          <Text style={styles.title}>Hook Customizado</Text>
          <Text style={styles.subtitle}>useCounter - Contador com Histórico</Text>

          <View style={styles.explanation}>
            <Text style={styles.explanationTitle}>Como funciona:</Text>
            <Text style={styles.explanationText}>
              • Hooks customizados começam com "use"{'\n'}
              • Encapsulam lógica reutilizável{'\n'}
              • Podem usar outros hooks internamente{'\n'}
              • Facilitam manutenção e testes{'\n'}
              • Retornam valores e funções
            </Text>
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Contador Principal</Text>
            
            <View style={styles.counterDisplay}>
              <Text style={styles.counterValue}>{count}</Text>
              <Text style={styles.counterLabel}>Valor Atual</Text>
            </View>

            <View style={styles.counterControls}>
              <TouchableOpacity style={styles.counterButton} onPress={decrement}>
                <Text style={styles.counterButtonText}>-1</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.counterButton} onPress={increment}>
                <Text style={styles.counterButtonText}>+1</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.resetButton} onPress={reset}>
                <Text style={styles.resetButtonText}>Reset</Text>
              </TouchableOpacity>

              <TouchableOpacity 
                style={[styles.undoButton, !canUndo && styles.undoButtonDisabled]} 
                onPress={undo}
                disabled={!canUndo}
              >
                <Text style={styles.undoButtonText}>Desfazer</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.historyContainer}>
              <Text style={styles.historyTitle}>Histórico de Valores:</Text>
              <Text style={styles.historyText}>
                {history.slice(-8).join(' → ')}
                {history.length > 8 && ' ...'}
              </Text>
              <Text style={styles.historyStats}>
                Total de operações: {history.length - 1}
              </Text>
            </View>
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Configurações</Text>
            
            <View style={styles.configContainer}>
              <Text style={styles.configLabel}>Passo do contador: {step}</Text>
              <View style={styles.configButtons}>
                <TouchableOpacity 
                  style={styles.configButton}
                  onPress={() => setStep(Math.max(1, step - 1))}
                >
                  <Text style={styles.configButtonText}>-</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                  style={styles.configButton}
                  onPress={() => setStep(step + 1)}
                >
                  <Text style={styles.configButtonText}>+</Text>
                </TouchableOpacity>
              </View>
            </View>

            <View style={styles.statsContainer}>
              <Text style={styles.statsTitle}>Estatísticas:</Text>
              <Text style={styles.statsText}>Valor máximo: {Math.max(...history)}</Text>
              <Text style={styles.statsText}>Valor mínimo: {Math.min(...history)}</Text>
              <Text style={styles.statsText}>Média: {(history.reduce((a, b) => a + b, 0) / history.length).toFixed(1)}</Text>
            </View>
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Informações</Text>
            
            <TouchableOpacity style={styles.infoButton} onPress={showCustomHookInfo}>
              <Text style={styles.infoButtonText}>Sobre Hooks Customizados</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.codeButton} onPress={showHookCode}>
              <Text style={styles.codeButtonText}>Ver Código do Hook</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Vantagens</Text>
            <View style={styles.advantagesContainer}>
              <Text style={styles.advantageText}>Reutilização de lógica</Text>
              <Text style={styles.advantageText}>Facilita testes</Text>
              <Text style={styles.advantageText}>Encapsulamento</Text>
              <Text style={styles.advantageText}>Manutenção simplificada</Text>
              <Text style={styles.advantageText}>Código mais legível</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  scrollContent: {
    padding: 20,
  },
  content: {
    flex: 1,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#2c3e50',
    marginBottom: 5,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: '#7f8c8d',
    marginBottom: 20,
    textAlign: 'center',
  },
  explanation: {
    backgroundColor: '#e8f4fd',
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
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
  section: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2c3e50',
    marginBottom: 15,
  },
  counterDisplay: {
    backgroundColor: '#f8f9fa',
    padding: 30,
    borderRadius: 15,
    alignItems: 'center',
    marginBottom: 20,
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
  counterControls: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  counterButton: {
    backgroundColor: '#3498db',
    padding: 15,
    borderRadius: 10,
    minWidth: 70,
    alignItems: 'center',
  },
  counterButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  resetButton: {
    backgroundColor: '#95a5a6',
    padding: 15,
    borderRadius: 10,
    minWidth: 70,
    alignItems: 'center',
  },
  resetButtonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
  },
  undoButton: {
    backgroundColor: '#9b59b6',
    padding: 15,
    borderRadius: 10,
    minWidth: 70,
    alignItems: 'center',
  },
  undoButtonDisabled: {
    backgroundColor: '#bdc3c7',
  },
  undoButtonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
  },
  historyContainer: {
    backgroundColor: '#e8f4fd',
    padding: 15,
    borderRadius: 10,
  },
  historyTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#2980b9',
    marginBottom: 8,
  },
  historyText: {
    fontSize: 14,
    color: '#34495e',
    marginBottom: 5,
  },
  historyStats: {
    fontSize: 12,
    color: '#7f8c8d',
    fontStyle: 'italic',
  },
  configContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  configLabel: {
    fontSize: 16,
    color: '#2c3e50',
  },
  configButtons: {
    flexDirection: 'row',
  },
  configButton: {
    backgroundColor: '#3498db',
    width: 35,
    height: 35,
    borderRadius: 17.5,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
  },
  configButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  statsContainer: {
    backgroundColor: '#f8f9fa',
    padding: 15,
    borderRadius: 8,
  },
  statsTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#2c3e50',
    marginBottom: 8,
  },
  statsText: {
    fontSize: 14,
    color: '#7f8c8d',
    marginBottom: 3,
  },
  infoButton: {
    backgroundColor: '#3498db',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 10,
  },
  infoButtonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
  },
  codeButton: {
    backgroundColor: '#e74c3c',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  codeButtonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
  },
  advantagesContainer: {
    backgroundColor: '#f8f9fa',
    padding: 15,
    borderRadius: 8,
  },
  advantageText: {
    fontSize: 14,
    color: '#2c3e50',
    marginBottom: 8,
  },
});

export default CustomHookScreen;