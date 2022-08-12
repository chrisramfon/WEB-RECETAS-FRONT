import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PerfilService {

  private buscarULR = 'http://127.0.0.1:3000/perfil'
  private seguidoresURL = 'http://127.0.0.1:3000/perfil/Seguidores'
  private seguidosURL = 'http://127.0.0.1:3000/perfil/Seguidos'
  private recetasURL = 'http://127.0.0.1:3000/receta/Usuario'
  private validaseguidoURL = 'http://127.0.0.1:3000/perfil/ValidaSeguido'
  private seguirURL = 'http://127.0.0.1:3000/perfil/Seguir'
  private dejarseguirURL = 'http://127.0.0.1:3000/perfil/DejarSeguir'
  private editarURL = 'http://127.0.0.1:3000/perfil/Editar'

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

  listarecetasPerfil(id){
    return this.http.post<any>(this.recetasURL, id)
  }

  validaseguidoPerfil(Envio){
    return this.http.post<any>(this.validaseguidoURL, Envio)
  }

  seguirPerfil(Envio){
    return this.http.post<any>(this.seguirURL, Envio)
  }

  dejarseguirPerfil(Envio){
    return this.http.post<any>(this.dejarseguirURL, Envio)
  }

  editarPerfil(Perfil){
    return this.http.post<any>(this.editarURL, Perfil)
  }
}
