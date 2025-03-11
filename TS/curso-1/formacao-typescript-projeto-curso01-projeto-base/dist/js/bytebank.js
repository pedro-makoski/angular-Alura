let saldo = 3000;
const saldoElement = document.querySelector(".saldo-valor .valor");
if (saldoElement !== null) {
    saldoElement.textContent = saldo.toString();
}
const elementoFormulario = document.querySelector(".block-nova-transacao form");
elementoFormulario.addEventListener("submit", (e) => {
    e.preventDefault();
    if (!elementoFormulario.checkValidity()) {
        alert("Por favor preencha todos os campos da transação");
        return;
    }
    const inputTipoTransacao = document.getElementById("tipoTransacao");
    const inputValor = document.querySelector("#valor");
    const inputData = document.querySelector("#data");
    let tipoTransacao = inputTipoTransacao.value;
    let valor = inputValor.valueAsNumber;
    let data = new Date(inputData.value);
    switch (tipoTransacao) {
        case "Depósito":
            saldo += valor;
            break;
        case "Transferência":
        case "Pagamento de Boleto":
            saldo -= valor;
            break;
        default:
            alert("Tipo de transação inválido");
            return;
    }
    saldoElement.innerHTML = saldo.toString();
    const novaTranscao = {
        tipoTransacao: tipoTransacao,
        valor: valor,
        data: data
    };
    console.log(novaTranscao);
    elementoFormulario.reset();
});
