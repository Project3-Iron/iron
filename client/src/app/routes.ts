import { Routes } from "@angular/router";
import { HomeComponent } from "./HomeComponent/HomeComponent.component";
import { AuthSignupComponent } from "./AuthSignup/AuthSignup.component";
import { AuthLoginComponent } from "./AuthLogin/AuthLogin.component";
import { LinkDeviceComponent } from "./OnBoarding/LinkDevice/LinkDevice.component";
import { ProductComponent } from "./Product/Product.component";
import { RecipesComponent } from "./Recipes/Recipes.component";
import { RecipeDetailComponent } from "./Recipe-detail/Recipe-detail.component";
import { DataChartComponent } from "./Data-Chart/Data-Chart.component";
import { ProductsChartComponent } from "./Products-Chart/Products-Chart.component";
import { EditDeviceComponent } from "./Edit-device/Edit-device.component";
import { SecurityService } from "./services/Security.service";

export const routes: Routes = [
  { path: "", redirectTo: "home", pathMatch: "full" },
  { path: "home", component: HomeComponent },
  { path: "signup", component: AuthSignupComponent },
  { path: "login", component: AuthLoginComponent },
  {
    path: "device/config",
    component: LinkDeviceComponent,
    canActivate: [SecurityService]
  },
  {
    path: "device/:id",
    component: EditDeviceComponent,
    canActivate: [SecurityService]
  },
  {
    path: "products",
    component: ProductComponent,
    canActivate: [SecurityService]
  },
  {
    path: "recipes",
    component: RecipesComponent,
    canActivate: [SecurityService]
  },
  {
    path: "recipes/detail",
    component: RecipeDetailComponent,
    canActivate: [SecurityService]
  },
  {
    path: "historical",
    component: DataChartComponent,
    canActivate: [SecurityService]
  },
  {
    path: "historical/detail",
    component: ProductsChartComponent,
    canActivate: [SecurityService]
  }
];
