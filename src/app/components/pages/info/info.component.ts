import { Component, OnInit } from "@angular/core";
import { AuthService } from "../../../services/auth.service";
import { User } from "../../../model/user.class";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-info",
  templateUrl: "./info.component.html",
  styleUrls: ["./info.component.scss"],
})
export class InfoComponent implements OnInit {
  user: any;
  member: any;

  constructor(
    private authService: AuthService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.checkLogin();
    this.getInfoUser();
  }

  checkLogin() {
    if (localStorage.getItem("user")) {
      this.member = JSON.parse(localStorage.getItem("user"));
    }
  }

  getInfoUser() {
    this.activatedRoute.params.subscribe((data) => {
      const id = data.id;
      this.authService.onInfoUser(id).subscribe((info) => {
        this.user = JSON.parse(info as any);
      });
    });
  }

  onChange(data) {
    console.log(data);
  }
}
