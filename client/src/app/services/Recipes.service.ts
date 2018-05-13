import { Injectable, EventEmitter } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs';

@Injectable()
export class RecipesService {

  productsRecipes: Array<Object> = [];
  concatQuery: String = 'q=';

  constructor(private http: Http) {}

  handleError(e) {
    return Observable.throw(e.json().message);
  }

  getRecipes() {

    this.productsRecipes.forEach(e => {
      return this.concatQuery += `${e}+`;
    });
    return this.http
      .get(
        `https://api.edamam.com/search?${this.concatQuery}&app_id=add2a60c&app_key=3d6a68810b406448bc51c4e3d46eb7b6`
      )
      .map(res => {
        console.log("+++++", res);
        console.log("ARaay+++++", this.productsRecipes);
        return res.json();
      })
      .catch(this.handleError);
  }
}
