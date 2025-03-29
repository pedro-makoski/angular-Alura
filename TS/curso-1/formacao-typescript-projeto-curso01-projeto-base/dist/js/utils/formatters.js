import { FormatoData } from "../types/FormatoData.js";
export function fomatarMoeda(valor) {
    return valor.toLocaleString("pt-br", { style: "currency", currency: "BRL" });
}
export function formatarData(data, formato = FormatoData.PADRAO) {
    if (formato === FormatoData.DIA_SEMANANA_DIA_MES_ANO) {
        return data.toLocaleDateString("pt-br", {
            weekday: "long",
            day: "2-digit",
            month: "2-digit",
            year: "numeric",
        });
    }
    if (formato === FormatoData.DIA_MES) {
        return data.toLocaleDateString("pt-br", { day: "2-digit", month: "2-digit" });
    }
    return data.toLocaleDateString("pt-br");
}
function formatarInformacoes(valor, data, formatoData) {
    const dataFormatada = formatarData(data, formatoData);
    const valorFormatado = fomatarMoeda(valor);
    return `${dataFormatada} - ${valorFormatado}`;
}
