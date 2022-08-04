import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PerfilService {

  private buscarULR = 'http://127.0.0.1:3000/perfil'

  constructor(private http: HttpClient) { }

  buscaPerfil(Envio){
    return this.http.post<any>(this.buscarULR, Envio)
  }
}
