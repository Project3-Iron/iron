import { Injectable, EventEmitter } from "@angular/core";
import { Http } from "@angular/http";
import { Observable } from "rxjs/Rx";
import "rxjs";
import { environment } from "../../environments/environment";

@Injectable()
export class ProductService {
  BASE_URL = environment.BASEURL;
  deviceId: String = "";
  options: any = { withCredentials: true };
  constructor(private http: Http) {}

  handleError(e) {
    return Observable.throw(e.json().message);
  }

  getAllProducts(deviceId) {
    return this.http
      .get(`${this.BASE_URL}/api/product/myProducts/${deviceId}`, this.options)
      .map(res => res.json())
      .catch(this.handleError);
  }

  getAllProductsUser() {}
}

/* 

/         GET     all products

/         POST    create new product => product created

/:id      DELETE  delete product => SUCCESSFULL delete + id

/:id      GET     retrieve product  => product 

/:id      PUT     update product =>  product updated
*/
