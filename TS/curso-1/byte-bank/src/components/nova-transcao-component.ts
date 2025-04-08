import { TipoTransacao } from "../types/tipoTransacao.js";
import { Transacao } from "../types/transacao.js";
import Conta from "../types/Conta.js";
import SaldoComponent from "./saldo-component.js";

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
    

    const novaTranscao: Transacao = {
        tipoTransacao:tipoTransacao,
        valor:valor,
        data:data
    } 

    console.log(novaTranscao);
    Conta.registrarTransacao(novaTranscao)
    SaldoComponent.atualizar()

    elementoFormulario.reset();
});