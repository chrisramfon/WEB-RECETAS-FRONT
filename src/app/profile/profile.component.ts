import { Component, OnInit } from '@angular/core';
import { PerfilService } from '../Services/perfil.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  EnvioP = {Token: localStorage.getItem('Token')}
  EnvioS = {id: ""}
  Profile
  Seguidores = {Seguidores: 0}
  Seguidos = {Seguidos: 0}

  constructor(private perfil: PerfilService) { }

  ngOnInit(): void {
    this.buscaPerfil()
  }

  buscaPerfil(){
    this.perfil.buscaPerfil(this.EnvioP).subscribe(
      res=>{
        this.Profile = res[0]
        this.EnvioS.id = this.Profile.id
        this.seguidoresPerfil(this.EnvioS)
        this.seguidoresPerfil(this.EnvioS)
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
}
