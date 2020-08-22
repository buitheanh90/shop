import { NgModule, Component } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomepageComponent } from "./components/pages/homepage/homepage.component";
import { ProductsComponent } from "./components/pages/products/products.component";
import { ProductDetailComponent } from "./components/pages/product-detail/product-detail.component";
import { CartComponent } from "./components/pages/cart/cart.component";
import { CollectionComponent } from "./components/pages/collection/collection.component";
import { CheckoutComponent } from "./components/pages/checkout/checkout.component";
import { ForgotComponent } from "./components/pages/forgot/forgot.component";
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
    component: CheckoutComponent,
  },
  {
    path: "forgotpw",
    component: ForgotComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
