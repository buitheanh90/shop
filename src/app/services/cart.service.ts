import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Cart } from "../model/cart.class";
import { Observable } from "rxjs";

const httpOptions = {
  headers: new HttpHeaders().set("Content-Type", "x-www-form-urlencoded"),
};

@Injectable({
  providedIn: "root",
})
export class CartService {
  API: string = "/api/cart";

  constructor(private http: HttpClient) {}

  getCart() {
    return this.http.get(this.API, httpOptions);
  }
}
