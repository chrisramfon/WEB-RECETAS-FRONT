import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private URLusuario = "http://127.0.0.1:3000/usuario"
  private url_usuario = "http://127.0.0.1:3000/usu";

  constructor(private http: HttpClient) { }

  postUsu(usuario){
    return this.http.post<any>(this.URLusuario, usuario)
  }

  modificarUsu(usuario){
    return this.http.put<any>(this.URLusuario, usuario);
  }

  consultarUsu(usuario){
    return this.http.get<any>(this.url_usuario+"/"+usuario.id)
  }

  eliminarUsu(usuario){
    return this.http.post(this.URLusuario+"/eliminar", usuario);
 }
}
