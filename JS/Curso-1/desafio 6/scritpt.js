let value = 0;

function addValue() {
    value++
}

const botaoAdd = document.querySelectorAll(".botao-add")
console.log(botaoAdd)

for(let i = 0; i < botaoAdd.length; i++) {
    const valueIndex = i 
    botaoAdd[i].onclick = () => {
        addValue()
        if(i == 3){
            console.log(value)
        }
    }
}