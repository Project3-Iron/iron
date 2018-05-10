import { Component, OnInit } from '@angular/core';
import { SessionService } from '../services/Session.service';
import { ProductService } from '../services/Product.service';

@Component({
  selector: 'app-Product',
  templateUrl: './Product.component.html',
  styleUrls: ['./Product.component.css']
})
export class ProductComponent implements OnInit {

  products: Array<any>;

  constructor(private productService: ProductService, public sessionService: SessionService ) { }

  ngOnInit() {
    this.productService.getAllProducts().subscribe(products => this.products = products);
  }

}
