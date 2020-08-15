import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NgxPaginationModule } from "ngx-pagination";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppRoutingModule } from "./app-routing.module";

import { AppComponent } from "./app.component";
import { HeaderComponent } from "./components/layout/header/header.component";
import { FooterComponent } from "./components/layout/footer/footer.component";
import { HomepageComponent } from "./components/pages/homepage/homepage.component";
import { ProductsComponent } from "./components/pages/products/products.component";
import { ProductDetailComponent } from "./components/pages/product-detail/product-detail.component";

//service
import { ProductsService } from "./services/products.service";
import { CategoriesService } from "./services/categories.service";
import { CartService } from "./services/cart.service";
import { SubjectService } from "./services/subject.service";
import { AuthService } from "./services/auth.service";

//pipes
import { FilterPipe } from "./pipes/filter.pipe";
import { CartComponent } from "./components/pages/cart/cart.component";
import { ProductItemComponent } from "./components/pages/products/product-item/product-item.component";
import { CartItemComponent } from "./components/pages/cart/cart-item/cart-item.component";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomepageComponent,
    ProductsComponent,
    FilterPipe,
    ProductDetailComponent,
    CartComponent,
    ProductItemComponent,
    CartItemComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxPaginationModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
    ProductsService,
    CategoriesService,
    CartService,
    SubjectService,
    AuthService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
