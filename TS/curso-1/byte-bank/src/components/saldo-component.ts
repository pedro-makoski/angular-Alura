import { fomatarMoeda } from "../utils/formatters.js";
import Conta from "../types/Conta.js";

const saldoElement = document.querySelector(".saldo-valor .valor") as HTMLElement

renderizarSaldo()
function renderizarSaldo(): void {
    if(saldoElement !== null) {
        saldoElement.textContent = fomatarMoeda(Conta.getSaldo());
    }    
}   

const SaldoComponent = {
    atualizar() {
        renderizarSaldo()
    }
}

export default SaldoComponent
