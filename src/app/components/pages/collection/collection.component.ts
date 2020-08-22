import { Component, OnInit } from "@angular/core";
import { CategoriesService } from "../../../services/categories.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-collection",
  templateUrl: "./collection.component.html",
  styleUrls: ["./collection.component.scss"],
})
export class CollectionComponent implements OnInit {
  products: any;
  name: String;

  constructor(
    private categoriesService: CategoriesService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.getProductByIdCategory();
  }

  //get product by ID
  getProductByIdCategory() {
    this.activatedRoute.params.subscribe((data) => {
      const id = data.id;
      this.categoriesService.getCategoriesById(id).subscribe((product) => {
        this.products = product;
      });
    });
  }
}
