import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { User } from "../model/user.class";
import { Observable } from "rxjs";

const options = { responseType: "text" as "json" };

@Injectable({
  providedIn: "root",
})
export class AuthService {
  API_LOGIN: string = "/api/users/login";
  API_REGISTER: string = "/api/users/signup";

  constructor(private http: HttpClient) {}

  onLogin(email, password): Observable<User[]> {
    return this.http.post<User[]>(this.API_LOGIN, { email, password }, options);
  }

  onRegister(email, password) {
    return this.http.post<User>(
      this.API_REGISTER,
      {
        email,
        password,
      },
      options
    );
  }
}
