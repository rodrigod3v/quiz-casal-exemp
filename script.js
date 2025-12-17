// CONFIGURAÇÃO DAS PERGUNTAS
// Substitua as 'answers' pelas respostas reais dela.
// 'keywords' é uma lista de palavras aceitas na resposta para considerar correta.
const levels = [
    {
        question: "Duvido você lembrar: qual era a cor do meu boné no nosso primeiro encontro?",
        keywords: ["preto", "Preto", "Preto", "s"], // Coloque palavras chaves da resposta aqui
        rewardMsg: "Boa! Essa marcou, né?",
        rewardImg: "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExMjNyY3d2NnR0MmFvbTd0bDRodW42c29jcjd4aG5jbGZubW12c2tnZyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/nP8zrCOp5plDf7DNjr/giphy.gif"
    },
    {
        question: "Pergunta rápida: qual foi a primeira coisa que eu disse que era bonita em ti? (Dica: cabelo, rosto ou olhos).",
        keywords: ["olhos", "Olhos", "Olhos", "s"], // Exemplo
        rewardMsg: "Acertou! Me conhece bem demais.",
        rewardImg: "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExNGJ2anI2MGU2Z2JmcGYweGF2N25uMHA2Mnc2Mm00NWlobmZhbTV4ciZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/ZJ1elswlnO1iFpq6Bn/giphy.gif"
    },
    {
        question: "Qual foi a primeira coisa que pedi para comer?",
        keywords: ["tapioca", "Tapioca", "Tapioca", "s"], // Exemplo
        rewardMsg: "Isso!",
        rewardImg: "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExMmZyMW0wOW14d2llczBxcnA0ZHg3dm04NmFhc25zdnhoMHFuaG56MCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/F7HZJkbC9piohwiR6N/giphy.gif"
    },
    {
        question: "O nosso beijo encaixou?",
        keywords: ["sim", "Sim", "Sim", "s"], // Exemplo
        rewardMsg: "UHULLLLLL",
        rewardImg: "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExMHJ2bDA5ZWd0N3NxdGZyeGtxOW0zb2RzbW1ub3J1NDV0bHQ4b2J0aSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/7wDm3KFvhpzfB8MJDh/giphy.gif"
    },
    {
        question: "Se tivéssemos uma filha hoje, qual nome você escolheria sem pensar duas vezes?",
        keywords: ["Agatha", "Ágatha", "agatha", "s"], 
        rewardMsg: "Lindo nome!",
        rewardImg: "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExMjNyY3d2NnR0MmFvbTd0bDRodW42c29jcjd4aG5jbGZubW12c2tnZyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/nP8zrCOp5plDf7DNjr/giphy.gif"
    },
    {
        question: "Na nossa futura casa, você se imagina mais como uma 'pessoa de cachorros' ou 'pessoa de gatos'?",
        keywords: ["cachorro", "gato", "ambos", "pets"],
        rewardMsg: "Nossa casa vai ser animada!",
        rewardImg: "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExNGJ2anI2MGU2Z2JmcGYweGF2N25uMHA2Mnc2Mm00NWlobmZhbTV4ciZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/ZJ1elswlnO1iFpq6Bn/giphy.gif"
    },
    {
        question: "Na sua opinião, qual é o tempo 'ideal' de conversa antes de oficializar um namoro?",
        keywords: ["meses", "dias", "tempo"],
        rewardMsg: "O tempo é relativo quando a gente ama.",
        rewardImg: "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExMmZyMW0wOW14d2llczBxcnA0ZHg3dm04NmFhc25zdnhoMHFuaG56MCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/F7HZJkbC9piohwiR6N/giphy.gif"
    },
    {
        question: "Namoraria comigo pra sempre?",
        keywords: ["sim", "claro", "com certeza", "sempre", "s"],
        rewardMsg: "Promessa é dívida! ❤️",
        rewardImg: "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExMHJ2bDA5ZWd0N3NxdGZyeGtxOW0zb2RzbW1ub3J1NDV0bHQ4b2J0aSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/7wDm3KFvhpzfB8MJDh/giphy.gif"
    }
];

let currentLevel = 0;
let isRewardPhase = false;

// Elementos do DOM
// Elementos do DOM (Safe Check)
const screens = {
    start: document.getElementById('start-screen'),
    level: document.getElementById('level-screen'),
    final: document.getElementById('final-screen')
};

const ui = {
    progress: document.getElementById('progress-fill'),
    title: document.getElementById('level-title'),
    question: document.getElementById('question-text'),
    inputArea: document.getElementById('input-area'),
    input: document.getElementById('answer-input'),
    error: document.getElementById('error-msg'),
    rewardArea: document.getElementById('reward-area'),
    rewardImg: document.getElementById('reward-img'),
    rewardMsg: document.getElementById('reward-msg'),
    btn: document.getElementById('action-btn')
};

function switchScreen(screenName) {
    Object.values(screens).forEach(s => s.classList.remove('active'));
    screens[screenName].classList.add('active');
}

function startGame() {
    currentLevel = 0;
    switchScreen('level');
    loadLevel();
    startMusic(); // Tenta iniciar a música quando o jogo começa
}

function loadLevel() {
    isRewardPhase = false;
    
    // Atualiza barra de progresso
    const progress = (currentLevel / levels.length) * 100;
    ui.progress.style.width = `${progress}%`;

    // Atualiza textos
    ui.title.innerText = `Pergunta ${currentLevel + 1}`;
    ui.question.innerText = levels[currentLevel].question;
    
    // Reseta UI
    ui.input.value = "";
    ui.inputArea.classList.remove('hidden');
    ui.rewardArea.classList.add('hidden');
    ui.error.classList.add('hidden');
    ui.btn.innerText = "Responder";
    ui.input.focus();
}

// ... existing code ...

function checkAnswer() {
    // Se estiver na fase de recompensa (já acertou), vai pro próximo
    if (isRewardPhase) {
        nextLevel();
        return;
    }

    const userAnswer = ui.input.value.trim().toLowerCase();
    
    // Verifica se alguma palavra chave está na resposta
    const currentKeywords = levels[currentLevel].keywords;
    const isCorrect = currentKeywords.some(keyword => userAnswer.includes(keyword.toLowerCase()));

    if (isCorrect && userAnswer.length > 0) {
        showReward();
    } else {
        shakeError();
    }
}

function showReward() {
    isRewardPhase = true;
    
    // Esconde input, mostra recompensa
    ui.inputArea.classList.add('hidden');
    ui.rewardArea.classList.remove('hidden');
    
    ui.rewardImg.src = levels[currentLevel].rewardImg;
    ui.rewardMsg.innerText = levels[currentLevel].rewardMsg;
    
    ui.btn.innerText = "Próxima >>";
    
    // Efeito sonoro sutil (opcional, navegadores bloqueiam autoplay as vezes)
    // aqui focamos no visual
    confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.7 },
        colors: ['#a29bfe', '#6c5ce7']
    });
}

function shakeError() {
    ui.error.classList.remove('hidden');
    
    // Remove a classe de animação e adiciona de novo para re-tocar
    const input = ui.input;
    input.style.animation = 'none';
    input.offsetHeight; /* trigger reflow */
    input.style.animation = "shake 0.4s"; // usa a animação do CSS, mas reforçamos aqui se precisar
}

function nextLevel() {
    currentLevel++;
    if (currentLevel < levels.length) {
        loadLevel();
    } else {
        finishGame();
    }
}

function finishGame() {
    switchScreen('final');
    launchConfetti();
}

function launchConfetti() {
    var end = Date.now() + (3 * 1000); // 3 segundos

    (function frame() {
        confetti({
            particleCount: 5,
            angle: 60,
            spread: 55,
            origin: { x: 0 },
            colors: ['#6c5ce7', '#00cec9', '#fab1a0']
        });
        confetti({
            particleCount: 5,
            angle: 120,
            spread: 55,
            origin: { x: 1 },
            colors: ['#6c5ce7', '#00cec9', '#fab1a0']
        });

        if (Date.now() < end) {
            requestAnimationFrame(frame);
        }
    }());
}

// Permite dar enter para responder
if (ui.input) {
    ui.input.addEventListener("keypress", function(event) {
        if (event.key === "Enter") {
            checkAnswer();
        }
    });
}

// Animação de Corações Flutuantes
function createFloatingHearts() {
    const container = document.querySelector('.hearts-container');
    if (!container) return; // Se não tiver o container na página atual

    const heart = document.createElement('div');
    heart.classList.add('heart');
    
    // Posição horizontal aleatória
    heart.style.left = Math.random() * 100 + "vw";
    // Tamanho aleatório
    const size = Math.random() * 0.5 + 0.5; // entre 0.5 e 1
    heart.style.transform = `scale(${size}) rotate(-45deg)`;
    // Duração aleatória
    heart.style.animationDuration = Math.random() * 3 + 4 + "s"; // entre 4 e 7s
    // Cor aleatória (tons de rosa/vermelho/branco)
    const colors = ['rgba(255, 107, 107, 0.4)', 'rgba(255, 118, 117, 0.4)', 'rgba(255, 255, 255, 0.3)'];
    heart.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    
    container.appendChild(heart);
    
    // Remove do DOM depois que terminar (para não pesar)
    setTimeout(() => {
        heart.remove();
    }, 7000);
}

// Inicia os corações
setInterval(createFloatingHearts, 500);

// Controle de Música
let isPlaying = false;
let audio = null;

function initAudio() {
    if (!audio) {
        // Música: A Very Brady Special - Kevin MacLeod (Incompetech)
        audio = new Audio('https://incompetech.com/music/royalty-free/mp3-royaltyfree/A%20Very%20Brady%20Special.mp3');
        audio.loop = true;
    }
}

function startMusic() {
    initAudio();
    if (!isPlaying) {
        audio.play().then(() => {
            isPlaying = true;
            const btn = document.getElementById('music-btn');
            if(btn) {
                btn.innerText = "⏸️";
                btn.classList.add('playing');
            }
        }).catch(e => console.log("Autoplay bloqueado pelo navegador até interação do usuário"));
    }
}

function toggleMusic() {
    initAudio();
    
    const btn = document.getElementById('music-btn');
    
    if (isPlaying) {
        audio.pause();
        btn.innerText = "🎵";
        btn.classList.remove('playing');
    } else {
        audio.play();
        btn.innerText = "⏸️";
        btn.classList.add('playing');
    }
    isPlaying = !isPlaying;
}

// POEMAS
const poems = {
    "olhos": {
        title: "Seus Olhos",
        text: "Há neles uma perspectiva profunda, onde a luz encontra a sombra em harmonia. Olhar-te é como o saciar da fome mais antiga, um banquete de alma, em cores de alegria."
    },
    "boca": {
        title: "Sua Boca",
        text: "Pinceladas de coral sobre o linho da pele, curvas que guardam o sal e o calor do verão. Tua risada é a brisa que a concha expele, trazendo a paz da maré para o meu coração."
    },
    "cheiro": {
        title: "Seu Cheiro",
        text: "Não é apenas perfume, é uma arquitetura, como a Escola de Atenas, lógica e divina. Teu cheiro me vence, em doce captura, como um jogo que a mente e a alma domina."
    },
    "voz": {
        title: "Sua Voz",
        text: "Tua fala é o cinzel que molda o meu dia, melodia temperada com o cuidado de quem ama. É o som do lar, da mais pura alquimia, que ferve no peito e acende a chama."
    },
    "jeito": {
        title: "Seu Jeito",
        text: "És o traço firme em meio ao caos do mundo, a proporção áurea de tudo o que é perfeito. Em cada gesto teu, um sentido profundo, a arte de ser vida, impressa no meu peito."
    },
    "cabelo": {
        title: "Seu Cabelo",
        text: "Prometo ser o sopro que em teus fios desenha o movimento, A moldura de ouro que envolve o teu rosto com calma. Teu cabelo é a seda, o mais puro elemento, Que em ondas de luz, amarra minha alma."
    },
    "maos": {
        title: "Suas Mãos",
        text: "Em tuas mãos reside a força de quem molda o destino, O toque que traz vida ao barro que eu costumava ser. São pincéis delicados de um mestre divino, Que desenham em mim o desejo de nunca te perder."
    },
    "pele": {
        title: "Sua Pele",
        text: "Tua pele é o linho mais nobre, banhado em luz de poente, Onde o calor do toque supera a técnica e a razão. Se és pintura, sou a tela que te sente, Guardando em cada poro a marca da tua mão."
    },
    "corpo": {
        title: "Seu Corpo",
        text: "Teu corpo é a proporção áurea que a mão de Deus desenhou, a harmonia perfeita onde a alma e a forma se abraçam; és a escultura viva que o tempo em arte transformou, e em cada curva tua, meus olhos o infinito traçam."
    },
    "promessa": {
        title: "Minha Promessa",
        text: "Prometo ser a tela eterna onde teus sonhos ganham cor, o espelho que reflete a perfeição que em ti se encerra; pois nem a obra mais rara de um antigo escultor vence a arte do teu riso, a mais bela que há na terra."
    }
};

const poemModal = document.getElementById('poem-modal');
const modalTitle = document.getElementById('modal-title');
const modalText = document.getElementById('modal-text');

function openPoem(id) {
    const content = poems[id];
    if (content) {
        modalTitle.innerText = content.title;
        modalText.innerText = content.text;
        poemModal.classList.add('active');
    }
}

function closePoem(event) {
    if (event.target === poemModal || event.target.tagName === 'BUTTON') {
        poemModal.classList.remove('active');
    }
}

// Atualizar screens object
screens.activities = document.getElementById('activities-screen');

// Atualizar função switchScreen (opcional, se precisar de lógica extra)
function showScreen(screenName) {
    switchScreen(screenName);
}

// Tentativa de iniciar música ao carregar (pode ser bloqueado pelo navegador)
startMusic();
