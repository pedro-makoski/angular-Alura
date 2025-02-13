const teclas = document.querySelectorAll("input[type='button']")

Array.from(teclas).map((tecla) => {
   tecla.onkeydown = (evento) => {
    console.log(evento.code)
      if(evento.code === "Enter" || evento.code === "Space") {
        tecla.classList.add("ativa")
      }
   }
  
    tecla.onkeyup = () => {
      tecla.classList.remove("ativa")
    }
})