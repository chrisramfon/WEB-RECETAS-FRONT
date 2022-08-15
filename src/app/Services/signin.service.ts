import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SigninService {

  private signinURL = "http://192.168.90.139:3000/signin"

  constructor(private http: HttpClient) { }

  postSignin(Envio){
    return this.http.post<any>(this.signinURL, Envio)
  }
}


