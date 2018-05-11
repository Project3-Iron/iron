import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-Products-list',
  templateUrl: './Products-list.component.html',
  styleUrls: ['./Products-list.component.css']
})
export class ProductsListComponent implements OnInit {

  @Input() products;
  @Input() status;
  @Input() recipes;
  @Output() outGetItem: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
    console.log(this.products);
  }

  outInfo(product) {
    this.status = true;
    console.log(this.recipes);
    this.outGetItem.emit(product);
  }
}
