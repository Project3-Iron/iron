import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { DeviceService } from "../services/Device.service";
@Component({
  selector: "app-Edit-device",
  templateUrl: "./Edit-device.component.html",
  styleUrls: ["./Edit-device.component.css"]
})
export class EditDeviceComponent implements OnInit {
  selecteDdeviceId: String;
  deviceId: String;
  environment: String;
  constructor(
    public activatedRoute: ActivatedRoute,
    public deviceService: DeviceService,
    public router: Router
  ) {}

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.selecteDdeviceId = params.id;

      this.deviceService
        .getInfoDevice(this.selecteDdeviceId)
        .subscribe(device => {
          this.deviceId = device.deviceId;
          this.environment = device.environment;
        });
    });
  }

  editDevice() {
    let editedDevice = {
      deviceId: this.deviceId,
      environment: this.environment
    };

    this.deviceService
      .editDevice(this.selecteDdeviceId, editedDevice)
      .subscribe(e => {
        this.router.navigate([""]);
      });
  }
}
