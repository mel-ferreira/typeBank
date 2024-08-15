import { formatarData, formatarMoeda } from "../utils/formatters.js";
import { FormatoData } from "../types/FormatoData.js";
import Conta from "../types/Conta.js";
// Pega a class de saldo no HTML, define como um ElementoHTML, e insere uma condição:
const elementoSaldo = document.querySelector(".saldo-valor .valor");
// Pega a class da data no HTML, define como um ElementoHTML, e insere uma condição:
const elementoDataAcesso = document.querySelector(".block-saldo time");
if (elementoDataAcesso != null) {
    elementoDataAcesso.textContent = formatarData(Conta.getDataAcesso(), FormatoData.DIA_SEMANA_DIA_MES_ANO); //Pegamos a formatação do arquivo formatters
}
// Se o valor for diferente de NULO (null), muda a data
// Função de atualizar o saldo, a função está sendo chamada no início da aplicação pq o saldo precisa estar sempre aparente
renderizarSaldo();
function renderizarSaldo() {
    if (elementoSaldo != null) {
        elementoSaldo.textContent = formatarMoeda(Conta.getSaldo()); //Pegamos a formatação do arquivo formatters
    }
    // Se o valor for diferente de NULO (null), muda o texto/valor do saldo
}
const SaldoComp = {
    atualizar() {
        renderizarSaldo();
    }
};
export default SaldoComp;
