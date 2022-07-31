import { Component, OnInit } from '@angular/core';
import { VerRecetaService } from '../Services/ver-receta.service';
import { ActivatedRoute,Router } from '@angular/router';

@Component({
  selector: 'app-ver-receta',
  templateUrl: './ver-receta.component.html',
  styleUrls: ['./ver-receta.component.css']
})
export class VerRecetaComponent implements OnInit {

  constructor(private receta: VerRecetaService, private Aroute: ActivatedRoute) { }

  Res = {id: "", Titulo: "", Texto: "", Likes: "", Fecha: "", Costo: "", Tipo_de_cocina: "", Lugar: "", Tiempo: "", Dificultad: "", Porciones: "", Usuario: ""}
  Fav = {Token: localStorage.getItem('Token'), Receta: this.Res.id = this.Aroute.snapshot.paramMap.get('id')}
  isFav 


  ngOnInit(): void {
    this.getReceta()
    this.postValidaFavorito()
  }

  getReceta(){
    this.Res.id = this.Aroute.snapshot.paramMap.get('id')
    this.receta.getReceta(this.Res).subscribe(
      res=>{
        this.Res = res
      }, 
      err =>{ console.log(err)})
  }

  postValidaFavorito(){
    this.receta.postValidaFavorito(this.Fav).subscribe(res=>{
      if(Object.keys(res).length > 0){
        this.isFav = true
      }else{
        this.isFav = false
      }
    }, err=>{ console.log(err)})
  }

  postGuardaFavorito(){
    this.receta.postGaurdaFavorito(this.Fav).subscribe(res=>{
    console.log(res)  
    }, err=>{console.log(err)})
  }

}
