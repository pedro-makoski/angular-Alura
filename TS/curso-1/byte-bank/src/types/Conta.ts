import { Transacao } from "./transacao.js"
import { TipoTransacao } from "./tipoTransacao.js"
import { GrupoTransacao } from "./grupoTranscao.js";
import { ResumoTransacoes, TransacoesSeparadasPorTipo } from "./ResumoTransacoes.js";

let saldo:number = JSON.parse(localStorage.getItem("saldo")) || 0;
const transacoes: Transacao[] = JSON.parse(localStorage.getItem("transacoes"), (key: string, value: string) => {
    if(key === "data") {
        return new Date(value)
    }
    
    return value
}) || [];

function debitar(valor: number): void {
    if(valor <= 0) {
        throw new Error("Valor a ser debitado deve ser maior que zero")
    }

    if(valor > saldo) {
        throw new Error("Saldo insuficiente")
    }


    saldo -= valor;
    localStorage.setItem("saldo", saldo.toString());
    
}
function depositar(valor: number): void {
    if(valor <= 0) {
        throw new Error("Valor a ser debitado deve ser maior que zero")
    }

    saldo += valor;
    localStorage.setItem("saldo", saldo.toString());
}

const Conta = {
    getSaldo() {
        return saldo
    },

    getDataDeAcesso(): Date {
        return new Date()
    },

    getGruposTransacoes(): GrupoTransacao[] {
        const gruposTransacoes: GrupoTransacao[] = [];
        
        const listaTransacoes:Transacao[] = structuredClone(transacoes);
        const tranacoesOrdenadas: Transacao[] = listaTransacoes.sort((t1, t2) => t2.data.getTime() - t1.data.getTime());
        let labelAtualGrupoTransacao: string = "";

        for(let transacao of tranacoesOrdenadas) {
            let labelGrupoTranscao: string = transacao.data.toLocaleDateString("pt-BR", {month: "long", year: "numeric"});
            if(labelAtualGrupoTransacao !== labelGrupoTranscao) {
                labelAtualGrupoTransacao = labelGrupoTranscao;
                gruposTransacoes.push({label: labelGrupoTranscao, transacoes: []});
            }

            gruposTransacoes.at(-1).transacoes.push(transacao);
        }

        return gruposTransacoes
    },

    registrarTransacao(novaTransacao: Transacao): void {
        const tipoTransacao = novaTransacao.tipoTransacao
        const valor = novaTransacao.valor
        switch(tipoTransacao) {
            case TipoTransacao.DEPOSITO:
                depositar(valor);
                break;
            case TipoTransacao.TRANSFERENCIA:
            case TipoTransacao.PAGAMENTO_BOLETO:
                debitar(valor);
                novaTransacao.valor*=-1
                break;
            default:
                alert("Tipo de transação inválido");
                return;
        }

        transacoes.push(novaTransacao);
        localStorage.setItem("transacoes", JSON.stringify(transacoes));
        console.log(this.getGruposTransacoes())
    },

    getTiposTransacao(): TransacoesSeparadasPorTipo {
        const listaTransacoes:Transacao[] = structuredClone(transacoes);
        const res:TransacoesSeparadasPorTipo = {
            Depositos: [],
            Transferencias: [],
            PagamentoDeBoletos: []
        }

        for(let transacao of listaTransacoes) {
            const type = transacao.tipoTransacao

            if(type === TipoTransacao.DEPOSITO) {
                res.Depositos.push(transacao)
            }

            if(type === TipoTransacao.TRANSFERENCIA) {
                res.Transferencias.push(transacao)
            }

            if(type === TipoTransacao.PAGAMENTO_BOLETO) {
                res.PagamentoDeBoletos.push(transacao)
            }
        }

        return res
    },

    getResumo():ResumoTransacoes {
        const resumo:ResumoTransacoes = {
            totalDepositos: 0,
            totalTransferencias: 0,
            totalPagamentoDeBoletos: 0
        }

        const listaTransacoes:Transacao[] = structuredClone(transacoes);

        for(let transacao of listaTransacoes) {
            const type = transacao.tipoTransacao

            if(type === TipoTransacao.DEPOSITO) {
                resumo.totalDepositos+=transacao.valor
            }

            if(type === TipoTransacao.TRANSFERENCIA) {
                resumo.totalTransferencias+=transacao.valor
            }

            if(type === TipoTransacao.PAGAMENTO_BOLETO) {
                resumo.totalPagamentoDeBoletos+=transacao.valor
            }
        }

        return resumo
    }
}

export default Conta