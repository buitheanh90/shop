import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { User } from "../model/user.class";
import { Observable } from "rxjs";

const options = { responseType: "text" as "json" };

@Injectable({
  providedIn: "root",
})
export class AuthService {
  API: string = "/api/users";

  constructor(private http: HttpClient) {}

  onLogin(email, password): Observable<User[]> {
    const URL_LOGIN = this.API + "/login";
    return this.http.post<User[]>(URL_LOGIN, { email, password }, options);
  }

  onRegister(email, password) {
    const URL_REGISTER = this.API + "/signup";
    return this.http.post<User>(
      URL_REGISTER,
      {
        email,
        password,
      },
      options
    );
  }

  onInfoUser(userId: String) {
    const URL_INFO = this.API + `/${userId}`;
    return this.http.get(URL_INFO, options);
  }
}
