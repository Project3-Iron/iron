import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { Observable } from "rxjs/Rx";

@Injectable()
export class HistoricalService {
  BASE_URL = "http://localhost:3000";
  options: any = { withCredentials: true };

  constructor(private http: Http) {}
  handleError(e) {
    return Observable.throw(e.json().message);
  }

  getHistoricalData() {
    return this.http
      .get(`${this.BASE_URL}/api/historical`, this.options)
      .map(res => {
        console.log(res)
        return res.json()})
      .catch(this.handleError);
  }

  
}