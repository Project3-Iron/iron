import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { routes } from "./routes";
import { RouterModule } from "@angular/router";
import { ClarityModule } from "@clr/angular";

import { AppComponent } from "./app.component";
import { HomeComponent } from "./HomeComponent/HomeComponent.component";
import { AuthSignupComponent } from "./AuthSignup/AuthSignup.component";
import { AuthLoginComponent } from "./AuthLogin/AuthLogin.component";
import { SessionService } from "./services/Session.service";
import { ProductComponent } from "./Product/Product.component";
import { ProductService } from "./services/Product.service";
import { ProductCardComponent } from "./Product-card/Product-card.component";
import { InitialWelcomeComponent } from "./OnBoarding/InitialWelcome/InitialWelcome.component";
import { DeviceService } from "./services/Device.service";
import { LinkDeviceComponent } from "./OnBoarding/LinkDevice/LinkDevice.component";
import { MyDevicesComponent } from "./myDevices/myDevices.component";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AuthSignupComponent,
    ProductComponent,
    AuthLoginComponent,
    InitialWelcomeComponent,
    LinkDeviceComponent,
    MyDevicesComponent,
    InitialWelcomeComponent,
    LinkDeviceComponent,
    ProductCardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes),
    ClarityModule
  ],
  providers: [SessionService, DeviceService, ProductService],
  bootstrap: [AppComponent]
})
export class AppModule {}
