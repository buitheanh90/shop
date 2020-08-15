import { Component, OnInit } from "@angular/core";
import { CartService } from "../../../services/cart.service";
import { SubjectService } from "../../../services/subject.service";
import { Product } from "../../../model/product.class";
import { Cart } from "../../../model/cart.class";

//signup
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators,
} from "@angular/forms";
import { User } from "../../../model/user.class";
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";
import { AuthService } from "../../../services/auth.service";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
})
export class HeaderComponent implements OnInit {
  cartItems: any = {};
  user: User[];
  registered = false;
  submitted = false;
  userForm: FormGroup;

  constructor(
    private subjectService: SubjectService,
    private cartService: CartService,
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private router: Router,
    private auth: AuthService
  ) {}

  ngOnInit() {
    this.handleSubscription();
    this.loadCartItems();
    this.checkInput();
  }

  handleSubscription() {
    this.subjectService.getMsg().subscribe((product: Product) => {
      this.loadCartItems();
    });
  }

  loadCartItems() {
    this.cartService.getCart().subscribe((items: Cart[]) => {
      console.log(items);
      this.cartItems = items;
    });
  }

  //remove item from cart
  removeItem(productId) {
    this.cartService.removeCart(productId).subscribe((item) => {
      this.subjectService.sendMsg(item);
    });
  }

  //update cart
  updateCat(productId, qty) {
    this.cartService.updateCart(productId, qty).subscribe((item) => {
      this.subjectService.sendMsg(item);
    });
  }

  //check input value form
  checkInput() {
    this.userForm = this.formBuilder.group({
      email: [
        "",
        [Validators.required, Validators.email, Validators.maxLength(75)],
      ],
      password: [
        "",
        [
          Validators.required,
          Validators.minLength(5),
          // Validators.pattern(
          // 	"^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$"
          // ),
        ],
      ],
      cpassword: ["", [Validators.required]],
    });
  }

  //validate sign up

  invalidEmail() {
    return this.submitted && this.userForm.controls.email.errors != null;
  }

  invalidPassword() {
    return this.submitted && this.userForm.controls.password.errors != null;
  }

  invalidCPassword() {
    return (
      this.submitted &&
      this.userForm.controls.cpassword.value !=
        this.userForm.controls.password.value
    );
  }

  onSubmit() {
    const email = this.userForm.controls.email.value;
    const password = this.userForm.controls.password.value;

    this.submitted = true;
    if (this.userForm.invalid == true) {
      return;
    } else {
      this.auth.onSubmit(email, password).subscribe((data) => {
        this.user = data as any;
        console.log(data);
      });
      this.registered = true;
    }
  }
}
