import { Component, OnInit } from "@angular/core";
import { RecipesService } from "../services/Recipes.service";
import { WindowService } from "../services/Window.service";

@Component({
  selector: "app-Recipe-detail",
  templateUrl: "./Recipe-detail.component.html",
  styleUrls: ["./Recipe-detail.component.css"]
})
export class RecipeDetailComponent implements OnInit {
  recipe: Object = {};
  constructor(
    private recipesService: RecipesService,
    private windowService: WindowService
  ) {}

  ngOnInit() {
    this.recipe = this.recipesService.recipe;
  }

  viewSource(url) {
    this.windowService.nativeWindow.open(url);
  }
}
