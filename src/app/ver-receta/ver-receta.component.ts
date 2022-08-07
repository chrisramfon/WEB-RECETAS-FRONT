import { Component, OnInit } from '@angular/core';
import { VerRecetaService } from '../Services/ver-receta.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-ver-receta',
  templateUrl: './ver-receta.component.html',
  styleUrls: ['./ver-receta.component.css']
})
export class VerRecetaComponent implements OnInit {

  constructor(private receta: VerRecetaService, private Aroute: ActivatedRoute) { }

  //Guarda la información de la receta
  Res = {id: "", Titulo: "", Texto: "", Likes: "", Fecha: "", Costo: "", Tipo_de_cocina: "", Lugar: "", Tiempo: "", Dificultad: "", Porciones: "", Usuario: ""}
  //Este objeto almacena la información para validar en favoritos o registra en favoritos
  Fav = {Token: localStorage.getItem('Token'), Receta: this.Res.id = this.Aroute.snapshot.paramMap.get('id')}
  //Variable que almacena cuando una receta está en favoritos o no
  isFav 


  ngOnInit(): void {
    this.getReceta()
    this.postValidaFavorito()
  }

  //Obtiene la receta de la base de datos
  getReceta(){
    this.Res.id = this.Aroute.snapshot.paramMap.get('id')
    this.receta.getReceta(this.Res).subscribe(
      res=>{
        this.Res = res
      }, 
      err =>{ console.log(err)})
  }

  //Verifica si la receta ya está en favoritos o no
  postValidaFavorito(){
    this.receta.postValidaFavorito(this.Fav).subscribe(res=>{
      if(Object.keys(res).length > 0){
        this.isFav = true
      }else{
        this.isFav = false
      }
    }, err=>{ console.log(err)})
  }

  //Guarda la receta en facoritos
  postGuardaFavorito(){
    this.receta.postGaurdaFavorito(this.Fav).subscribe(res=>{
    console.log(res)
    this.isFav = true
    }, err=>{console.log(err)})
  }

}
