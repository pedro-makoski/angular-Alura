const input = document.querySelector('input[type="tel"]')
const teclas = document.querySelectorAll('input[type="button"]')
for(let i = 0; i < teclas.length; i++) {
  teclas[i].addEventListener("click", () => {
      input.value += teclas[i].value
  }) 
}