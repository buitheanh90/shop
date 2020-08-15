import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Product } from "../model/product.class";
import { Observable, from } from "rxjs";

const httpOptions = {
  headers: new HttpHeaders().set("Content-Type", "x-www-form-urlencoded"),
};

@Injectable({
  providedIn: "root",
})
export class ProductsService {
  API: string = "/api/products";
  API_ADD_CART: String = "/api/cart/add";
  API_DEL_CART: String = "/api/cart/delete";
  API_UPDATE_CART: String = "/api/cart/update";

  constructor(private http: HttpClient) {}

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.API, httpOptions);
  }

  getProductById(_id: String): Observable<Product[]> {
    const url = `${this.API}/${_id}`;
    return this.http.get<Product[]>(url, httpOptions);
  }
}
