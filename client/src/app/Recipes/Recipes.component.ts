import { Component, OnInit } from "@angular/core";
import { SessionService } from "../services/Session.service";
import { ProductService } from "../services/Product.service";

import { Observable } from "rxjs/Rx";
import { RecipesService } from "../services/Recipes.service";
import { Router } from '@angular/router';

@Component({
  selector: "app-Recipes",
  templateUrl: "./Recipes.component.html",
  styleUrls: ["./Recipes.component.css"]
})
export class RecipesComponent implements OnInit {
  recipes: Array<Object> = [];
  loading: boolean  = false; 

  constructor(
    private productService: ProductService,
    public sessionService: SessionService,
    private recipesService: RecipesService, 
    public router: Router
  ) {}
  
  ngOnInit() {
    this.recipesService.getRecipes().subscribe(data => {
      this.recipes = data.hits;
      this.loading = true; 
     // console.log(data.hits)
    });

  }
  recipeDetail(recipe){
   // console.log(recipe)
    this.recipesService.recipe = recipe;
    this.router.navigate(['/recipes/detail'])
  }
}
