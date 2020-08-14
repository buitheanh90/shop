import { Component, OnInit, Input } from "@angular/core";
import { Product } from "../../../../model/product.class";
import { ProductsService } from "../../../../services/products.service";
import { SubjectService } from "../../../../services/subject.service";

@Component({
  selector: "app-product-item",
  templateUrl: "./product-item.component.html",
  styleUrls: ["./product-item.component.scss"],
})
export class ProductItemComponent implements OnInit {
  @Input() productItem: Product;

  constructor(
    private producstService: ProductsService,
    private subjectService: SubjectService
  ) {}

  ngOnInit() {}

  addToCart() {
    this.producstService.addToCart(this.productItem._id).subscribe((cart) => {
      this.subjectService.sendMsg(cart);
    });
  }
}
