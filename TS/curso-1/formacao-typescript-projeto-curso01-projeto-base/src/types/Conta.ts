import { Transacao } from "./transacao.js"
import { TipoTransacao } from "./tipoTransacao.js"

let saldo:number = 3000

const Conta = {
    getSaldo() {
        return saldo
    },

    getDataDeAcesso(): Date {
        return new Date()
    },

    registrarTransacao(novaTransacao: Transacao): void {
        const tipoTransacao = novaTransacao.tipoTransacao
        const valor = novaTransacao.valor
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

        console.log(novaTransacao)
        
    }
}

export default Conta