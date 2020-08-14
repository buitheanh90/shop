import { Component, OnInit } from "@angular/core";
import { CartService } from "../../../services/cart.service";
import { SubjectService } from "../../../services/subject.service";
import { ProductsService } from "../../../services/products.service";
import { Product } from "../../../model/product.class";
import { Cart } from "../../../model/cart.class";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
})
export class HeaderComponent implements OnInit {
  cartItems: any = {};
  changeText: boolean;

  constructor(
    private subjectService: SubjectService,
    private cartService: CartService,
    private productsService: ProductsService
  ) {}

  ngOnInit() {
    this.handleSubscription();
    this.loadCartItems();
  }

  handleSubscription() {
    this.subjectService.getMsg().subscribe((product: Product) => {
      this.loadCartItems();
    });
  }

  loadCartItems() {
    this.cartService.getCart().subscribe((items: Cart[]) => {
      console.log(items);
      this.cartItems = items;
    });
  }

  //remove item from cart
  removeItem(productId) {
    this.productsService.removeCart(productId).subscribe((item) => {
      this.subjectService.sendMsg(item);
    });
  }

  //update
  updateCat(productId, qty) {
    this.productsService.updateCart(productId, qty).subscribe((item) => {
      this.subjectService.sendMsg(item);
    });
  }
}
