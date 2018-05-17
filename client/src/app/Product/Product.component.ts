import { Component, OnInit } from "@angular/core";
import { SessionService } from "../services/Session.service";
import { ProductService } from "../services/Product.service";
import { Observable } from "rxjs/Rx";
import { RecipesService } from "../services/Recipes.service";

interface Product {
  name: String;
  brand: String;
  code: String;
  price: number;
  measure: String;
  dueDate: Date;
  insertDate: Date;
  category: string;
  quantity: Number;
  status: Boolean;
  ingredients: String;
  device: String;
}

@Component({
  selector: "app-Product",
  templateUrl: "./Product.component.html",
  styleUrls: ["./Product.component.css"]
})
export class ProductComponent implements OnInit {
  products$: Observable<any>;
  error = "";
  recipes$: Array<any> = [];
  status$: Boolean;
  price: Number = 0;

  constructor(
    private productService: ProductService,
    //public sessionService: SessionService,
    public recipesService: RecipesService
  ) {}

  ngOnInit() {
    this.productService
      .getAllProducts(this.productService.deviceId)
      .subscribe(products => {
        this.products$ = this.orderBy(products);

        this.sum(this.products$);
      }, err => (this.error = err));
  }

  orderBy(products) {
    console.log(products);
    products.sort((a: Product, b: Product) => {
      let substract = parseInt(b.dueDate) - parseInt(a.dueDate)
      return substract;
    });

    return products;
  }

  getItem(product) {
    this.status$ = true;
    // console.log(this.recipes$);
    if (this.recipes$.indexOf(product) === -1) {
      this.recipes$.push(product);
    }
    this.recipesService.productsRecipes = this.recipes$;
  }

  deleteItem(product) {
    // console.log(this.recipes$);
    this.status$ = false;
    this.recipes$.splice(this.recipes$.indexOf(product - 1, 1));
  }

  sum(product) {
    this.products$.forEach(e => {
      this.price += e.price;
      //  console.log(this.price);
    });
  }
}
