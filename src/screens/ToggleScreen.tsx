import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  TextInput,
  Alert,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

/**
 * TELA 3: TOGGLE E LISTA - useState com Arrays e Objetos
 * 
 * Conceitos ensinados:
 * - useState com arrays
 * - useState com objetos
 * - Imutabilidade (nunca mutar o estado diretamente)
 * - Spread operator para atualizar arrays e objetos
 */
const ToggleScreen: React.FC = () => {
  const [isListVisible, setIsListVisible] = useState(false);
  const [items, setItems] = useState<string[]>([]);
  const [newItem, setNewItem] = useState('');
  const [settings, setSettings] = useState({
    maxItems: 10,
    allowDuplicates: false,
    sortAlphabetically: true,
  });

  const addItem = () => {
    if (!newItem.trim()) {
      Alert.alert('Erro', 'Digite um item válido');
      return;
    }

    if (!settings.allowDuplicates && items.includes(newItem.trim())) {
      Alert.alert('Erro', 'Este item já existe na lista');
      return;
    }

    if (items.length >= settings.maxItems) {
      Alert.alert('Erro', `Máximo de ${settings.maxItems} itens permitidos`);
      return;
    }

    setItems(prevItems => {
      const newItems = [...prevItems, newItem.trim()];
      if (settings.sortAlphabetically) {
        return newItems.sort();
      }
      return newItems;
    });

    setNewItem('');
  };

  const removeItem = (index: number) => {
    setItems(prevItems => prevItems.filter((_, i) => i !== index));
  };

  const clearList = () => {
    Alert.alert(
      'Limpar Lista',
      'Tem certeza que deseja remover todos os itens?',
      [
        { text: 'Cancelar', style: 'cancel' },
        { 
          text: 'Limpar', 
          style: 'destructive',
          onPress: () => setItems([])
        }
      ]
    );
  };

  const updateSetting = (key: keyof typeof settings, value: any) => {
    setSettings(prevSettings => ({
      ...prevSettings,
      [key]: value,
    }));
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.content}>
          <Text style={styles.title}>Toggle e Lista</Text>
          <Text style={styles.subtitle}>useState com Arrays e Objetos</Text>

          <View style={styles.explanation}>
            <Text style={styles.explanationTitle}>Como funciona:</Text>
            <Text style={styles.explanationText}>
              • useState pode gerenciar arrays e objetos{'\n'}
              • NUNCA mutar o estado diretamente{'\n'}
              • Use spread operator (...) para criar novos arrays/objetos{'\n'}
              • React detecta mudanças através de referência
            </Text>
          </View>

          <View style={styles.settingsContainer}>
            <Text style={styles.sectionTitle}>Configurações</Text>
            
            <View style={styles.settingItem}>
              <Text style={styles.settingLabel}>Máximo de itens: {settings.maxItems}</Text>
              <View style={styles.settingButtons}>
                <TouchableOpacity 
                  style={styles.settingButton}
                  onPress={() => updateSetting('maxItems', Math.max(1, settings.maxItems - 1))}
                >
                  <Text style={styles.settingButtonText}>-</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                  style={styles.settingButton}
                  onPress={() => updateSetting('maxItems', settings.maxItems + 1)}
                >
                  <Text style={styles.settingButtonText}>+</Text>
                </TouchableOpacity>
              </View>
            </View>

            <TouchableOpacity
              style={[styles.toggleSetting, settings.allowDuplicates && styles.toggleSettingActive]}
              onPress={() => updateSetting('allowDuplicates', !settings.allowDuplicates)}
            >
              <Text style={styles.toggleSettingText}>
                {settings.allowDuplicates ? '✅' : '❌'} Permitir duplicatas
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.toggleSetting, settings.sortAlphabetically && styles.toggleSettingActive]}
              onPress={() => updateSetting('sortAlphabetically', !settings.sortAlphabetically)}
            >
              <Text style={styles.toggleSettingText}>
                {settings.sortAlphabetically ? '✅' : '❌'} Ordenar alfabeticamente
              </Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity
            style={[styles.toggleButton, isListVisible && styles.toggleButtonActive]}
            onPress={() => setIsListVisible(!isListVisible)}
          >
            <Text style={styles.toggleButtonText}>
              {isListVisible ? 'Ocultar Lista' : 'Mostrar Lista'}
            </Text>
          </TouchableOpacity>

          {isListVisible && (
            <View style={styles.listContainer}>
              <View style={styles.listHeader}>
                <Text style={styles.listTitle}>
                  Lista de Itens ({items.length}/{settings.maxItems})
                </Text>
                {items.length > 0 && (
                  <TouchableOpacity style={styles.clearButton} onPress={clearList}>
                    <Text style={styles.clearButtonText}>Apagar</Text>
                  </TouchableOpacity>
                )}
              </View>

              {items.length === 0 ? (
                <Text style={styles.emptyListText}>Lista vazia. Adicione alguns itens!</Text>
              ) : (
                items.map((item, index) => (
                  <View key={index} style={styles.listItem}>
                    <Text style={styles.listItemText}>{item}</Text>
                    <TouchableOpacity
                      style={styles.removeButton}
                      onPress={() => removeItem(index)}
                    >
                      <Text style={styles.removeButtonText}>Apagar</Text>
                    </TouchableOpacity>
                  </View>
                ))
              )}
            </View>
          )}

          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              value={newItem}
              onChangeText={setNewItem}
              placeholder="Digite um novo item"
              placeholderTextColor="#bdc3c7"
              onSubmitEditing={addItem}
            />
            <TouchableOpacity style={styles.addButton} onPress={addItem}>
              <Text style={styles.addButtonText}>Adicionar</Text>
            </TouchableOpacity>
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
  settingsContainer: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2c3e50',
    marginBottom: 15,
  },
  settingItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  settingLabel: {
    fontSize: 14,
    color: '#2c3e50',
  },
  settingButtons: {
    flexDirection: 'row',
  },
  settingButton: {
    backgroundColor: '#3498db',
    width: 30,
    height: 30,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 5,
  },
  settingButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  toggleSetting: {
    backgroundColor: '#ecf0f1',
    padding: 10,
    borderRadius: 8,
    marginBottom: 8,
  },
  toggleSettingActive: {
    backgroundColor: '#d5f4e6',
  },
  toggleSettingText: {
    fontSize: 14,
    color: '#2c3e50',
  },
  toggleButton: {
    backgroundColor: '#9b59b6',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 20,
  },
  toggleButtonActive: {
    backgroundColor: '#8e44ad',
  },
  toggleButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  listContainer: {
    backgroundColor: '#fff',
    borderRadius: 10,
    marginBottom: 20,
    padding: 15,
  },
  listHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  listTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#2c3e50',
  },
  clearButton: {
    backgroundColor: '#e74c3c',
    padding: 5,
    borderRadius: 5,
  },
  clearButtonText: {
    color: '#fff',
    fontSize: 12,
  },
  emptyListText: {
    textAlign: 'center',
    color: '#7f8c8d',
    fontStyle: 'italic',
    padding: 20,
  },
  listItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#f8f9fa',
    padding: 10,
    borderRadius: 8,
    marginBottom: 5,
  },
  listItemText: {
    fontSize: 14,
    color: '#2c3e50',
    flex: 1,
  },
  removeButton: {
    backgroundColor: '#e74c3c',
    padding: 5,
    borderRadius: 5,
  },
  removeButtonText: {
    color: '#fff',
    fontSize: 12,
  },
  inputContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  input: {
    flex: 1,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#bdc3c7',
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    color: '#2c3e50',
    marginRight: 10,
  },
  addButton: {
    backgroundColor: '#27ae60',
    padding: 12,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  addButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default ToggleScreen;
