import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { AdminRoutes } from "./admin.routing";
import { HomeComponent } from "./home/home.component";
import { ProductsComponent } from './products/products.component';

@NgModule({
  declarations: [HomeComponent, ProductsComponent],
  exports: [HomeComponent],
  imports: [CommonModule, RouterModule.forChild(AdminRoutes)],
  providers: [],
  bootstrap: [],
})
export class AdminModule {}
