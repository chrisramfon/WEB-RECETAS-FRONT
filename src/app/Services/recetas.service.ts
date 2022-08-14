import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RecetasService {

  private recetaURL = "http://192.168.100.128:3000/receta"

  constructor(private http: HttpClient) { }

  guardarrecetas(Receta){
    return this.http.post<any>(this.recetaURL, Receta)
  }
}
