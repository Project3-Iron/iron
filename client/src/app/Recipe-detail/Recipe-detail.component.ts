import { Component, OnInit } from "@angular/core";
import { RecipesService } from "../services/Recipes.service";
import { WindowService } from "../services/Window.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-Recipe-detail",
  templateUrl: "./Recipe-detail.component.html",
  styleUrls: ["./Recipe-detail.component.css"]
})
export class RecipeDetailComponent implements OnInit {
  recipe: Object = {};
  constructor(
    private recipesService: RecipesService,
    private windowService: WindowService,
    public router: Router
  ) {}

  ngOnInit() {
    this.recipe = this.recipesService.recipe;
  }

  viewSource(url) {
    this.windowService.nativeWindow.open(url);
  }
}
