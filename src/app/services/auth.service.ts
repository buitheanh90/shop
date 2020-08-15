import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { User } from "../model/user.class";

const options = { responseType: "text" as "json" };

@Injectable({
  providedIn: "root",
})
export class AuthService {
  API: string = "/api/users/signup";

  constructor(private http: HttpClient) {}

  onSubmit(email, password) {
    return this.http.post<User>(
      this.API,
      {
        email,
        password,
      },
      options
    );
  }
}
