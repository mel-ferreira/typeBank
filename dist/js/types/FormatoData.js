// Aqui fazemos uma enum para criar padrões de data para serem exibidos
// Utilizado no formatters linha 11
export var FormatoData;
(function (FormatoData) {
    FormatoData["PADRAO"] = "DD/MM/AAAA";
    FormatoData["DIA_SEMANA_DIA_MES_ANO"] = "DIA_SEMANA, DD/MM/AAAA";
    FormatoData["DIA_MES"] = "DD/MM";
})(FormatoData || (FormatoData = {}));
