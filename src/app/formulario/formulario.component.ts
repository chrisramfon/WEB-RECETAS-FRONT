import { Component, OnInit } from '@angular/core';
import { RecetasService } from '../Services/recetas.service';
@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  Recetas = {id:"", Imagen: "", Token: (localStorage.getItem('Token')),Titulo:"", Texto:"", Costo:"", Tipo_de_cocina:"", Lugar:"", Tiempo:"", Dificultad:"",Porciones:""}

  constructor(private recetasService: RecetasService ) { }

  ngOnInit(): void {
  }
  guardarReceta(){
    this.Recetas.id = this.Recetas.id;
    this.recetasService.guardarrecetas(this.Recetas).subscribe(res=>{
      alert("Receta guardada con éxito");
    }, err=>console.log(err));
  }
}
