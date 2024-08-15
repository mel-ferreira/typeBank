//Aqui fazemos uma função para formatar todos os elementos de moeda
// Recebemos um valor do tipo número e transformamos em string
// E retornamos o valor com a formatação de moeda do BRASIL
import { FormatoData } from "../types/FormatoData.js";
export function formatarMoeda(valor) {
    return valor.toLocaleString("pt-br", { currency: "BRL", style: "currency" });
}
// Aqui pegamos e definimos um padrão de data para exibir, nesse caso, o padrão é "DD/MM/AAA"
// Seguindo o arquivo FormatoData.ts
export function formatarData(data, formato = FormatoData.PADRAO) {
    // Se o formato for DIA_SEMANA_DIA_MES_ANO, vai retornar aquele estilo
    if (formato === FormatoData.DIA_SEMANA_DIA_MES_ANO) {
        return data.toLocaleDateString("pt-br", {
            //Estilo da data
            weekday: "long",
            day: "2-digit",
            month: "2-digit",
            year: "numeric"
        });
    }
    else if (formato === FormatoData.DIA_MES) {
        return data.toLocaleDateString("pt-br", { day: "2-digit", month: "2-digit" });
    }
    return data.toLocaleDateString("pt-br");
}
