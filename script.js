// CONFIGURAÇÃO DAS PERGUNTAS
// Substitua as 'answers' pelas respostas reais dela.
// 'keywords' é uma lista de palavras aceitas na resposta para considerar correta.
const levels = [
    {
        question: "Qual era a cor do meu boné (no nosso primeiro encontro)?",
        keywords: ["preto", "Preto", "Preto"], // Coloque palavras chaves da resposta aqui
        rewardMsg: "Boa! Essa marcou, né?",
        rewardImg: "https://media.giphy.com/media/l41lYcdBWzb4XyO0U/giphy.gif"
    },
    {
        question: "Qual foi meu primeiro elogio a sua aparencia? (cabelo, rosto, olhos, c, etc)",
        keywords: ["boca", "Boca", "Boca"], // Exemplo
        rewardMsg: "Acertou! Me conhece bem demais.",
        rewardImg: "https://media.giphy.com/media/1pA2TskF33668/giphy.gif"
    },
    {
        question: "Qual foi a primeira coisa que pedi para comer?",
        keywords: ["tapioca", "Tapioca", "Tapioca"], // Exemplo
        rewardMsg: "Isso!",
        rewardImg: "https://media.giphy.com/media/26vUx5y8d4LgJjBkA/giphy.gif"
    },
    {
        question: "namora comigo?",
        keywords: ["sim", "Sim", "Sim"], // Exemplo
        rewardMsg: "UHULLLLLL",
        rewardImg: "https://media.giphy.com/media/26vUx5y8d4LgJjBkA/giphy.gif"
    }
];

let currentLevel = 0;
let isRewardPhase = false;

// Elementos do DOM
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
ui.input.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        checkAnswer();
    }
});
