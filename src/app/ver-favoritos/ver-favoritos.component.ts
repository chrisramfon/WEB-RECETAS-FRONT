import { Component, OnInit } from '@angular/core';
import { VerFavoritosService } from '../Services/ver-favoritos.service';

@Component({
  selector: 'app-ver-favoritos',
  templateUrl: './ver-favoritos.component.html',
  styleUrls: ['./ver-favoritos.component.css']
})
export class VerFavoritosComponent implements OnInit {

  List
  Token = {Token: localStorage.getItem('Token')}

  constructor(private favorito: VerFavoritosService) { }

  ngOnInit(): void {
    this.postFavoritos(this.Token)
  }

  postFavoritos(Token){
    this.favorito.postFavoritos(Token).subscribe(
      res=>{this.List = res}, 
      err=>{ console.log(err)});
  }

}
