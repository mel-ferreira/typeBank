import SaldoComp from "./saldo.js";
import Conta from "../types/Conta.js";
import ExtratoComp from "./extrato.js";
const elementoFormulario = document.querySelector(".block-nova-transacao form");
// Adiciona um evento de "ouvir" a p´róxima ação que, no caso, é o submit do forms
// No caso do event.preventDefault(); ele previne que a página recarregue
// A condição colocada é que se o formulário não for preenchido completamente, alertamos o usuário de preencher tudo
elementoFormulario.addEventListener("submit", function (event) {
    try {
        event.preventDefault();
        if (!elementoFormulario.checkValidity()) {
            alert("Por favor, preencha todos os campos da transação");
            return;
        }
        // Pega do HTML o select e input e define o tipo de elemento que é o HTML 
        const inputTipoTransacao = elementoFormulario.querySelector("#tipoTransacao");
        const inputValor = elementoFormulario.querySelector("#valor");
        const inputData = elementoFormulario.querySelector("#data");
        // Captura o tipo de transação, valor e data que o usuário escolheu e define o tipo delas
        // O que é texto é string, número é number e data é adiciona o 'new Date', ou seja, um objeto em 0000-00-00
        // Aqui definimos que a string vindo do TipoTransacao precisa ser as que já são padrão (Depósito, Transferência e Pagamento de boleto)
        let tipoTransacao = inputTipoTransacao.value;
        let valor = inputValor.valueAsNumber;
        let data = new Date(inputData.value + " 00:00:00");
        // Para finalizar, capturamos os valores em forma de objeto e exibimos no console
        // O formulário é resetado após as ações.
        const novaTransacao = {
            tipoTransacao: tipoTransacao, //Aqui definimos que só pode receber Depósito, Transferência e Pagamento de boleto (arquivo TipoTransacao.ts)
            valor: valor,
            data: data,
        };
        Conta.registrarTransacao(novaTransacao);
        SaldoComp.atualizar();
        ExtratoComp.atualizar();
        elementoFormulario.reset();
    }
    catch (erro) {
        alert(erro.message);
    }
});
