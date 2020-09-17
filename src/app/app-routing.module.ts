import { NgModule, Component } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AdminComponent } from "./components/admin/admin.component";
import { MilcahComponent } from "./components/milcah/milcah.component";
import { LoginComponent } from "./components/admin/pages/login/login.component";
import { AuthGuard } from "./services/guard/auth.guard";

const routes: Routes = [
  {
    path: "",
    component: MilcahComponent,
    children: [
      {
        path: "",
        loadChildren: () =>
          import("./components/milcah/milcah.module").then(
            (m) => m.MilcahModule
          ),
      },
    ],
  },
  {
    path: "admin",
    component: AdminComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: "",
        loadChildren: () =>
          import("./components/admin/admin.module").then((m) => m.AdminModule),
      },
    ],
  },
  {
    path: "login",
    component: LoginComponent,
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { scrollPositionRestoration: "enabled" }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
