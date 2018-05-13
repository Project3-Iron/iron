import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-Product-card',
  templateUrl: './Product-card.component.html',
  styleUrls: ['./Product-card.component.css']
})
export class ProductCardComponent implements OnInit {

  @Input() products;
  @Input() status;
  @Output() outGetItem: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
    console.log(this.products);
  }

  outInfo(product) {
    this.status = true;
    this.outGetItem.emit(product);
  }
}




