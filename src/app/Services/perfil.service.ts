import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PerfilService {

  private buscarULR = 'http://127.0.0.1:3000/perfil'
  private seguidoresURL = 'http://127.0.0.1:3000/perfil/Seguidores'
  private seguidosURL = 'http://127.0.0.1:3000/perfil/Seguidos'

  constructor(private http: HttpClient) { }

  buscaPerfil(Envio){
    return this.http.post<any>(this.buscarULR, Envio)
  }

  seguidoresPerfil(id){
    return this.http.post<any>(this.seguidoresURL, id)
  }

  seguidosPerfil(id){
    return this.http.post<any>(this.seguidosURL, id)
  }
}
