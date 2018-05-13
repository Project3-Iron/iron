import { Component, OnInit } from "@angular/core";
import { SessionService } from "../services/Session.service";
import { ProductService } from "../services/Product.service";
import { Observable } from "rxjs/Rx";
import { RecipesService } from "../services/Recipes.service";

@Component({
  selector: "app-Product",
  templateUrl: "./Product.component.html",
  styleUrls: ["./Product.component.css"]
})
export class ProductComponent implements OnInit {
  products$: Observable<any>;
  error = '';
  recipes$: Array<any> = [];
  status$: Boolean;

  constructor(
    private productService: ProductService,
    public sessionService: SessionService,
    public recipesService: RecipesService
  ) {
    console.log('++++++recipes', this.recipes$)
  }

  ngOnInit() {
    this.productService
      .getAllProducts()
      .subscribe(
        products => (this.products$ = products),
        err => (this.error = err)
      );
  }

  getItem(product) {
    this.status$ = true;
    if (this.recipes$.indexOf(product) === -1) {
      this.recipes$.push(product);
    }
    this.recipesService.productsRecipes = this.recipes$;
  }

  deleteItem(product) {
    this.status$ = false;
    if (this.recipes$.indexOf(product) === -1) {
      this.recipes$.push(product);
    }
    this.recipesService.productsRecipes = this.recipes$;
  }
}
