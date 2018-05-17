import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { Observable } from "rxjs/Rx";
import { ProductService } from "../services/Product.service";
import { environment } from "../../environments/environment";
@Injectable()
export class HistoricalService {
  BASE_URL = environment.BASEURL;
  options: any = { withCredentials: true };

  constructor(private http: Http, private productService: ProductService) {}
  handleError(e) {
    return Observable.throw(e.json().message);
  }

  getHistoricalData() {
    return this.http
      .get(`${this.BASE_URL}/api/historical`, this.options)
      .map(res => {
       // console.log(res);
        return res.json();
      })
      .catch(this.handleError);
  }
}
