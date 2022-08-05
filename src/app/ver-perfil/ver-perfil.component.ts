import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PerfilService } from '../Services/perfil.service';

@Component({
  selector: 'app-ver-perfil',
  templateUrl: './ver-perfil.component.html',
  styleUrls: ['./ver-perfil.component.css']
})
export class VerPerfilComponent implements OnInit {

  constructor(private Aroute: ActivatedRoute, private perfil: PerfilService) { }

  ngOnInit(): void {
    this.buscarPerfil()
    this.seguidoresPerfil()
    this.seguidosPerfil()
    this.listarecetasPerfil()
  }

  Envio = {id: this.Aroute.snapshot.paramMap.get('id')}
  Profile
  Seguidores = {Seguidores: 0}
  Seguidos = {Seguidos: 0}
  Recetas

  buscarPerfil(){
    this.perfil.buscaPerfil(this.Envio).subscribe(
      res =>{
        this.Profile = res[0]
      }, 
      err=>{console.log(err)})
  }

  seguidoresPerfil(){
    this.perfil.seguidoresPerfil(this.Envio).subscribe(
      res=>{
        this.Seguidores = res[0]
      }, err=>{console.log(err)})
  }

  seguidosPerfil(){
    this.perfil.seguidosPerfil(this.Envio).subscribe(
      res=>{
        this.Seguidos = res[0]
      }, err=> {console.log(err)}
    )
  }

  listarecetasPerfil(){
    this.perfil.listarecetasPerfil(this.Envio).subscribe(
      res => {
        this.Recetas = res
      }, err => (console.log(err))
    )
  }
}
