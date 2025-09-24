import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Alert,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

/**
 * TELA 4: TIMER E API - useEffect para Efeitos Colaterais
 * 
 * Esta tela demonstra o uso do hook useEffect para:
 * - Executar código após renderização
 * - Gerenciar timers e intervalos
 * - Fazer requisições para APIs
 * - Cleanup de recursos
 * 
 * Conceitos ensinados:
 * - useEffect básico
 * - useEffect com dependências
 * - useEffect com cleanup
 * - useEffect para requisições
 */
const TimerScreen: React.FC = () => {
  // Estados para o timer
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  
  // Estados para a API
  const [userData, setUserData] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // useEffect para o timer - executa quando isRunning muda
  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;

    if (isRunning) {
      // Criar intervalo quando o timer está rodando
      interval = setInterval(() => {
        setSeconds(prevSeconds => prevSeconds + 1);
      }, 1000);
    }

    // Cleanup function - executa quando o componente desmonta ou isRunning muda
    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [isRunning]); // Dependência: só executa quando isRunning muda

  // useEffect para carregar dados da API - executa apenas uma vez
  useEffect(() => {
    // Função para buscar dados da API
    const fetchUserData = async () => {
      setLoading(true);
      setError(null);
      
      try {
        // Simular uma requisição para API
        const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
        if (!response.ok) {
          throw new Error('Erro ao buscar dados');
        }
        const data = await response.json();
        setUserData(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Erro desconhecido');
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, []); // Array vazio = executa apenas uma vez

  // Função para resetar o timer
  const resetTimer = () => {
    setSeconds(0);
    setIsRunning(false);
  };

  // Função para formatar o tempo
  const formatTime = (totalSeconds: number) => {
    const minutes = Math.floor(totalSeconds / 60);
    const remainingSeconds = totalSeconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  // Função para recarregar dados da API
  const reloadData = async () => {
    setLoading(true);
    setError(null);
    
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users/3');
      if (!response.ok) {
        throw new Error('Erro ao buscar dados');
      }
      const data = await response.json();
      setUserData(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Erro desconhecido');
    } finally {
      setLoading(false);
    }
  };

  // Função para mostrar informações sobre useEffect
  const showUseEffectInfo = () => {
    Alert.alert(
      'useEffect - Efeitos Colaterais',
      'useEffect permite executar efeitos colaterais em componentes funcionais:\n\n' +
      '• useEffect(() => {}, []) - Executa uma vez\n' +
      '• useEffect(() => {}, [dep]) - Executa quando dep muda\n' +
      '• useEffect(() => { return () => {} }) - Com cleanup\n\n' +
      'Use para: timers, requisições, subscriptions, etc.',
      [{ text: 'Entendi!' }]
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.content}>
          <Text style={styles.title}>Timer e API</Text>
          <Text style={styles.subtitle}>useEffect para Efeitos Colaterais</Text>

          <View style={styles.explanation}>
            <Text style={styles.explanationTitle}>Como funciona:</Text>
            <Text style={styles.explanationText}>
              • useEffect executa após cada renderização{'\n'}
              • Array de dependências controla quando executa{'\n'}
              • Cleanup function limpa recursos{'\n'}
              • Ideal para timers, APIs, subscriptions
            </Text>
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Timer</Text>
            
            <View style={styles.timerDisplay}>
              <Text style={styles.timerText}>{formatTime(seconds)}</Text>
              <Text style={styles.timerLabel}>Tempo Decorrido</Text>
            </View>

            <View style={styles.timerControls}>
              <TouchableOpacity
                style={[styles.timerButton, isRunning ? styles.stopButton : styles.startButton]}
                onPress={() => setIsRunning(!isRunning)}
              >
                <Text style={styles.timerButtonText}>
                  {isRunning ? 'Pausar' : 'Iniciar'}
                </Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.resetButton} onPress={resetTimer}>
                <Text style={styles.resetButtonText}>Reset</Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Dados da API</Text>
            
            <TouchableOpacity style={styles.reloadButton} onPress={reloadData}>
              <Text style={styles.reloadButtonText}>
                {loading ? 'Carregando...' : 'Recarregar Dados'}
              </Text>
            </TouchableOpacity>

            {loading && (
              <View style={styles.loadingContainer}>
                <Text style={styles.loadingText}>Carregando dados da API...</Text>
              </View>
            )}

            {error && (
              <View style={styles.errorContainer}>
                <Text style={styles.errorText}>Erro: {error}</Text>
              </View>
            )}

            {userData && !loading && (
              <View style={styles.userDataContainer}>
                <Text style={styles.userDataTitle}>Dados do Usuário:</Text>
                <Text style={styles.userDataText}>Nome: {userData.name}</Text>
                <Text style={styles.userDataText}>Email: {userData.email}</Text>
                <Text style={styles.userDataText}>Website: {userData.website}</Text>
                <Text style={styles.userDataText}>Empresa: {userData.company?.name}</Text>
              </View>
            )}
          </View>

          <TouchableOpacity style={styles.infoButton} onPress={showUseEffectInfo}>
            <Text style={styles.infoButtonText}>Informações sobre useEffect</Text>
          </TouchableOpacity>
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
  timerDisplay: {
    backgroundColor: '#f8f9fa',
    padding: 30,
    borderRadius: 15,
    alignItems: 'center',
    marginBottom: 20,
  },
  timerText: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#27ae60',
    marginBottom: 5,
  },
  timerLabel: {
    fontSize: 14,
    color: '#7f8c8d',
  },
  timerControls: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  timerButton: {
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 8,
    minWidth: 100,
    alignItems: 'center',
  },
  startButton: {
    backgroundColor: '#27ae60',
  },
  stopButton: {
    backgroundColor: '#e74c3c',
  },
  timerButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  resetButton: {
    backgroundColor: '#95a5a6',
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 8,
    minWidth: 100,
    alignItems: 'center',
  },
  resetButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  reloadButton: {
    backgroundColor: '#3498db',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 15,
  },
  reloadButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  loadingContainer: {
    backgroundColor: '#fff3cd',
    padding: 15,
    borderRadius: 8,
    marginBottom: 15,
  },
  loadingText: {
    color: '#856404',
    textAlign: 'center',
  },
  errorContainer: {
    backgroundColor: '#f8d7da',
    padding: 15,
    borderRadius: 8,
    marginBottom: 15,
  },
  errorText: {
    color: '#721c24',
    textAlign: 'center',
  },
  userDataContainer: {
    backgroundColor: '#d4edda',
    padding: 15,
    borderRadius: 8,
    marginBottom: 15,
  },
  userDataTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#155724',
    marginBottom: 10,
  },
  userDataText: {
    fontSize: 14,
    color: '#155724',
    marginBottom: 5,
  },
  infoButton: {
    backgroundColor: '#9b59b6',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 20,
  },
  infoButtonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
  },
});

export default TimerScreen;