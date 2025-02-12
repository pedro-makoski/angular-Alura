function tocaSom(idElementoAudio) {
    console.log(idElementoAudio)
    if(idElementoAudio) {
        const elemento = document.querySelector(idElementoAudio)
        if(elemento) {
            elemento.play()
        }
    }
}

const POS_OF_IDENTIFIER_SOM_IN_CLASS_LIST = 1

const teclas = document.querySelectorAll(".tecla")
for(let i = 0; i < teclas.length; i++) {
    const tecla = teclas[i]
    const intrumentoIdentifier = tecla.classList[POS_OF_IDENTIFIER_SOM_IN_CLASS_LIST]
    const idAudio = `#som_${intrumentoIdentifier}`
    teclas[i].onclick = () => tocaSom(idAudio)
}
