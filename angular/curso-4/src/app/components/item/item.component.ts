import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Item } from 'src/app/interfaces/iItem';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit, OnChanges {
  constructor() { }
  @Input() item!: Item

  ngOnInit(): void {
    console.log("onInit")
  }
  
  ngOnChanges(changes: SimpleChanges): void {
    console.log("onChanges")
  }
}
