let saldo = 3000;
const saldoElement = document.querySelector(".saldo-valor .valor");
if (saldoElement !== null) {
    saldoElement.textContent = fomatarMoeda(saldo);
}
const elementoDataAcesso = document.querySelector("time");
if (elementoDataAcesso !== null) {
    const dataAcesso = new Date();
    elementoDataAcesso.textContent = formatarData(dataAcesso, FormatoData.DIA_SEMANANA_DIA_MES_ANO);
}
