# 💘 Desafio Rápido - Quiz Interativo

Um projeto web interativo e romântico criado para desafiar uma pessoa especial (namorado/a, crush, amigo/a) com um quiz personalizado. O jogo salva o progresso automaticamente, permite revisão de respostas e recompensa o usuário com poemas e elogios.

## 📸 Funcionalidades

- **Navegação Completa**: Botões "Voltar" e "Próxima" permitem que o usuário revise e edite suas respostas a qualquer momento.
- **Salvamento Automático**: 
  - **Local**: O progresso é salvo no navegador (`localStorage`). Se a página for fechada, o jogo continua exatamente de onde parou.
  - **Remoto (GitHub)**: Opção configurável para salvar as respostas em um repositório privado do GitHub.
- **Área de Atividades e Poemas**: Uma tela final interativa onde o usuário pode clicar em ícones para ler poemas personalizados sobre características que você ama nele(a).
- **Background Animado**: Fundo gradiente suave e corações flutuantes.
- **Responsividade Aprimorada**: Layout otimizado para celulares, ajustando-se automaticamente quando o teclado virtual é aberto.

## 🚀 Como Usar

1. **Clone ou baixe** este repositório.
2. Abra o arquivo `index.html` no seu navegador.
3. Para personalizar, edite o arquivo `script.js`:
   - Procure pelo array `levels`.
   - Altere as perguntas (`question`), as mensagens (`rewardMsg`) e as imagens (`rewardImg`).
   - Edite o objeto `poems` para alterar os textos da área "Sobre você".

## ☁️ Configuração de Salvamento no GitHub (Opcional)

Se você deseja receber as respostas do seu amor diretamente no seu GitHub:

1. Crie um **Personal Access Token** no GitHub (Settings > Developer Settings > Personal Access Tokens).
2. Crie um repositório (pode ser privado) para receber os arquivos.
3. No arquivo `script.js`, procure a função `saveToGitHub` e preencha:
   ```javascript
   const GITHUB_TOKEN = "SEU_TOKEN_AQUI"; 
   const REPO_OWNER = "SEU_USUARIO";
   const REPO_NAME = "NOME_DO_REPO";
   ```
   > ⚠️ **Atenção**: Se hospedar o site publicamente, seu token ficará exposto. Recomenda-se usar essa função apenas em uso local ou em repositórios privados controlados.

## 🛠️ Tecnologias Utilizadas

- **HTML5 & CSS3**: Estrutura semântica e animações CSS (`keyframes`).
- **JavaScript (ES6+)**: Lógica de estado (`userAnswers`), manipulação do DOM e `Async/Await` para API do GitHub.
- **Bibliotecas**:
  - [Canvas Confetti](https://www.kirilv.com/canvas-confetti/): Efeitos de celebração.
  - [Google Fonts](https://fonts.google.com/): Fonte 'Outfit'.

## 🎨 Personalização

As cores principais podem ser alteradas facilmente no arquivo `style.css`:

```css
:root {
    --primary-color: #6c5ce7;
    --secondary-color: #a29bfe;
    /* ... */
}
```

Divirta-se criando seu desafio! ❤️
