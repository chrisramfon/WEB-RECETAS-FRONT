import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class VerFavoritosService {

  private urlFavoritos = 'http://192.168.100.128:3000/receta/Favoritos'

  constructor(private http: HttpClient) { }

  postFavoritos(Token){
    return this.http.post<any>(this.urlFavoritos, Token)
  }

}
