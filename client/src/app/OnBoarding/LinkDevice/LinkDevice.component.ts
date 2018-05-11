import { Component, OnInit } from "@angular/core";
import { DeviceService } from "../../services/Device.service";
import { Router } from "@angular/router";
import { SessionService } from "../../services/Session.service";

@Component({
  selector: "app-LinkDevice",
  templateUrl: "./LinkDevice.component.html",
  styleUrls: ["./LinkDevice.component.css"]
})
export class LinkDeviceComponent implements OnInit {
  constructor(
    public deviceService: DeviceService,
    public router: Router,
    public sessionService: SessionService
  ) {}
  deviceId: string = "";
  environment: String = "";
  linkedDevice: boolean = false;
  ngOnInit() {}

  linkDevice() {
    let deviceIdUser = {
      deviceId: this.deviceId,
      user: this.sessionService.user._id,
      environment: this.environment
    };
    this.deviceService
      .linkDevice(deviceIdUser)
      .subscribe(device => (this.linkedDevice = true), err => console.log(err));
  }
}
