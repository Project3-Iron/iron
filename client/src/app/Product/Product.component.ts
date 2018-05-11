import { Component, OnInit } from '@angular/core';
import { SessionService } from '../services/Session.service';
import { ProductService } from '../services/Product.service';
import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'app-Product',
  templateUrl: './Product.component.html',
  styleUrls: ['./Product.component.css']
})
export class ProductComponent implements OnInit {

  products$: Observable<any>;
  error = '';
  recipes$: Array<any> = [];
  status$: Boolean;

  constructor(private productService: ProductService, public sessionService: SessionService ) { }

  ngOnInit() {
    this.productService.getAllProducts().subscribe(
      products => this.products$ = products,
      (err) =>  this.error = err);
  }

  getItem(product) {
    console.log("PADRE", product)
      this.status$ = true;
      if (this.recipes$.indexOf(product) === -1) {
        this.recipes$.push(product);
      }
      console.log(this.recipes$);
  }


}
