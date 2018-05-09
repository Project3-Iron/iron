import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routes } from './routes';
import { RouterModule } from '@angular/router';
import { ClarityModule } from '@clr/angular';

import { AppComponent } from './app.component';
import { HomeComponent } from './HomeComponent/HomeComponent.component';
import { AuthSignupComponent } from './AuthSignup/AuthSignup.component';
import { AuthLoginComponent } from './AuthLogin/AuthLogin.component';
import { SessionService } from './services/Session.service';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AuthSignupComponent,
    AuthLoginComponent
],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes),
    ClarityModule
  ],
  providers: [SessionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
