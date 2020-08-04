import { Component, OnInit } from "@angular/core";
import { ProductsService } from "../../../services/products.service";
import { Product } from "../../../model/product.class";

@Component({
  selector: "app-homepage",
  templateUrl: "./homepage.component.html",
  styleUrls: ["./homepage.component.scss"],
})
export class HomepageComponent implements OnInit {
  product: Product[];

  constructor(private producstService: ProductsService) {}

  ngOnInit() {
    this.producstService.getProducts().subscribe((data) => {
      this.product = data;
    });
  }
}
