import { Routes } from '@angular/router';
import { HomeComponent } from './HomeComponent/HomeComponent.component';
import { AuthSignupComponent } from './AuthSignup/AuthSignup.component';
import { AuthLoginComponent } from './AuthLogin/AuthLogin.component';
import { ProductComponent } from './Product/Product.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent},
  { path: 'signup', component: AuthSignupComponent},
  { path: 'login', component: AuthLoginComponent},
  { path: 'products', component: ProductComponent}
];
