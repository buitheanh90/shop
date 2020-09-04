import { NgModule, Component } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomepageComponent } from "./components/pages/homepage/homepage.component";
import { ProductsComponent } from "./components/pages/products/products.component";
import { ProductDetailComponent } from "./components/pages/product-detail/product-detail.component";
import { CartComponent } from "./components/pages/cart/cart.component";
import { CollectionComponent } from "./components/pages/collection/collection.component";
import { CheckoutComponent } from "./components/pages/checkout/checkout.component";
import { CheckoutReceivedComponent } from "./components/pages/checkout/checkout-received/checkout-received.component";
import { ForgotComponent } from "./components/pages/forgot/forgot.component";
import { InfoComponent } from "./components/pages/info/info.component";
import { TransactionComponent } from "./components/pages/checkout/transaction/transaction.component";
import { ContactComponent } from "./components/pages/contact/contact.component";
import { ResetpwComponent } from "./components/pages/resetpw/resetpw.component";
import { AdminComponent } from "./components/dashbroad/admin/admin.component";
import { AuthGuard } from "./services/guard/auth.guard";

const routes: Routes = [
  {
    path: "",
    component: HomepageComponent,
  },
  {
    path: "products",
    children: [
      {
        path: ":id",
        component: ProductDetailComponent,
      },
      {
        path: "",
        component: ProductsComponent,
      },
    ],
  },
  {
    path: "collection/:id",
    component: CollectionComponent,
  },
  {
    path: "cart",
    component: CartComponent,
  },
  {
    path: "checkout",
    children: [
      {
        path: "",
        component: CheckoutComponent,
      },
      {
        path: "checkout-received/:id",
        component: CheckoutReceivedComponent,
      },
      {
        path: "transaction",
        component: TransactionComponent,
      },
    ],
  },
  {
    path: "my-account/:id",
    component: InfoComponent,
  },
  {
    path: "forgotpw",
    component: ForgotComponent,
  },
  {
    path: "resetpw/:token",
    component: ResetpwComponent,
  },
  {
    path: "contact",
    component: ContactComponent,
  },
  {
    path: "admin",
    component: AdminComponent,
    children: [
      {
        path: "",
        loadChildren: "./components/dashbroad/admin/admin.module#AdminModule",
      },
    ],
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { scrollPositionRestoration: "enabled" }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
