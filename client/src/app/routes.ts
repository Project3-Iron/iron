import { Routes } from "@angular/router";
import { HomeComponent } from "./HomeComponent/HomeComponent.component";
import { AuthSignupComponent } from "./AuthSignup/AuthSignup.component";
import { AuthLoginComponent } from "./AuthLogin/AuthLogin.component";
import { LinkDeviceComponent } from "./OnBoarding/LinkDevice/LinkDevice.component";
import { ProductComponent } from "./Product/Product.component";
import { RecipesComponent } from "./Recipes/Recipes.component";
import { RecipeDetailComponent } from "./Recipe-detail/Recipe-detail.component";
import { DataChartComponent } from "./Data-Chart/Data-Chart.component";

export const routes: Routes = [
  { path: "", redirectTo: "home", pathMatch: "full" },
  { path: "home", component: HomeComponent },
  { path: "signup", component: AuthSignupComponent },
  { path: "login", component: AuthLoginComponent },
  { path: "device/config", component: LinkDeviceComponent },
  { path: "products", component: ProductComponent },
  { path: "recipes", component: RecipesComponent },
  { path: "recipes/detail", component: RecipeDetailComponent },
  { path: "historical", component: DataChartComponent }
];
