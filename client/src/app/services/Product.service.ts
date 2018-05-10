import { Injectable, EventEmitter } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs';

@Injectable()
export class ProductService {

  BASE_URL = 'http://localhost:3000';

  constructor(private http: Http) { }

  getAllProducts() {
    return this.http.get(`${this.BASE_URL}/api/product`)
      .map(res => res.json());
  }

}


/* 

/         GET     all products

/         POST    create new product => product created

/:id      DELETE  delete product => SUCCESSFULL delete + id

/:id      GET     retrieve product  => product 

/:id      PUT     update product =>  product updated
*/