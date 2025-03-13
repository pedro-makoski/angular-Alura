let saldo: number = 3000;
const saldoElement = document.querySelector(".saldo-valor .valor") as HTMLElement
if(saldoElement !== null) {
    saldoElement.textContent = fomatarMoeda(saldo);
}

const elementoDataAcesso = document.querySelector("time") as HTMLElement;
if(elementoDataAcesso !== null) {
    const dataAcesso:Date = new Date()
    elementoDataAcesso.textContent = formatarData(dataAcesso, FormatoData.DIA_SEMANANA_DIA_MES_ANO);
}