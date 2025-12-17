# 💘 Desafio Rápido - Quiz Interativo

Um projeto web simples e interativo criado para desafiar uma pessoa especial (namorado/a, crush, amigo/a) com um quiz personalizado. Se a pessoa acertar as perguntas, ela ganha recompensas visuais e uma surpresa no final!

## 📸 Funcionalidades

- **Background Animado**: Um fundo gradiente suave e em movimento.
- **Perguntas Personalizáveis**: Configure facilmente as perguntas e as palavras-chave para as respostas.
- **Feedback Visual**:
  - Acertou? Gifs animados e confetes! 🎉
  - Errou? Efeito de "tremida" na tela e mensagem divertida. 😅
- **Design Responsivo**: Funciona bem em celulares e computadores.
- **Integração com WhatsApp**: O botão final envia uma mensagem direta para o seu WhatsApp aceitando o prêmio/convite.

## 🚀 Como Usar

1. Clone ou baixe este repositório.
2. Abra o arquivo `index.html` no seu navegador.
3. Para personalizar, edite o arquivo `script.js`:
   - Procure pelo array `levels`.
   - Altere as perguntas (`question`), as palavras-chave aceitas (`keywords`) e as mensagens/imagens de recompensa (`rewardMsg`, `rewardImg`).
4. Edite também o link do WhatsApp no arquivo `index.html` (procure por `https://wa.me/55SEUNUMERO`) para colocar o seu número real.

## 🛠️ Tecnologias Utilizadas

- **HTML5**: Estrutura semântica.
- **CSS3**: Estilização moderna com animações, variáveis e design responsivo.
- **JavaScript (Vanilla)**: Lógica do jogo e manipulação do DOM.
- **Bibliotecas**:
  - [Canvas Confetti](https://www.kirilv.com/canvas-confetti/) para os efeitos de festa.
  - [Google Fonts](https://fonts.google.com/) (Outfit) para a tipografia.

## 🎨 Personalização

Você pode trocar as cores principais no arquivo `style.css` alterando as variáveis `:root`:

```css
:root {
    --primary-color: #6c5ce7; /* Cor principal */
    --accent-color: #00cec9;  /* Cor de destaque */
    /* ... */
}
```

Divirta-se criando seu desafio!
