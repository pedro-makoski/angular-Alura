import { Component, Input, OnInit } from '@angular/core';
import { Item } from 'src/app/interfaces/iItem';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  constructor() { }
  @Input() item!: Item

  ngOnInit(): void { }

}
