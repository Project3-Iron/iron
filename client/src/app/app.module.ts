import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { routes } from "./routes";
import { RouterModule } from "@angular/router";
import { ClarityModule } from "@clr/angular";
import { RecipesService } from "./services/Recipes.service";
import { RecipesComponent } from "./Recipes/Recipes.component";
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
import { WindowService } from "./services/Window.service";
import { RecipeDetailComponent } from "./Recipe-detail/Recipe-detail.component";
import { NavComponent } from "./Nav/Nav.component";
import { DataChartComponent } from "./Data-Chart/Data-Chart.component";
import { ChartsModule } from "ng2-charts";
import { HistoricalService } from "./services/Historical.service";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AuthSignupComponent,
    ProductComponent,
    AuthLoginComponent,
    InitialWelcomeComponent,
    LinkDeviceComponent,
    InitialWelcomeComponent,
    LinkDeviceComponent,
    ProductCardComponent,
    RecipesComponent,
    RecipeDetailComponent,
    NavComponent,
    DataChartComponent
  ],

  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes),
    ClarityModule,
    ChartsModule
  ],
  providers: [
    SessionService,
    DeviceService,
    ProductService,
    RecipesService,
    WindowService,
    HistoricalService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
