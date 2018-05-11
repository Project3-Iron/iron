import { Routes } from "@angular/router";
import { HomeComponent } from "./HomeComponent/HomeComponent.component";
import { AuthSignupComponent } from "./AuthSignup/AuthSignup.component";
import { AuthLoginComponent } from "./AuthLogin/AuthLogin.component";
import { LinkDeviceComponent } from "./OnBoarding/LinkDevice/LinkDevice.component";
import { ProductComponent } from "./Product/Product.component";
import { MyDevicesComponent } from "./myDevices/myDevices.component";
import { RecipesComponent } from "./Recipes/Recipes.component";

export const routes: Routes = [
  { path: "", redirectTo: "home", pathMatch: "full" },
  { path: "home", component: HomeComponent },
  { path: "signup", component: AuthSignupComponent },
  { path: "login", component: AuthLoginComponent },
  { path: "device/config", component: LinkDeviceComponent },
  { path: "device/myDevices", component: MyDevicesComponent },
  { path: "products", component: ProductComponent },
  { path: "recipes", component: RecipesComponent }
];
