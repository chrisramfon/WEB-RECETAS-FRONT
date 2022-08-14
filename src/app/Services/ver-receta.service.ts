import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class VerRecetaService {

  private encontrarURL = 'http://192.168.100.128:3000/receta/encontrar'
  private favoritoURL = 'http://192.168.100.128:3000/receta/ValidaFavorito'
  private gfavoritoURL = 'http://192.168.100.128:3000/receta//GuardarFavorito'
  private editarURL = 'http://192.168.100.128:3000/receta/Modificar'
  private vistaURL = "http://192.168.100.128:3000/perfil//Vista"


  constructor(private http: HttpClient) { }

  getReceta(Res) {

    return this.http.post<any>(this.encontrarURL, Res)

  }

  postValidaFavorito(Fav){
    return this.http.post<any>(this.favoritoURL, Fav)
  }

  postGaurdaFavorito(Fav){
    return this.http.post<any>(this.gfavoritoURL, Fav)
  }

  editarReceta(Envio){
    return this.http.put<any>(this.editarURL, Envio)
  }

  vistaReceta(id){
    return this.http.post<any>(this.vistaURL, id)
  }

}
