import { Component, OnInit } from '@angular/core';
import { PerfilService } from '../Services/perfil.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  Envio = {Token: localStorage.getItem('Token')}
  Profile

  constructor(private perfil: PerfilService) { }

  ngOnInit(): void {
    this.buscaPerfil()
  }

  buscaPerfil(){
    this.perfil.buscaPerfil(this.Envio).subscribe(
      res=>{
        this.Profile = res[0]
        console.log(this.Profile)
      }, 
      err=>{console.log(err)})
  }

}
