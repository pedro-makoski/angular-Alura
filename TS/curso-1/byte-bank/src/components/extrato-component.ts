import Conta from "../types/Conta.js";
import { FormatoData } from "../types/FormatoData.js";
import { TipoTransacao } from "../types/tipoTransacao.js";  
import { fomatarMoeda, formatarData } from "../utils/formatters.js";

const elementoRegistroTransacoesExtrato: HTMLElement = document.querySelector(
  ".extrato .registro-transacoes"
);

function renderizarEstrato(): void {
  const gruposTransacoes = Conta.getGruposTransacoes();
  elementoRegistroTransacoesExtrato.innerHTML = "";
  let htmlRegistroTransacoes: string = "";

  for (let grupoTransacao of gruposTransacoes) {
    let htmlTransacaoItem: string = "";
    for (let transacao of grupoTransacao.transacoes) {
    const tipoTranscao = transacao.tipoTransacao
      htmlTransacaoItem += `<div class="transacao-item">
              <div class="transacao-info">
                <span class="tipo">${tipoTranscao}</span>
                <strong class="valor">${fomatarMoeda(transacao.valor)}</strong>
              </div>
              <time class="data">${formatarData(transacao.data, FormatoData.DIA_MES)}</time>
            </div>`;
    }

    htmlRegistroTransacoes+=`
        <div class="transacoes-group">
            <strong>${grupoTransacao.label}</strong>
            ${htmlTransacaoItem}
        </div>
    `
  }

  if(htmlRegistroTransacoes === "") {
    htmlRegistroTransacoes = "<p>Não há transações registradas</p>"
  }

  elementoRegistroTransacoesExtrato.innerHTML=htmlRegistroTransacoes
}

const ExtratoComponent = {
    atualizar():void {
        renderizarEstrato()
    }
}

export default ExtratoComponent;

renderizarEstrato()