import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NgxPaginationModule } from "ngx-pagination";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppRoutingModule } from "./app-routing.module";
import { AdminModule } from "./components/dashbroad/admin/admin.module";

import { AppComponent } from "./app.component";
import { HeaderComponent } from "./components/layout/header/header.component";
import { FooterComponent } from "./components/layout/footer/footer.component";
import { HomepageComponent } from "./components/pages/homepage/homepage.component";
import { ProductsComponent } from "./components/pages/products/products.component";
import { ProductDetailComponent } from "./components/pages/product-detail/product-detail.component";
import { CartComponent } from "./components/pages/cart/cart.component";
import { ProductItemComponent } from "./components/pages/products/product-item/product-item.component";
import { CollectionComponent } from "./components/pages/collection/collection.component";
import { CheckoutComponent } from "./components/pages/checkout/checkout.component";
import { ForgotComponent } from "./components/pages/forgot/forgot.component";
import { InfoComponent } from "./components/pages/info/info.component";
import { TransactionComponent } from "./components/pages/checkout/transaction/transaction.component";
import { CheckoutReceivedComponent } from "./components/pages/checkout/checkout-received/checkout-received.component";
import { ContactComponent } from "./components/pages/contact/contact.component";
import { ResetpwComponent } from "./components/pages/resetpw/resetpw.component";
import { AdminComponent } from "./components/dashbroad/admin/admin.component";

//service
import { ProductsService } from "./services/products.service";
import { CategoriesService } from "./services/categories.service";
import { CartService } from "./services/cart.service";
import { SubjectService } from "./services/subject.service";
import { AuthService } from "./services/auth.service";
import { AuthGuard } from "./services/guard/auth.guard";
import { JsonService } from "./services/json.service";
import { TransactionService } from "./services/transaction.service";
import { CustomvalidationService } from "./services/customvalidation.service";

//pipes
import { FilterPipe } from "./pipes/filter.pipe";
import { FormDirective } from "./directive/form.directive";
import { DatePipe } from "@angular/common";

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
    FormDirective,
    CollectionComponent,
    CheckoutComponent,
    ForgotComponent,
    InfoComponent,
    CheckoutReceivedComponent,
    TransactionComponent,
    ContactComponent,
    ResetpwComponent,
    AdminComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxPaginationModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    AdminModule,
  ],
  providers: [
    ProductsService,
    CategoriesService,
    CartService,
    SubjectService,
    AuthService,
    AuthGuard,
    JsonService,
    TransactionService,
    DatePipe,
    CustomvalidationService,
  ],
  bootstrap: [AppComponent],
  exports: [FormDirective],
})
export class AppModule {}
