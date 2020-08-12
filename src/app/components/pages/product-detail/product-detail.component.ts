import { Component, OnInit } from "@angular/core";
import { ProductsService } from "../../../services/products.service";
import { Product } from "../../../model/product.class";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-product-detail",
  templateUrl: "./product-detail.component.html",
  styleUrls: ["./product-detail.component.scss"],
})
export class ProductDetailComponent implements OnInit {
  product: any;
  quantity: number = 1;

  constructor(
    private producstService: ProductsService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.getProductById();
  }
  //get product by ID
  getProductById() {
    const id = this.activatedRoute.snapshot.params["id"];
    this.producstService.getProductById(id).subscribe((product) => {
      this.product = product;
    });
  }
  //quantity product
  minus() {
    if (this.quantity > 1) {
      this.quantity = this.quantity - 1;
    }
  }
  push() {
    this.quantity = this.quantity + 1;
  }
}
