import { Injectable, EventEmitter } from "@angular/core";
import { Http } from "@angular/http";
import { Observable } from "rxjs/Rx";
import "rxjs";

@Injectable()
export class RecipesService {

  productsRecipes: Array<Object> = [];

  constructor(private http: Http) {}

  handleError(e) {
    return Observable.throw(e.json().message);
  }

  getRecipes() {
    return this.http
      .get(
        `https://api.edamam.com/search?q=${this.productsRecipes[0]}&app_id=add2a60c&app_key=3d6a68810b406448bc51c4e3d46eb7b6`
      )
      .map(res => {
        console.log("+++++", res);
      return  res.json();
      } )
      .catch(this.handleError);
  }
}
