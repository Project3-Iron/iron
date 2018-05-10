import { Component, OnInit } from "@angular/core";
import { DeviceService } from "../../services/Device.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-LinkDevice",
  templateUrl: "./LinkDevice.component.html",
  styleUrls: ["./LinkDevice.component.css"]
})
export class LinkDeviceComponent implements OnInit {
  constructor(public deviceService: DeviceService, public router: Router) {}
  deviceId: string = "";
  ngOnInit() {}

  linkDevice() {
    this.deviceService.linkDevice(this.deviceId).subscribe(
      (device) => this.router.navigate(['/device/thanks']),
      err => console.log(err)
    );
  }
}
