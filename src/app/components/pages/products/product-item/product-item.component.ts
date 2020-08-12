import { Component, OnInit, Input } from "@angular/core";
import { Product } from "../../../../model/product.class";

@Component({
  selector: "app-product-item",
  templateUrl: "./product-item.component.html",
  styleUrls: ["./product-item.component.scss"],
})
export class ProductItemComponent implements OnInit {
  @Input() productItem: Product;

  constructor() {}

  ngOnInit() {}
}
