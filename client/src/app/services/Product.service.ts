import { Injectable, EventEmitter } from "@angular/core";
import { Http } from "@angular/http";
import { Observable } from "rxjs/Rx";
import "rxjs";

@Injectable()
export class ProductService {
  BASE_URL = "http://localhost:3000";
  options: any = { withCredentials: true };
<<<<<<< HEAD
  constructor(private http: Http) {}
=======
  deviceId: String = "";

  constructor(private http: Http) { }
>>>>>>> 145d641ac37f95ed317f0e1cf3bf2acd4b085ad8

  handleError(e) {
    return Observable.throw(e.json().message);
  }

<<<<<<< HEAD
  getAllProducts() {
    return this.http
      .get(`${this.BASE_URL}/api/product/myProducts`, this.options)
=======
  getAllProducts(deviceId) {

    return this.http.get(`${this.BASE_URL}/api/product/myProducts/${deviceId}`, this.options)
>>>>>>> 145d641ac37f95ed317f0e1cf3bf2acd4b085ad8
      .map(res => res.json())
      .catch(this.handleError);
  }
}

/* 

/         GET     all products

/         POST    create new product => product created

/:id      DELETE  delete product => SUCCESSFULL delete + id

/:id      GET     retrieve product  => product 

/:id      PUT     update product =>  product updated
*/
