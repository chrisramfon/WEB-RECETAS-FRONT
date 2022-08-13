import { Component, OnInit } from '@angular/core';
import { VerRecetaService } from '../Services/ver-receta.service';

@Component({
  selector: 'app-edit-formulario',
  templateUrl: './edit-formulario.component.html',
  styleUrls: ['./edit-formulario.component.css']
})
export class EditFormularioComponent implements OnInit {

  Res = {Token: localStorage.getItem('Token'), id: "", Titulo: "", Texto: "", Ingredientes: "", Likes: "", Fecha: "", Costo: "", Tipo_de_cocina: "", Lugar: "", Tiempo: "", Dificultad: "", Porciones: "", Usuario: ""}
  
  constructor(private receta: VerRecetaService) { }


  ngOnInit(): void {
    this.getReceta()
  }

  getReceta(){
    this.receta.getReceta({id: 1}).subscribe(
      res => {
        this.Res = res
        console.log(this.Res)
      }, err => {console.log(err)})
  }
}
