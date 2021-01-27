import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { UsuarioModel } from "../models/usuario.model";

import { map } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  private url = "https://identitytoolkit.googleapis.com/v1/accounts";
  private apikey = "AIzaSyBHs9VH-KfFB4OM5USnuZEBfkq4NfPPbnQ";

  userToken: string;

  // CREAR NUEVO USUARIO
  // https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=[API_KEY]

  // LOGIN
  // https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=[API_KEY]

  constructor(private http: HttpClient) {
    this.readToken();
  }
  logout() {}

  login(usuario: UsuarioModel) {
    const authData = {
      ...usuario,
      returnSecureToken: true,
    };

    return this.http
      .post(`${this.url}:signInWithPassword?key=${this.apikey}`, authData)
      .pipe(
        map((resp) => {
          this.saveToken(resp["idToken"]);
          return resp;
        })
      );
  }

  newUser(usuario: UsuarioModel) {
    const authData = {
      ...usuario,
      returnSecureToken: true,
    };

    return this.http
      .post(`${this.url}:signUp?key=${this.apikey}`, authData)
      .pipe(
        map((resp) => {
          this.saveToken(resp["idToken"]);
          return resp;
        })
      );
  }

  private saveToken(idToken: string) {
    this.userToken = idToken;
    localStorage.setItem("token", idToken);
  }

  readToken() {
    if (localStorage.getItem("token")) {
      this.userToken = localStorage.getItem("token");
    } else {
      this.userToken = "";
    }
    return this.userToken;
  }
}
