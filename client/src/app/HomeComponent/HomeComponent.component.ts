import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { SessionService } from "../services/Session.service";
import { DeviceService } from "../services/Device.service";

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
    public deviceService: DeviceService
  ) {}

  ngOnInit() {
    this.deviceService.getDevicesUser().subscribe(devices => {
      console.log(devices)
      return (this.devices = devices);
    });
  }
}
