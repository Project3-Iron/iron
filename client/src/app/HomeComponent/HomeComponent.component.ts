import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { SessionService } from "../services/Session.service";
import { DeviceService } from "../services/Device.service";
import { ProductService } from "../services/Product.service";

@Component({
  selector: "app-HomeComponent",
  templateUrl: "./HomeComponent.component.html",
  styleUrls: ["./HomeComponent.component.css"]
})
export class HomeComponent implements OnInit {
  devices: Array<Object> = [];

  constructor(
    public sessionService: SessionService,
    public router: Router,
    public deviceService: DeviceService,
    public productService: ProductService
  ) {}

  ngOnInit() {
    this.deviceService.getDevicesUser().subscribe(devices => {
      console.log(devices);
      return (this.devices = devices);
    });
  }

  viewProducts(deviceId) {
    this.productService.deviceId = deviceId;
    this.router.navigate(["/products"]);
  }
  deleteDevice(id) {
    this.deviceService.deleteDevice(id).subscribe(() => {
      this.getDevicesUser();
    });
  }

  getDevicesUser() {
    this.deviceService.getDevicesUser().subscribe(devices => {
      return (this.devices = devices);
    });
  }

  goDevice() {
    this.router.navigate(['/device/config']);
  }

  goHistorical() {
    this.router.navigate(['/historical']);
  }
}
