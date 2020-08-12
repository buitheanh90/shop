import { Component, OnInit } from "@angular/core";
import { CartService } from "../../../services/cart.service";
import { Cart } from "../../../model/cart.class";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
})
export class HeaderComponent implements OnInit {
  cart: any = {};

  constructor(private cartService: CartService) {}

  ngOnInit() {
    this.getCart();
  }

  //get cart by sessionId
  getCart() {
    this.cartService.getCart().subscribe((cart) => {
      this.cart = cart;
      console.log(cart);
    });
  }
}
