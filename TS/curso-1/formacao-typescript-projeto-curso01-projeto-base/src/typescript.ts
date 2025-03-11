let valor: number = 3000;
let nome: string = "";
let isPago: boolean = false;
let qualquer:any = 3000;

const lista: number[] = [];
lista.push(25, 10, 13, 15);

// Tipos personalizados (Type Alias)

type Transacao = {
    tipoTransacao: TipoTransacao;
    data: Date;
    valor:number;
}

//enum
enum TipoTransacao {
    DEPOSITO = "Depósito",
    TRANSFERENCIA = "Transferência",
    PAGAMENTO_BOLETO= "Pagamento de Boleto"
}

const transacao:Transacao = {
    tipoTransacao:TipoTransacao.DEPOSITO,
    data:new Date(),
    valor:0
}