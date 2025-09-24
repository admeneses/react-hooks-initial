import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';

// Importar as telas
import HomeScreen from './src/screens/HomeScreen';
import CounterScreen from './src/screens/CounterScreen';
import FormScreen from './src/screens/FormScreen';
import ToggleScreen from './src/screens/ToggleScreen';
import TimerScreen from './src/screens/TimerScreen';
import CustomHookScreen from './src/screens/CustomHookScreen';

// Definir os tipos de navegação
export type RootStackParamList = {
  Home: {};
  Counter: any;
  Form: any;
  Toggle: any;
  Timer: any;
  CustomHook: any;
};

const Stack = createStackNavigator<RootStackParamList>();

/**
 * APP PRINCIPAL - React Hooks
 * Estrutura:
 * - HomeScreen: Tela inicial com menu de navegação
 * - CounterScreen: Exemplo básico de useState
 * - FormScreen: Exemplo de useState com múltiplos estados
 * - ToggleScreen: Exemplo de useState com arrays e objetos
 * - TimerScreen: Exemplo de useEffect
 * - CustomHookScreen: Exemplo de hooks customizados
 */
export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: {
            backgroundColor: '#2c3e50',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      >
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: 'React Hooks Didático',
            headerShown: false, // Ocultar header na tela inicial
          }}
        />
        
        {/* Telas de exemplos de useState */}
        <Stack.Screen
          name="Counter"
          component={CounterScreen}
          options={{
            title: 'Contador Simples',
          }}
        />
        
        <Stack.Screen
          name="Form"
          component={FormScreen}
          options={{
            title: 'Formulário Interativo',
          }}
        />
        
        <Stack.Screen
          name="Toggle"
          component={ToggleScreen}
          options={{
            title: 'Toggle e Lista',
          }}
        />
        
        {/* Tela de exemplo de useEffect */}
        <Stack.Screen
          name="Timer"
          component={TimerScreen}
          options={{
            title: 'Timer e API',
          }}
        />
        
        {/* Tela de exemplo de hook customizado */}
        <Stack.Screen
          name="CustomHook"
          component={CustomHookScreen}
          options={{
            title: 'Hook Customizado',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}