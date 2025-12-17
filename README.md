# 💘 Quiz Casal & Desafio Romântico

Uma aplicação web interativa e imersiva criada para surpreender uma pessoa especial. O projeto combina um quiz personalizado com recompensas poéticas, efeitos visuais envolventes e uma seção final de dedicatórias.

## ✨ Detalhes do Projeto

### 🎮 Mecânica do Quiz
- **Interação Conversacional**: Ao responder cada pergunta, o sistema "responde" com uma mensagem poética e personalizada, criando um diálogo entre o jogo e o usuário.
- **Navegação Flexível**: O usuário pode navegar livremente entre as perguntas (botões "Voltar" e "Próxima") para revisar ou alterar respostas anteriores.
- **Persistência de Dados**: O progresso é salvo automaticamente no navegador (`localStorage`). Se a página for fechada, o jogo continua exatamente de onde parou.
- **Integração Opcional com GitHub**: Possibilidade de configurar o salvamento remoto das respostas em um repositório privado.

### 🎨 Experiência Visual (UI/UX)
- **Design Glassmorphism**: Interface moderna translúcida que se adapta ao fundo.
- **Background Vivo**: Gradiente animado em constante movimento suave.
- **Elementos Flutuantes**: Animação de corações que sobem pela tela aleatoriamente.
- **Feedback Visual**:
  - ✨ Chuva de confetes ao acertar/avançar.
  - ⚠️ Efeito de "tremida" (shake) ao tentar avançar sem responder.
- **Responsividade Total**: Layout otimizado para celulares, com suporte para ajuste de altura quando o teclado virtual está ativo.

### 🎵 Atmosfera Sonora
- **Player de Música**: Trilha sonora ambiente ("A Very Brady Special" - Kevin MacLeod).
- **Controle de Áudio**: Botão flutuante Play/Pause com indicação visual de estado.

### 📜 Módulo de Poemas (Pós-Quiz)
Ao finalizar o questionário, uma nova seção é desbloqueada:
- **Lista de Atividades**: Ícones interativos representando detalhes da pessoa (Olhos, Boca, Cheiro, etc.).
- **Modais de Leitura**: Ao clicar, um modal elegante exibe um poema dedicado àquela característica específica.
- **Botão Promessa**: Uma declaração final especial.

---

## 🚀 Instalação e Uso

Este projeto não requer instalação de dependências complexas (Node.js/NPM são opcionais, usados apenas para deploy).

1. **Clone o repositório**:
   ```bash
   git clone https://github.com/seu-usuario/quiz-casal.git
   ```
2. **Execute**: Basta abrir o arquivo `index.html` em qualquer navegador moderno.

## 🛠️ Personalização

Toda o conteúdo é editável no arquivo `script.js`:

### Editar Perguntas e Recompensas
Modifique o array `levels`:
```javascript
const levels = [
  {
    question: "Sua pergunta aqui?",
    rewardMsg: "Sua resposta poética/carinhosa aqui."
  },
  // ...
];
```

### Editar Poemas
Modifique o objeto `poems` no final do arquivo:
```javascript
const poems = {
    "olhos": {
        title: "Seus Olhos",
        text: "Seu texto poético..."
    },
    // ...
};
```

### Configurar Salvamento Remoto (GitHub)
Para receber as respostas em um repositório:
1. Gere um **Personal Access Token** no GitHub.
2. No `script.js`, atualize a função `saveToGitHub` com seu Token, Usuário e Nome do Repositório.

## 💻 Tecnologias

- **Frontend**: HTML5 Semântico, CSS3 (Variáveis, Flexbox, Keyframes), JavaScript ES6+.
- **Bibliotecas**: [Canvas Confetti](https://www.kirilv.com/canvas-confetti/) (efeitos de partículas).
- **Fontes**: [Outfit](https://fonts.google.com/specimen/Outfit) (Google Fonts).

---

Feito com ❤️ para celebrar o amor.
