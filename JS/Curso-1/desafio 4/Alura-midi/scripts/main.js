function tocaSom(elemento) {
    if(elemento) {
        elemento.play()
    }
}

function tocaSomPom() {
    tocaSom(document.querySelector("#som_tecla_pom"))
}

function tocaSomClap() {
    tocaSom(document.querySelector("#som_tecla_clap"))
}

const teclas = document.querySelectorAll(".tecla")
teclas[0].onclick = tocaSomPom
teclas[1].onclick = tocaSomClap
