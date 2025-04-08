import { TipoTransacao } from "./tipoTransacao.js"

export type Transacao = {
    valor: number,
    data: Date,
    tipoTransacao: TipoTransacao
}