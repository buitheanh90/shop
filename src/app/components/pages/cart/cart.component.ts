import { Component, OnInit } from "@angular/core";
import { ProductsService } from "../../../services/products.service";
import { ActivatedRoute } from "@angular/router";
import { Router } from "@angular/router";

@Component({
  selector: "app-cart",
  templateUrl: "./cart.component.html",
  styleUrls: ["./cart.component.scss"],
})
export class CartComponent implements OnInit {
  constructor(
    private producstService: ProductsService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.addToCart();
  }
  addToCart() {
    const productId = this.activatedRoute.snapshot.params["productId"];
    this.producstService.addToCart(productId).subscribe((cart) => {
      console.log(cart);
      this.router.navigate(["/products"]);
    });
  }
}
