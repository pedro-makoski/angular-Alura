const CLASS_ACTIVE = "ativa"
const teclas = document.querySelectorAll(".tecla")
Array.from(teclas).map((tecla) => {
    tecla.onclick = () => {
        if(tecla.classList.contains(CLASS_ACTIVE)) {
            tecla.classList.remove(CLASS_ACTIVE)
            return 
        }

        tecla.classList.add(CLASS_ACTIVE)
    }
})
