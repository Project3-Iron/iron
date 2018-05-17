import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";
import { Observable } from "rxjs/Rx";
import { SessionService } from "./Session.service";

@Injectable()
export class SecurityService implements CanActivate {
  constructor(public router: Router, public sessionService: SessionService) {}
  canActivate(): Observable<boolean> | Promise<boolean> | boolean {
    // console.log("Checking observable");
    if (this.sessionService.user) {
      return true;
    } else {
      this.router.navigate(["/"]);
    }
    return false;
  }
}
