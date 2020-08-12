import { Component, OnInit } from "@angular/core";
import { ProductsService } from "../../../services/products.service";
import { CategoriesService } from "../../../services/categories.service";
import { Product } from "../../../model/product.class";
import { Categories } from "../../../model/categories.class";

@Component({
  selector: "app-products",
  templateUrl: "./products.component.html",
  styleUrls: ["./products.component.scss"],
})
export class ProductsComponent implements OnInit {
  categories: Categories[];
  products: Product[];

  //panigation
  itemsPerPage: number;
  currentPage: number;
  totalItems: number;

  //search
  name: String;
  categorySelected: String;

  constructor(
    private producstService: ProductsService,
    private categoriesService: CategoriesService
  ) {}

  ngOnInit() {
    this.getCategories();
    this.getAllProducts();
  }

  // get categories
  getCategories() {
    this.categoriesService.getCategories().subscribe((categories) => {
      this.categories = categories;
    });
  }

  //get all products
  getAllProducts() {
    this.producstService.getProducts().subscribe((product) => {
      this.products = product;
      this.itemsPerPage = 12;
      this.currentPage = 1;
      this.totalItems = product.length;
    });
  }

  //panigation control
  pageChanged(event) {
    this.currentPage = event;
  }
}
