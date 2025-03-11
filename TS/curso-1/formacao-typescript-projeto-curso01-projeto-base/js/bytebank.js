var saldo = 3000;
var saldoElement = document.querySelector(".saldo-valor .valor");
if (saldoElement !== null) {
    saldoElement.textContent = saldo.toString();
}
var elementoFormulario = document.querySelector(".block-nova-transacao form");
elementoFormulario.addEventListener("submit", function (e) {
    e.preventDefault();
    if (!elementoFormulario.checkValidity()) {
        alert("Por favor preencha todos os campos da transação");
        return;
    }
    var inputTipoTransacao = document.getElementById("tipoTransacao");
    var inputValor = document.querySelector("#valor");
    var inputData = document.querySelector("#data");
    var tipoTransacao = inputTipoTransacao.value;
    var valor = inputValor.valueAsNumber;
    var data = new Date(inputData.value);
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
    var novaTranscao = {
        tipoTransacao: tipoTransacao,
        valor: valor,
        data: data
    };
    console.log(novaTranscao);
    elementoFormulario.reset();
});
