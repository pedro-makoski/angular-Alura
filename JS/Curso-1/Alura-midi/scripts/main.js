const AUDIO_NAME_TAG = "audio"

function tocaSom(seletorAudio) {
    const elemento = document.querySelector(seletorAudio)
    
    if(!elemento) {
        console.log("Esse elemento não existe")
        return 
    }

    if(elemento.localName !== AUDIO_NAME_TAG) {
        console.log("Elemento do tipo errado")
        return 
    }

    elemento.play()
}

const POS_OF_IDENTIFIER_SOM_IN_CLASS_LIST = 1

const teclas = document.querySelectorAll(".tecla")
for(let i = 0; i < teclas.length; i++) {
    const tecla = teclas[i]
    const intrumentoIdentifier = tecla.classList[POS_OF_IDENTIFIER_SOM_IN_CLASS_LIST]
    const idAudio = `#som_${intrumentoIdentifier}`
    
    teclas[i].onclick = () => tocaSom(idAudio)

    tecla.onkeydown = (evento) => {
        if(evento.code === "Enter" || evento.code === "Space") {
            tecla.classList.add("ativa");
        }
    }

    tecla.onkeyup = () => {
        tecla.classList.remove("ativa");
    }
}
