const html = document.querySelector("html")
const focoButton = document.querySelector(".app__card-button--foco")
const descansoCurtoButton = document.querySelector(".app__card-button--curto")
const descansoLongoButton = document.querySelector(".app__card-button--longo")

const timer = document.getElementById("timer")
const appImage = document.querySelector(".app__image")
const appTittle = document.querySelector(".app__title")
const initTimer = document.getElementById("start-pause")

const MAX_FOCUS = 1500
const CURTO_DESCANSO = 300
const LONGO_DESCANSO = 900

const ATRIBUTE_INFO_STATUS = "data-contexto"

focoButton.addEventListener("click", () => {
    html.setAttribute(ATRIBUTE_INFO_STATUS, "foco");
    appImage.setAttribute('src', './imagens/foco.png')
})

descansoCurtoButton.addEventListener("click", () => {
    html.setAttribute(ATRIBUTE_INFO_STATUS, "descanso-curto")
    appImage.setAttribute('src', './imagens/descanso-curto.png')
})

descansoLongoButton.addEventListener("click", () => {
    html.setAttribute(ATRIBUTE_INFO_STATUS, "descanso-longo")
    appImage.setAttribute('src', './imagens/descanso-longo.png')
})