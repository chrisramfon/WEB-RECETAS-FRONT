import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RecetasService {

  private recetaURL = "http://127.0.0.1:3000/receta"

  constructor(private http: HttpClient) { }

  guardarrecetas(Receta){
    return this.http.post<any>(this.recetaURL, Receta)
  }
}
