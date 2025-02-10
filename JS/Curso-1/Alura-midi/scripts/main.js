const teclaPom = document.querySelector('.tecla_pom');
const audioPom = document.getElementById("som_tecla_pom");

teclaPom.addEventListener("click", () => {
    audioPom.play();
    alert("Fui clicado");
});