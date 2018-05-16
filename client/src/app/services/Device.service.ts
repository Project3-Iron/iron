import { Injectable, EventEmitter } from "@angular/core";
import { Http } from "@angular/http";
import { Observable } from "rxjs/Rx";
import "rxjs";
import { resolve } from "q";
import { environment } from "../../environments/environment.prod";

@Injectable()
export class DeviceService {
  BASE_URL = environment.BASEURL;
  options: any = { withCredentials: true };

  constructor(private http: Http) {}

  handleError(e) {
    return Observable.throw(e.json().message);
  }

  getDevicesUser() {
    return this.http
      .get(`${this.BASE_URL}/api/device/mydevices`, this.options)
      .map(res => res.json())
      .catch(this.handleError);
  }

  linkDevice(deviceId) {
    return this.http
      .post(`${this.BASE_URL}/api/device`, deviceId, this.options)
      .map(res => res.json())
      .catch(this.handleError);
  }

  deleteDevice(deviceId) {
    return this.http
      .delete(`${this.BASE_URL}/api/device/${deviceId}`, this.options)
      .map(res => {
      //  console.log(res)
        return res.json()})
      .catch(this.handleError);
  }
}
