import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Alert,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

/**
 * TELA 2: FORMULÁRIO INTERATIVO - useState com Múltiplos Estados
 * 
 * Esta tela demonstra como usar useState para gerenciar múltiplos campos
 * de um formulário, mostrando a versatilidade do hook.
 * 
 * Conceitos ensinados:
 * - Múltiplos estados com useState
 * - Gerenciamento de formulários
 * - Validação básica
 * - Estado derivado (computed values)
 */
const FormScreen: React.FC = () => {
  // Estados para cada campo do formulário
  const [name, setName] = useState(''); // Estado para o nome
  const [email, setEmail] = useState(''); // Estado para o email
  const [age, setAge] = useState(''); // Estado para a idade
  const [isStudent, setIsStudent] = useState(false); // Estado para checkbox

  // Função para limpar o formulário
  const clearForm = () => {
    setName('');
    setEmail('');
    setAge('');
    setIsStudent(false);
  };

  // Função para validar e submeter o formulário
  const submitForm = () => {
    // Validação básica
    if (!name.trim()) {
      Alert.alert('Erro', 'Por favor, digite seu nome');
      return;
    }

    if (!email.trim() || !email.includes('@')) {
      Alert.alert('Erro', 'Por favor, digite um email válido');
      return;
    }

    if (!age.trim() || isNaN(Number(age))) {
      Alert.alert('Erro', 'Por favor, digite uma idade válida');
      return;
    }

    // Se chegou até aqui, os dados são válidos
    Alert.alert(
      'Formulário Enviado!',
      `Nome: ${name}\nEmail: ${email}\nIdade: ${age}\nEstudante: ${isStudent ? 'Sim' : 'Não'}`,
      [{ text: 'OK' }]
    );
  };

  // Estado derivado: contador de caracteres
  const nameLength = name.length;
  const emailLength = email.length;

  // Estado derivado: se o formulário está completo
  const isFormComplete = name.trim() && email.trim() && age.trim();

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.content}>
          <Text style={styles.title}>Formulário Interativo</Text>
          <Text style={styles.subtitle}>useState com Múltiplos Estados</Text>

          <View style={styles.explanation}>
            <Text style={styles.explanationTitle}>Como funciona:</Text>
            <Text style={styles.explanationText}>
              • Cada campo tem seu próprio useState{'\n'}
              • Estados independentes são atualizados separadamente{'\n'}
              • Podemos criar estados derivados (computed values){'\n'}
              • Validação em tempo real baseada no estado
            </Text>
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>Nome Completo</Text>
            <TextInput
              style={styles.input}
              value={name}
              onChangeText={setName} // Atualiza o estado diretamente
              placeholder="Digite seu nome"
              placeholderTextColor="#bdc3c7"
            />
            <Text style={styles.helperText}>
              Caracteres: {nameLength} {nameLength > 0 && nameLength < 3 && '(muito curto)'}
            </Text>
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>Email</Text>
            <TextInput
              style={styles.input}
              value={email}
              onChangeText={setEmail}
              placeholder="Digite seu email"
              placeholderTextColor="#bdc3c7"
              keyboardType="email-address"
              autoCapitalize="none"
            />
            <Text style={styles.helperText}>
              Caracteres: {emailLength} {email.includes('@') ? 'E-mail válido' : 'E-mail inválido'}
            </Text>
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>Idade</Text>
            <TextInput
              style={styles.input}
              value={age}
              onChangeText={setAge}
              placeholder="Digite sua idade"
              placeholderTextColor="#bdc3c7"
              keyboardType="numeric"
            />
            <Text style={styles.helperText}>
              {age && !isNaN(Number(age)) ? `Idade: ${age} anos` : 'Digite um número válido'}
            </Text>
          </View>

          <View style={styles.checkboxGroup}>
            <TouchableOpacity
              style={[styles.checkbox, isStudent && styles.checkboxChecked]}
              onPress={() => setIsStudent(!isStudent)} // Toggle do estado
            >
              <Text style={[styles.checkboxText, isStudent && styles.checkboxTextChecked]}>
                {isStudent ? '☑️' : '☐'} Sou estudante
              </Text>
            </TouchableOpacity>
          </View>

          <View style={styles.statusContainer}>
            <Text style={styles.statusTitle}>Status do Formulário:</Text>
            <Text style={[styles.statusText, isFormComplete && styles.statusComplete]}>
              {isFormComplete ? '✅ Formulário Completo' : '⚠️ Formulário Incompleto'}
            </Text>
          </View>

          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.clearButton} onPress={clearForm}>
              <Text style={styles.clearButtonText}>Limpar</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.submitButton, !isFormComplete && styles.submitButtonDisabled]}
              onPress={submitForm}
              disabled={!isFormComplete}
            >
              <Text style={styles.submitButtonText}>Enviar</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.codeExample}>
            <Text style={styles.codeTitle}>Código:</Text>
            <Text style={styles.codeText}>
              const [name, setName] = useState('');{'\n'}
              const [email, setEmail] = useState('');{'\n'}
              const [age, setAge] = useState('');{'\n\n'}
              // Estado derivado{'\n'}
              const isFormComplete = name && email && age;
            </Text>
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
  inputGroup: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#2c3e50',
    marginBottom: 8,
  },
  input: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#bdc3c7',
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    color: '#2c3e50',
  },
  helperText: {
    fontSize: 12,
    color: '#7f8c8d',
    marginTop: 4,
  },
  checkboxGroup: {
    marginBottom: 20,
  },
  checkbox: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#bdc3c7',
    borderRadius: 8,
    padding: 12,
  },
  checkboxChecked: {
    backgroundColor: '#e8f5e8',
    borderColor: '#27ae60',
  },
  checkboxText: {
    fontSize: 16,
    color: '#2c3e50',
  },
  checkboxTextChecked: {
    color: '#27ae60',
    fontWeight: 'bold',
  },
  statusContainer: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
    alignItems: 'center',
  },
  statusTitle: {
    fontSize: 14,
    color: '#7f8c8d',
    marginBottom: 5,
  },
  statusText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#e74c3c',
  },
  statusComplete: {
    color: '#27ae60',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  clearButton: {
    backgroundColor: '#95a5a6',
    padding: 15,
    borderRadius: 10,
    flex: 0.45,
    alignItems: 'center',
  },
  clearButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  submitButton: {
    backgroundColor: '#27ae60',
    padding: 15,
    borderRadius: 10,
    flex: 0.45,
    alignItems: 'center',
  },
  submitButtonDisabled: {
    backgroundColor: '#bdc3c7',
  },
  submitButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  codeExample: {
    backgroundColor: '#2c3e50',
    padding: 15,
    borderRadius: 10,
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

export default FormScreen;
