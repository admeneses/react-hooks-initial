# React Hooks 

Este é um projeto de demonstração educacional que ensina **React Hooks** na prática.

## 🚀 Tecnologias Utilizadas

* **React Native** - Framework para desenvolvimento mobile multiplataforma
* **Expo** - Plataforma que simplifica o desenvolvimento React Native
* **TypeScript** - Superset do JavaScript com tipagem estática
* **React Navigation** - Biblioteca de navegação para React Native

## 📱 Funcionalidades

* ✅ **Telas com useState** - Exemplos práticos de gerenciamento de estado
* ✅ **Tela com useEffect** - Demonstração de efeitos colaterais
* ✅ **Tela com Hook Customizado** - useCounter com histórico

## 🛠️ Configuração do Projeto

### Pré-requisitos

* Node.js (versão 16 ou superior)
* Expo CLI instalado globalmente

### Instalação

1. **Clone o repositório**
   ```bash
   git clone <url-do-repositorio>
   cd react-hooks-initial
   ```

2. **Instale as dependências**
   ```bash
   npm install
   ```

3. **Execute o projeto**
   ```bash
   npx expo start
   ```

## 📁 Estrutura do Projeto

```
react-hooks-initial/
├── src/
│   ├── screens/              # Telas do aplicativo
│   │   ├── HomeScreen.tsx    # Tela inicial com menu
│   │   ├── CounterScreen.tsx # useState básico
│   │   ├── FormScreen.tsx    # useState com múltiplos estados
│   │   ├── ToggleScreen.tsx  # useState com arrays/objetos
│   │   ├── TimerScreen.tsx   # useEffect
│   │   └── CustomHookScreen.tsx # Hook customizado
│   └── hooks/                # Hooks customizados
│       └── useCounter.ts     # useCounter com histórico
├── App.tsx                   # Componente principal
├── package.json              # Dependências do projeto
└── README.md                 # Documentação do projeto
```

## 🎯 Conteúdo Educacional

### 1. useState - Gerenciamento de Estado

#### 🔢 Contador Simples
- Conceito básico do useState
- Atualização de estado
- Re-renderização automática

#### 📝 Formulário Interativo
- Múltiplos estados independentes
- Validação em tempo real
- Estados derivados (computed values)

#### 🔄 Toggle e Lista
- useState com arrays
- useState com objetos
- Imutabilidade e spread operator

### 2. useEffect - Efeitos Colaterais

#### ⏱️ Timer e API
- useEffect básico
- useEffect com dependências
- Cleanup de recursos
- Requisições para APIs

### 3. Hook Customizado

#### 🛠️ useCounter
- Criação de hooks customizados
- Encapsulamento de lógica
- Histórico de operações
- Reutilização de código

## 📚 Conceitos Ensinados

### useState
* Como declarar e usar estado local
* Atualização de estado com setState
* Estados primitivos, arrays e objetos
* Imutabilidade em React
* Estados derivados

### useEffect
* Execução de efeitos colaterais
* Array de dependências
* Cleanup de recursos
* Requisições para APIs
* Timers e intervalos

### Hooks Customizados
* Convenções de nomenclatura
* Encapsulamento de lógica
* Reutilização de código
* Composição de hooks
* Histórico de operações

## 📱 Plataformas Suportadas

* **iOS**
* **Android**
* **Web**

## 🚀 Como Executar

### Desenvolvimento
```bash
npx expo start
```

### Build para Produção
```bash
# Android
npx expo build:android

# iOS
npx expo build:ios
```

## 🎯 Objetivos de Aprendizado

* Compreender o conceito de hooks em React
* Dominar o uso do useState para gerenciamento de estado
* Aprender a usar useEffect para efeitos colaterais
* Criar hooks customizados para lógica reutilizável
* Entender imutabilidade e boas práticas
* Desenvolver habilidades de debugging

## 📄 Licença

**Desenvolvido para fins educacionais** 🎓
