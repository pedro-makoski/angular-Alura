import { FormatoData } from "../types/FormatoData.js";
import { formatarData } from "../utils/formatters.js";
import Conta from "../types/Conta.js";
const elementoDataAcesso = document.querySelector("time");
function renderizarSaldo() {
    if (elementoDataAcesso !== null) {
        elementoDataAcesso.textContent = formatarData(Conta.getDataDeAcesso(), FormatoData.DIA_SEMANANA_DIA_MES_ANO);
    }
}
const DataComponent = {
    atualizar() {
        renderizarSaldo();
    }
};
export default DataComponent;
