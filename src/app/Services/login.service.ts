import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private loginURL = "http://192.168.100.128:3000/login"

  constructor(private http: HttpClient) { }

  postLogin(Usuario){
    return this.http.post<any>(this.loginURL, Usuario)
  }

}
