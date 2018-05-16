import { Component, OnInit, Input } from "@angular/core";
import { Router } from "@angular/router";
import { SessionService } from "../services/Session.service";

@Component({
  selector: "app-Nav",
  templateUrl: "./Nav.component.html",
  styleUrls: ["./Nav.component.css"]
})
export class NavComponent implements OnInit {
  constructor(public router: Router, public sessionService: SessionService) {}

  ngOnInit() {}
  logout() {
    this.sessionService.logout().subscribe(() => {
      this.router.navigate([""]);
    });
  }
}
