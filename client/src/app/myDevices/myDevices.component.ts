import { Component, OnInit } from "@angular/core";
import { DeviceService } from "../services/Device.service";

@Component({
  selector: "app-myDevices",
  templateUrl: "./myDevices.component.html",
  styleUrls: ["./myDevices.component.css"]
})
export class MyDevicesComponent implements OnInit {
  devices: Array<Object>;
  constructor(public deviceService: DeviceService) {}

  ngOnInit() {
   this.getDevicesUser()
  }

  deleteDevice(id) {
    this.deviceService.deleteDevice(id).subscribe(() => {
     this.getDevicesUser()
    });
  }

  getDevicesUser(){
    this.deviceService.getDevicesUser().subscribe(devices => {
      return (this.devices = devices);
    });
  }
}
