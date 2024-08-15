// Aqui criamos um tipo padrão, só com esses objetos para importar ao arquivo
// nova-transacao.ts e podermos usar na linha 43 
// Sendo assim, o objeto criado no outro arquivo não poderá ter outros objetos além desses aqui:
import { TipoTransacao } from "./TipoTransacao.js";

export type Transacao = {
    tipoTransacao: TipoTransacao;
    valor: number;
    data: Date;
}
