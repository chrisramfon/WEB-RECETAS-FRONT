import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PerfilService } from '../Services/perfil.service';

@Component({
  selector: 'app-editar-perfil',
  templateUrl: './editar-perfil.component.html',
  styleUrls: ['./editar-perfil.component.css']
})
export class EditarPerfilComponent implements OnInit {

  EnvioP = {Token: localStorage.getItem('Token')}
  Perfil = {Token: localStorage.getItem('Token'), Nombre: "", Correo: "", Bio: ""}

  constructor(private perfil: PerfilService, private router: Router) { }

  ngOnInit(): void {
    this.buscarPerfil()
  }

  buscarPerfil(){
    this.perfil.buscaPerfil(this.EnvioP).subscribe(
      res => {
        this.Perfil.Nombre = res[0].Nombre
        this.Perfil.Correo = res[0].Correo
        this.Perfil.Bio = res[0].Bio
        console.log(this.Perfil)
      }, err => {console.log(err)})
  }

  editarPerfil(){
    this.perfil.editarPerfil(this.Perfil).subscribe(
      res => {
        alert('Información guardada con éxito')
        this.router.navigate(['myprofile'])
      }, err => {console.log(err)})
  }

}
