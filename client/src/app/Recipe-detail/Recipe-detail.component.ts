import { Component, OnInit } from "@angular/core";
import { RecipesService } from "../services/Recipes.service";

@Component({
  selector: "app-Recipe-detail",
  templateUrl: "./Recipe-detail.component.html",
  styleUrls: ["./Recipe-detail.component.css"]
})
export class RecipeDetailComponent implements OnInit {
  recipe: Object = {}
  constructor(private recipesService: RecipesService) {}

  ngOnInit() {
    this.recipe = this.recipesService.recipe
  }
}
