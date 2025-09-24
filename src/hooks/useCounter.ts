import { useState } from 'react';

/**
 * HOOK CUSTOMIZADO: useCounter
 * 
 * Este hook customizado demonstra como criar lógica reutilizável
 * combinando useState para gerenciar um contador com histórico.
 * 
 * Conceitos ensinados:
 * - Criação de hooks customizados
 * - Encapsulamento de lógica reutilizável
 * - Composição de hooks
 * - Retorno de múltiplos valores
 */
export function useCounter(initialValue: number = 0) {
  // Estado para o valor atual do contador
  const [count, setCount] = useState(initialValue);
  
  // Estado para o histórico de valores
  const [history, setHistory] = useState<number[]>([initialValue]);

  // Função para incrementar o contador
  const increment = () => {
    setCount(prev => {
      const newCount = prev + 1;
      // Adicionar ao histórico
      setHistory(prevHistory => [...prevHistory, newCount]);
      return newCount;
    });
  };

  // Função para decrementar o contador
  const decrement = () => {
    setCount(prev => {
      const newCount = prev - 1;
      // Adicionar ao histórico
      setHistory(prevHistory => [...prevHistory, newCount]);
      return newCount;
    });
  };

  // Função para resetar o contador
  const reset = () => {
    setCount(initialValue);
    setHistory([initialValue]);
  };

  // Função para desfazer a última ação
  const undo = () => {
    if (history.length > 1) {
      const newHistory = [...history];
      newHistory.pop(); // Remove o último item
      const previousCount = newHistory[newHistory.length - 1];
      setCount(previousCount);
      setHistory(newHistory);
    }
  };

  // Retornar o valor atual, funções e informações de status
  return {
    count,           // Valor atual do contador
    increment,       // Função para incrementar
    decrement,       // Função para decrementar
    reset,           // Função para resetar
    undo,            // Função para desfazer
    history,         // Array com histórico de valores
    canUndo: history.length > 1, // Se é possível desfazer
  };
}
