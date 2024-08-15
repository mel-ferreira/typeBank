import { Transacao } from "./Transacao.js";
import { TipoTransacao } from "./TipoTransacao.js";
import { GrupoTransacao } from "./GrupoTransacao.js";

let saldo: number = JSON.parse(localStorage.getItem("saldo")) || 0;

const transacoes: Transacao[] = JSON.parse(localStorage.getItem("transacoes"), (key:string,value:string) => {
    if(key === "data") {
        return new Date(value);
    }
    return value;

}) || [];

// Função para impedir  transações acima ou abaixo do valor esperado
function debitar(valor: number): void {
    if(valor < 0) {
        throw new Error("O valor deve ser maior que zero!")
    }
    if (valor > saldo) {
        throw new Error("Saldo insuficiente")
    }
    saldo -= valor;
    localStorage.setItem("saldo", saldo.toString())
}
function depositar(valor: number): void {
    if(valor < 0) {
        throw new Error("O valor deve ser maior que zero!")
    }
    saldo += valor;
    localStorage.setItem("saldo", saldo.toString())
}

const Conta = {
    getSaldo() {
        return saldo
    },

    getDataAcesso(): Date {
        return new Date();
    },
    
    getGruposTransacoes(): GrupoTransacao[] {
        const gruposTransacoes: GrupoTransacao[] = [];
        const listaTransacoes: Transacao[] = structuredClone(transacoes);
//Compara as datas e as coloca de forma ordenada (mais antiga para a mais recente)
        const transacoesOrdenadas: Transacao[] =  listaTransacoes.sort((t1, t2) => t2.data.getTime() -  t1.data.getTime() )
        let labelAtualGrupoTransacoes: string = "";

        for (let transacao of transacoesOrdenadas) {
            let labelGrupoTransacao: string = transacao.data.toLocaleDateString("pt-br", {month: "long", year: "numeric"});
            if (labelAtualGrupoTransacoes != labelGrupoTransacao) {
                labelAtualGrupoTransacoes = labelGrupoTransacao;
                gruposTransacoes.push({
                    label: labelGrupoTransacao,
                    transacoes: []
                });
            }
            gruposTransacoes.at(-1).transacoes.push(transacao);
        }

        return gruposTransacoes;
    },

    registrarTransacao(novaTransacao:Transacao): void {
// Aqui temos uma condicional que indica o que cada transação faz
// E se escolherem uma transação diferente das disponíveis, alertamos que o tipo é inválido

        if (novaTransacao.tipoTransacao == TipoTransacao.DEPOSITO) {
            depositar(novaTransacao.valor);
        } else if (novaTransacao.tipoTransacao == TipoTransacao.TRANSFERENCIA || novaTransacao.tipoTransacao == TipoTransacao.PAGAMENTO_BOLETO) {
            debitar(novaTransacao.valor);
            novaTransacao.valor *= -1;
        } else {
            throw new Error("Tipo de Transação é inválida!");
        }

        transacoes.push(novaTransacao);
        console.log(this.getGruposTransacoes());

        localStorage.setItem("transacoes", JSON.stringify(transacoes));
    }
}

export default Conta;
