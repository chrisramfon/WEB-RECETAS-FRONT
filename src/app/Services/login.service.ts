import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private loginURL = "http://127.0.0.1:3000/login"

  constructor(private http: HttpClient) { }

  postLogin(Usuario){
    return this.http.post<any>(this.loginURL, Usuario)
  }

}
