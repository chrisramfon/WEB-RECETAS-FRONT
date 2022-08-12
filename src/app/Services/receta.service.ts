import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RecetaService {

  private recetaURL = "http://127.0.0.1:3000/receta"

  constructor(private http: HttpClient) { }

  postReceta(receta){
    return this.http.post<any>(this.recetaURL, receta)
  }

  modificarReceta(receta){
    return this.http.put<any>(this.recetaURL, receta);
  }

  consultarReceta(receta){
    return this.http.get<any>(this.recetaURL+"/"+receta.id)
  }

  eliminarReceta(receta){
    return this.http.post(this.recetaURL+"/eliminar", receta);
 }

}
