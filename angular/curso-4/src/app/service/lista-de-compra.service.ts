import { Item } from 'src/app/interfaces/iItem';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ListaDeCompraService {

  private listaDeCompra: Item[] = []

  constructor() {
    this.listaDeCompra = JSON.parse(localStorage.getItem('itens') || '[]')
  }

  getListaDeCompra(){
    return this.listaDeCompra;
  }

  private criarItem(nomeDoItem: string): Item {
    const id = this.listaDeCompra.length+1
    const item: Item = {
      id: id,
      nome: nomeDoItem,
      data: new Date().toLocaleString('pt-BR'),
      comprado: false
    }
    return item
  }

  adicionarItemNaLista(nomeDoItem: string): void {
    const item = this.criarItem(nomeDoItem)
    this.listaDeCompra.push(item)
  }

  editarItemDaLista(itemAntigo: Item, nomeEditadoDoItem: string) {
    const itemEditado: Item = {
      id: itemAntigo.id,
      nome: nomeEditadoDoItem,
      data: itemAntigo.data,
      comprado: itemAntigo.comprado
    }
    const id = itemAntigo.id
    this.listaDeCompra.splice(Number(id)-1, 1, itemEditado)
  }

  atualizarLocalStorage() {
    localStorage.setItem('itens', JSON.stringify(this.listaDeCompra))
  }

  toggleCompradoItem(item: Item) {
    const id = Number(item.id)
    this.listaDeCompra[id-1].comprado = !this.listaDeCompra[id-1].comprado; 
  }

  limparTudo(): void {
    this.listaDeCompra = []
  }
}
