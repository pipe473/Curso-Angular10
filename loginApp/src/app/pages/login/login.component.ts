import { Component, OnInit } from "@angular/core";
import { Router } from '@angular/router';
import { NgForm } from "@angular/forms";

import { UsuarioModel } from "src/app/models/usuario.model";
import { AuthService } from "src/app/services/auth.service";

import Swal from "sweetalert2/dist/sweetalert2.all.js";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent implements OnInit {
  usuario: UsuarioModel = new UsuarioModel();

  constructor(private auth: AuthService,
              private router: Router ) {}

  ngOnInit() {}

  login(form: NgForm) {
    if (form.invalid) {
      return;
    }

    Swal.fire({
      allowOutsideClick: false,
      icon: "info",
      text: "Espere por favor...",
    });

    Swal.showLoading();

    this.auth.login(this.usuario).subscribe(
      (res) => {
        console.log(res);
        Swal.close();
        this.router.navigateByUrl('/home');
      },
      (err) => {
        console.log(err.error.error.message);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: err.error.error.message,
        });
      }
    );
  }
}
