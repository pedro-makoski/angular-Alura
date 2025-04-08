import { Transacao } from "./transacao"

export type ResumoTransacoes = {
    totalDepositos: number,
    totalTransferencias: number,
    totalPagamentoDeBoletos: number 
}

export type TransacoesSeparadasPorTipo = {
    Depositos: Transacao[],
    Transferencias: Transacao[],
    PagamentoDeBoletos: Transacao[] 
}