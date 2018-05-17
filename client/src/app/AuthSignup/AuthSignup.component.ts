import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { SessionService } from "../services/Session.service";

@Component({
  selector: "app-AuthSignup",
  templateUrl: "./AuthSignup.component.html",
  styleUrls: ["./AuthSignup.component.css"]
})
export class AuthSignupComponent implements OnInit {
  formInfo = {
    username: "",
    email: "",
    password: "",
    confirmPassword: ""
  };
  error = "";

  constructor(public sessionService: SessionService, public router: Router) { }

  ngOnInit() { }

  signup() {
    if (this.formInfo.password === this.formInfo.confirmPassword) {
      this.sessionService
      .signup(this.formInfo)
      .subscribe(
        () => this.router.navigate(['/home']),
        (err) => { return this.error = err }
      );
    } else {
      this.error = 'Password do not match';
    }
  }
}
