import { EventEmitter, Injectable, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private url_login="http://localhost:3000/login"

  @Output() change: EventEmitter<boolean> = new EventEmitter();
  @Output() change1: EventEmitter<String> = new EventEmitter();
  @Output() change3: EventEmitter<String> = new EventEmitter();

  constructor(private http:HttpClient) { }

  login(Usuario){
    return this.http.post<any>(this.url_login,Usuario);
  }

  eslogueado(){
    this.change.emit(!!localStorage.getItem('token'))
    return !!localStorage.getItem('token')
  }

  
}
