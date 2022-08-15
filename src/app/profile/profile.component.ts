import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PerfilService } from '../Services/perfil.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  EnvioP = {Token: localStorage.getItem('Token')}
  EnvioID = {id: ""}
  Profile
  Seguidores = {Seguidores: 0}
  Seguidos = {Seguidos: 0}
  Recetas

  constructor(private perfil: PerfilService, private router: Router) { }

  ngOnInit(): void {
    this.buscaPerfil()
  }

  buscaPerfil(){
    this.perfil.buscaPerfil(this.EnvioP).subscribe(
      res=>{
        this.Profile = res[0]
        this.EnvioID.id = this.Profile.id
        this.seguidoresPerfil(this.EnvioID)
        this.seguidoresPerfil(this.EnvioID)
        this.listarecetasPerfil(this.EnvioID)
      }, 
      err=>{console.log(err)})
  }

  seguidoresPerfil(id){
    this.perfil.seguidoresPerfil(id).subscribe(
      res=>{
        this.Seguidores = res[0]
    }, err=>{console.log(err)})
  }

  seguidosPerfil(id){
    this.perfil.seguidosPerfil(id).subscribe(
      res=>{
        this.Seguidos = res[0]
      },err=>{console.log(err)})
  }

  listarecetasPerfil(id){
    this.perfil.listarecetasPerfil(id).subscribe(
      res=>{
        this.Recetas = res
      }, err=>{console.log(err)}
    )
  }

  salir(){
    localStorage.removeItem('Token')
    this.router.navigate(['welcome'])
  }
}
