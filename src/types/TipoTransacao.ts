// Criamos a ENUM com chaves únicas para os objetos e vamos exportar para a transacao.ts nas linhas:
// 23, 30 e 45

export enum TipoTransacao {
    DEPOSITO = "Depósito",
    TRANSFERENCIA = "Transferência",
    PAGAMENTO_BOLETO = "Pagamento de Boleto",
}