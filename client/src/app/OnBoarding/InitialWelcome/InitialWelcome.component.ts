import { Component, OnInit } from "@angular/core";
import { DeviceService } from "../../services/Device.service";
import { SessionService } from "../../services/Session.service";

@Component({
  selector: "app-InitialWelcome",
  templateUrl: "./InitialWelcome.component.html",
  styleUrls: ["./InitialWelcome.component.css"]
})
export class InitialWelcomeComponent implements OnInit {
  devices: Array<Object> = [];
  
  constructor(public deviceService: DeviceService) {}

  ngOnInit() {
    this.deviceService.getDevicesUser().subscribe(devices => {
     // console.log(devices)
      return this.devices = devices;
    });
  }
}
