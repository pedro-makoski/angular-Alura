const html = document.querySelector("html");
const focoButton = document.querySelector(".app__card-button--foco");
const descansoCurtoButton = document.querySelector(".app__card-button--curto");
const descansoLongoButton = document.querySelector(".app__card-button--longo");

const timer = document.getElementById("timer");
const appImage = document.querySelector(".app__image");
const appTittle = document.querySelector(".app__title");
const initTimer = document.getElementById("start-pause");
const botaoPlay = document.getElementById("start-pause");
const iniciarOuPausarButton = document.querySelector("#start-pause span");
const iniciarOuPausarButtonImg = document.querySelector("#start-pause img");
const tempoNaTela = document.getElementById("timer");

const allButtons = document.querySelectorAll(".app__card-button");

const musicaFocoInput = document.getElementById("alternar-musica");
const musicaFocus = new Audio('./sons/luna-rise-part-one.mp3');
const playAudio = new Audio("./sons/play.wav");
const pauseAudio = new Audio("./sons/pause.mp3");
const acabouTempo = new Audio("./sons/beep.mp3");
musicaFocus.loop = true;

let tempoDecorridoEmSegundos = 1500;
let intervaloId = null; 

musicaFocoInput.addEventListener("change", () => {
    if(musicaFocus.paused) {
        musicaFocus.play()
    } else {
        musicaFocus.pause()
    }
})

const MAX_FOCUS = 1500
const CURTO_DESCANSO = 300
const LONGO_DESCANSO = 900

const ATRIBUTE_INFO_STATUS = "data-contexto"

focoButton.addEventListener("click", () => {
    alterarContexto("foco");
    focoButton.classList.add("active")
})

descansoCurtoButton.addEventListener("click", () => {
    alterarContexto("descanso-curto");
    descansoCurtoButton.classList.add("active")
})

descansoLongoButton.addEventListener("click", () => {
    alterarContexto("descanso-longo");
    descansoLongoButton.classList.add("active")
})

function alterarContexto(contexto) {
    allButtons.forEach(botao => {
        botao.classList.remove("active")
    });

    html.setAttribute(ATRIBUTE_INFO_STATUS, contexto);
    appImage.setAttribute('src', `./imagens/${contexto}.png`);  

    switch(contexto) {
        case "foco":
            tempoDecorridoEmSegundos = 1500;
            appTittle.innerHTML = `Otimize sua produtividade,<br><strong class="app__title-strong">mergulhe no que importa.</strong>`;
            break;
        case "descanso-curto":
            tempoDecorridoEmSegundos = 300;
            appTittle.innerHTML = `Que tal dar uma respirada?<br><strong class="app__title-strong">Faça uma pausa curta</strong>`
            break;
        case "descanso-longo":
            tempoDecorridoEmSegundos = 900;
            appTittle.innerHTML = `Hora de voltar à superfície<br><strong class="app__title-strong">Faça uma pausa longa</strong>`
            break;
        default:
            break;
    }

    mostrarTempo();
}

const contagemRegressiva = () => {
    if(tempoDecorridoEmSegundos <= 0) {
        acabouTempo.play();
        alert("Tempo finalizado");
        acabouTempo.pause();
        pararContador();
        return 
    }
    tempoDecorridoEmSegundos-=1;
    mostrarTempo()
}

botaoPlay.addEventListener("click", iniciarOuPausar)

function iniciarOuPausar() {
    if(intervaloId) {
        pauseAudio.play();
        pararContador();
        return;
    }
    playAudio.play();
    iniciarOuPausarButtonImg.setAttribute("src", "./imagens/pause.png");
    iniciarOuPausarButton.textContent = "pausar";

    intervaloId = setInterval(contagemRegressiva, 1000);
}

function pararContador() {
    iniciarOuPausarButton.textContent = "Começar";
    iniciarOuPausarButtonImg.setAttribute("src", "./imagens/play_arrow.png");
    clearInterval(intervaloId);
    intervaloId = null;
}

function mostrarTempo() {
    const tempo = new Date(tempoDecorridoEmSegundos * 1000);
    const tempoFormatado = tempo.toLocaleString('pt-br', {minute: "2-digit", second:"2-digit"});
    tempoNaTela.textContent = tempoFormatado;
}

mostrarTempo()