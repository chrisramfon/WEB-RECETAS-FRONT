import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class VerRecetaService {

  private encontrarURL = 'http://127.0.0.1:3000/receta/encontrar'
  private favoritoURL = 'http://127.0.0.1:3000/receta/ValidaFavorito'

  constructor(private http: HttpClient) { }

  getReceta(Res) {

    return this.http.post<any>(this.encontrarURL, Res)

  }

  postValidaFavorito(Fav){
    return this.http.post<any>(this.favoritoURL, Fav)
  }

}
