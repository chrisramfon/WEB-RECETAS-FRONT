import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-formulario',
  templateUrl: './edit-formulario.component.html',
  styleUrls: ['./edit-formulario.component.css']
})
export class EditFormularioComponent implements OnInit {

  Recetas = {Imagen: "", Token: (localStorage.getItem('Token')),Titulo:"", Texto:"", Costo:"", Cocina:"", Lugar:"", Tiempo:"", Dificultad:"",Porciones:""}

  constructor() { }


  ngOnInit(): void {
  }
  
}
