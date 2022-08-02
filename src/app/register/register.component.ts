import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../Services/usuario.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  usuario={
    id: "",
    Usuario: "",
    Pass: "",
    Status: "",
    Token: (localStorage.getItem('Token'))
}

  constructor(private usuService: UsuarioService) {}

  ngOnInit(): void {
  }

  registrar() { //accion que toma el boton en el html //aqui tambien se declara el servicio
    this.usuario.id = this.usuario.id;
    this.usuService.postUsu(this.usuario).subscribe(res=>{
      alert("Usuario registrado");
    }, err=>console.log(err));
  }

}
