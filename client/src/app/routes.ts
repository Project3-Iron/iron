import { Routes } from "@angular/router";
import { HomeComponent } from "./HomeComponent/HomeComponent.component";
import { AuthSignupComponent } from "./AuthSignup/AuthSignup.component";
import { AuthLoginComponent } from "./AuthLogin/AuthLogin.component";
import { LinkDeviceComponent } from "./OnBoarding/LinkDevice/LinkDevice.component";
import { LinkOkComponent } from "./OnBoarding/LinkOk/LinkOk.component";
import { ProductComponent } from "./Product/Product.component";

export const routes: Routes = [
  { path: "", redirectTo: "home", pathMatch: "full" },
  { path: "home", component: HomeComponent },
  { path: "signup", component: AuthSignupComponent },
  { path: "login", component: AuthLoginComponent },
  { path: "device/config", component: LinkDeviceComponent },
  { path: "device/thanks", component: LinkOkComponent },
  { path: "products", component: ProductComponent }
];
