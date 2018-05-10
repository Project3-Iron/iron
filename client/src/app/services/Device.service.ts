import { Injectable, EventEmitter } from "@angular/core";
import { Http } from "@angular/http";
import { Observable } from "rxjs/Rx";
import "rxjs";
import { resolve } from "q";

@Injectable()
export class DeviceService {
  BASE_URL = "http://localhost:3000";
  // deviceEvent: EventEmitter<any> = new EventEmitter();
  options: any = { withCredentials: true };
  // device: any;

  constructor(private http: Http) {}

  handleError(e) {
    return Observable.throw(e.json().message);
  }

  // handleDevice(device?: object) {
  //   this.device = device;
  //   this.deviceEvent.emit(this.device);
  //   return this.device;
  // }

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
}
