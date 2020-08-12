import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Product } from "../model/product.class";
import { Cart } from "../model/cart.class";
import { Observable, from } from "rxjs";

const httpOptions = {
  headers: new HttpHeaders().set("Content-Type", "x-www-form-urlencoded"),
};

@Injectable({
  providedIn: "root",
})
export class ProductsService {
  API: string = "/api/products";
  API_CART: String = "/api/cart";

  constructor(private http: HttpClient) {}

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.API, httpOptions);
  }

  getProductById(_id: String): Observable<Product[]> {
    const url = `${this.API}/${_id}`;
    return this.http.get<Product[]>(url, httpOptions);
  }

  //add to cart
  addToCart(productId: String): Observable<Cart[]> {
    const url = `${this.API_CART}/${productId}`;
    return this.http.post<Cart[]>(url, httpOptions);
  }
}
