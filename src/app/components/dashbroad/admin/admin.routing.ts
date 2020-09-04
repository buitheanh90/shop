import { Routes } from "@angular/router";

import { HomeComponent } from "./home/home.component";
import { ProductsComponent } from "./products/products.component";

export const AdminRoutes: Routes = [
  { path: "", component: HomeComponent },
  { path: "products", component: ProductsComponent },
];
