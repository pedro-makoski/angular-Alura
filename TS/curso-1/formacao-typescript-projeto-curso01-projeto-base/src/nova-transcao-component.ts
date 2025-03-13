

const elementoFormulario = document.querySelector(".block-nova-transacao form") as HTMLFormElement;
elementoFormulario.addEventListener("submit", (e) => {
    e.preventDefault();
    if(!elementoFormulario.checkValidity()) {
        alert("Por favor preencha todos os campos da transação");
        return; 
    }

    const inputTipoTransacao = document.getElementById("tipoTransacao") as HTMLSelectElement;
    const inputValor = document.querySelector("#valor") as HTMLInputElement;
    const inputData = document.querySelector("#data") as HTMLInputElement;
    
    let tipoTransacao : TipoTransacao = inputTipoTransacao.value as TipoTransacao;
    let valor : number = inputValor.valueAsNumber;
    let data : Date = new Date(inputData.value);

    switch(tipoTransacao) {
        case TipoTransacao.DEPOSITO:
            saldo += valor;
            break;
        case TipoTransacao.TRANSFERENCIA:
        case TipoTransacao.PAGAMENTO_BOLETO:
            saldo -= valor;
            break;
        default:
            alert("Tipo de transação inválido");
            return;
    }

    saldoElement.textContent = fomatarMoeda(saldo);

    const novaTranscao: Transacao = {
        tipoTransacao:tipoTransacao,
        valor:valor,
        data:data
    } 

    console.log(novaTranscao);
    elementoFormulario.reset();
});