import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import * as $ from "jquery";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

import { HeaderComponent } from "./components/layout/header/header.component";
import { FooterComponent } from "./components/layout/footer/footer.component";
import { HomepageComponent } from "./components/pages/homepage/homepage.component";
import { ProductsComponent } from "./components/pages/products/products.component";

//service
import { ProductsService } from "./services/products.service";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomepageComponent,
    ProductsComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [ProductsService],
  bootstrap: [AppComponent],
})
export class AppModule {}
