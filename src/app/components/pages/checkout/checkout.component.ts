import { Component, OnInit } from "@angular/core";
import { SubjectService } from "../../../services/subject.service";
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators,
} from "@angular/forms";

@Component({
  selector: "app-checkout",
  templateUrl: "./checkout.component.html",
  styleUrls: ["./checkout.component.scss"],
})
export class CheckoutComponent implements OnInit {
  member: String;

  constructor(
    private subjectService: SubjectService,
    private formBuilder: FormBuilder
  ) {}

  userLogin: FormGroup;

  ngOnInit() {
    this.handleSubcriptionUser();
    this.checkLogin();
    this.checkLoginInput();
  }

  handleSubcriptionUser() {
    this.subjectService.getMsg().subscribe((user: any) => {
      this.checkLogin();
    });
  }

  checkLogin() {
    if (localStorage.getItem("user")) {
      this.member = localStorage.getItem("user");
    }
  }

  checkLoginInput() {
    this.userLogin = this.formBuilder.group({
      email: ["", Validators.required],
      password: ["", Validators.required],
    });
  }

  onLogin() {
    console.log("ok");
  }
}
