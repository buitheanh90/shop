import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomepageComponent } from "./components/pages/homepage/homepage.component";
import { ProductsComponent } from "./components/pages/products/products.component";

const routes: Routes = [
  {
    path: "",
    component: HomepageComponent,
  },
  {
    path: "products",
    component: ProductsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
