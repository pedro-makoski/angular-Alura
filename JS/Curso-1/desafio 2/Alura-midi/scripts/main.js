const teclaPom = document.querySelector('.tecla_pom');
const teclaClap = document.querySelector('.tecla_clap');
const audioPom = document.getElementById("som_tecla_pom");
const audioClap = document.getElementById("som_tecla_clap");

function tocaSom(elemento) {
    if(elemento) {
        elemento.play()
    }
}

teclaPom.addEventListener("click", () => {
    tocaSom(audioPom)
});

teclaClap.addEventListener("click", () => {
    tocaSom(audioClap)
});