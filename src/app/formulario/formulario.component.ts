import { Component, OnInit } from '@angular/core';
import { RecetasService } from '../Services/recetas.service';
@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  Recetas = {Imagen: "", Token: (localStorage.getItem('Token')),Titulo:"", Texto:"", Costo:"", Cocina:"", Lugar:"", Tiempo:"", Dificultad:"",Porciones:""}

  constructor(private recetasService: RecetasService ) { }

  ngOnInit(): void {
  }
  guardarReceta(){
    if(this.Recetas.Titulo == "" || this.Recetas.Costo == ""|| this.Recetas.Tiempo == ""|| this.Recetas.Dificultad == ""|| this.Recetas.Porciones == ""|| this.Recetas.Cocina == ""|| this.Recetas.Texto == ""){
      alert('Falta un campo')
    }else{
      this.recetasService.guardarrecetas(this.Recetas).subscribe(
        res=>{
          alert(`Receta ${this.Recetas.Titulo} registrada`)
          console.log(this.Recetas)
          this.limpiar()
      }, err=>console.log(err));
    }
  }

  limpiar(){
    this.Recetas.Imagen = ""
    this.Recetas.Titulo = ""
    this.Recetas.Texto = ""
    this.Recetas.Costo = ""
    this.Recetas.Cocina = ""
    this.Recetas.Lugar = ""
    this.Recetas.Tiempo = ""
    this.Recetas.Dificultad = ""
    this.Recetas.Porciones = ""
  }
}
/*

*/