import { Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges } from '@angular/core';
import { Item } from 'src/app/interfaces/iItem';
import { ListaDeCompraService } from 'src/app/service/lista-de-compra.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit, OnChanges, OnDestroy {
  @Input() item!: Item
  @Output() emitidoItemParaEditar = new EventEmitter();
  @Output() emitidoIdParaDeletar = new EventEmitter();

  constructor(private listaDeComprasService: ListaDeCompraService) { }
  

  ngOnInit(): void {
    console.log("onInit")
  }
  
  ngOnChanges(changes: SimpleChanges): void {
    console.log("onChanges")
  }

  editarItem(): void {
    this.emitidoItemParaEditar.emit(this.item)
  }

  onInputCheck(): void {
    this.listaDeComprasService.toggleCompradoItem(this.item)
  }

  delatarItem(): void {
    this.emitidoIdParaDeletar.emit(this.item.id)
  }

  ngOnDestroy(): void {
    console.log("Adeus para todos que me amaram muito")
  }
}
