import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { Item } from 'src/app/interfaces/iItem';
import { ListaDeCompraService } from 'src/app/service/lista-de-compra.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit, OnChanges {
  @Input() item!: Item
  @Output() emitidoItemParaEditar = new EventEmitter();

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
}
